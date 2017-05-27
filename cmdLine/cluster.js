var cluster = require('cluster'),
	restartWorkers = function restartWorkers() {
		var wid, workerIds = [];

		// create a copy of current running worker ids
		for(wid in cluster.workers) {
			workerIds.push(wid);
		}

		workerIds.forEach(function(wid) {
			cluster.workers[wid].send({
				text: 'shutdown',
				from: 'master'
			});

			setTimeout(function() {
				if(cluster.workers[wid]) {
					cluster.workers[wid].kill('SIGKILL');
				}
			}, 5000);
		});
	};

// array of all forked workers
var workerIds = [];

if(cluster.isMaster) {
	var numWorkers = require('os').cpus().length,
		fs = require('fs'),
		i, worker;

	console.log('Master cluster setting up ' + numWorkers + ' workers...');
	for(i = 0; i < numWorkers; i++) {
		worker = cluster.fork();
        workerIds.push(worker);
		worker.on('message', function() {
			console.log('arguments', arguments);
		});
	}

	// set up listener of file changes for restarting workers
	fs.readdir('.', function(err, files) {
		files.forEach(function(file) {
			fs.watch(file, function() {
				restartWorkers();
			});
		});
	});

	cluster.on('exit', function(_worker, code, signal) {
		console.log('Worker ' + _worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log(workerIds.length);
        workerIds.splice(workerIds.indexOf(worker),1);
        console.log(workerIds.length);
        console.log('Starting a new worker');
		worker = cluster.fork();
        workerIds.push(worker);
        console.log(workerIds.length);
		worker.on('message', function() {
			console.log('arguments', arguments);
		});
	});
} else {
    const express = require('express')
    var bodyParser = require("body-parser");
    var path = require('path');
    const app = express()

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({ type: 'application/json' }));
    
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }); 

    var iw = require('./worker_int')
    app.use('/iw', iw.sendInt);
    
    var server = app.listen(8000, function() {
        console.log('Process ' + process.pid + ' is listening to all incoming requests');
    });


	process.on('message', function(message) {
		if(message.type === 'shutdown') {
            console.log('shutting down...');
			process.exit(0);
		}
	});

	console.log('Worker ' + process.pid + ' is alive!');
}