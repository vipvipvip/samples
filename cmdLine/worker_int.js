console.log('int worker')

function sendInt(req, res) {
    console.log('Process ' + process.pid + ' is reponding to this request');
    res.json(Math.random());
}

module.exports = {
    sendInt: sendInt
}
