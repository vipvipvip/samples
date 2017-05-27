x = [];
selectedRide = "";
tickers = [];
quote = [];

  
rides = {
  "statusCode": 200,
  "result": [
    {
      "state": "open",
      "queueLength": 42956.184323999994,
      "queueLengthLastModified": "2016-03-08T07:11:13.308-05:00",
      "useVirtualQueue": true,
      "throughput": 920,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:06:41.429-04:00",
      "closedAt": null,
      "minWait": 0,
      "waitTimeMins": 0,
      "id": "13f3b625-b39e-4875-b29c-0173712b3c87",
      "shortId": 5,
      "name": "Der Stuka",
      "description": "TODO Description",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "140cm",
        "visible.restrictions.max_height": "196cm",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15",
        "is_swappable": "False",
        "qband_name": "Der Stuka"
      },
      "localizations": [],
      "lastChanged": "635930358733877003",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    },
    {
      "state": "open",
      "queueLength": 636102.26782,
      "queueLengthLastModified": "2016-04-06T13:29:28.584-04:00",
      "useVirtualQueue": true,
      "throughput": 920,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:06:41.429-04:00",
      "closedAt": null,
      "minWait": 660,
      "waitTimeMins": 11,
      "id": "b52b5081-e1df-42da-ba76-027c63205f8e",
      "shortId": 4,
      "name": "Brain Wash",
      "description": "TODO Description",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "140cm",
        "visible.restrictions.max_height": "196cm",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15",
        "is_swappable": "False",
        "qband_name": "Brain Wash"
      },
      "localizations": [],
      "lastChanged": "635955605688344983",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    },
    {
      "state": "open",
      "queueLength": 0,
      "queueLengthLastModified": "2016-03-08T07:11:13.557-05:00",
      "useVirtualQueue": false,
      "throughput": 400,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:06:41.429-04:00",
      "closedAt": null,
      "minWait": 0,
      "waitTimeMins": 0,
      "id": "13a71e7c-c585-43fd-b879-0df77e3edd32",
      "shortId": 9,
      "name": "The Flyer",
      "description": "TODO Descrption",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "110cm",
        "visible.restrictions.min_accompanied_height": "90cm",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15",
        "is_swappable": "False",
        "qband_name": "The Flyer"
      },
      "localizations": [],
      "lastChanged": "635930358735699083",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    },
    {
      "state": "closed",
      "queueLength": 43060.705431999995,
      "queueLengthLastModified": "2016-03-08T07:11:13.194-05:00",
      "useVirtualQueue": true,
      "throughput": 920,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:06:41.429-04:00",
      "closedAt": null,
      "minWait": 0,
      "waitTimeMins": 0,
      "id": "e811f690-d427-41b6-b49e-0e8aab5f55ed",
      "shortId": 3,
      "name": "Bomb Bay",
      "description": "",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "140cm",
        "visible.restrictions.max_height": "196cm",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15",
        "is_swappable": "False",
        "qband_name": "Bomb Bay"
      },
      "localizations": [],
      "lastChanged": "635930358732078867",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    },
    {
      "state": "closed",
      "queueLength": 0,
      "queueLengthLastModified": "2016-03-08T07:11:13.419-05:00",
      "useVirtualQueue": false,
      "throughput": 320,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:06:41.429-04:00",
      "closedAt": null,
      "minWait": 0,
      "waitTimeMins": 0,
      "id": "f6c44b60-9697-4522-b0b0-18973b11e600",
      "shortId": 6,
      "name": "Disco H20",
      "description": "TODO Description",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "130cm",
        "visible.restrictions.min_accompanied_height": "100cm",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15",
        "is_swappable": "False",
        "qband_name": "Disco H20"
      },
      "localizations": [],
      "lastChanged": "635930358734199006",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    },
    {
      "state": "open",
      "queueLength": 120000,
      "queueLengthLastModified": "2016-04-13T06:07:11.399-04:00",
      "useVirtualQueue": false,
      "throughput": 100,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:07:11.399-04:00",
      "closedAt": null,
      "minWait": 1200,
      "waitTimeMins": 20,
      "id": "f3148ebb-e19d-4520-8376-88292a9db76b",
      "shortId": 2,
      "name": "Black Hole",
      "description": "TODO description",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "140cm",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15",
        "is_swappable": "False",
        "qband_name": "Black Hole"
      },
      "localizations": [],
      "lastChanged": "635961388315555366",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    },
    {
      "state": "shutdown",
      "queueLength": 0,
      "queueLengthLastModified": "2016-03-08T07:11:13.605-05:00",
      "useVirtualQueue": false,
      "throughput": 162.5,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:06:41.429-04:00",
      "closedAt": null,
      "minWait": 0,
      "waitTimeMins": 0,
      "id": "00b19231-5940-483f-9ba0-a125ba07f429",
      "shortId": 10,
      "name": "The Storm",
      "description": "TODO Description",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "130cm",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15",
        "is_swappable": "False",
        "qband_name": "The Storm"
      },
      "localizations": [],
      "lastChanged": "635930358736189132",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    },
    {
      "state": "shutdown",
      "queueLength": 0,
      "queueLengthLastModified": "2016-04-13T06:07:47.947-04:00",
      "useVirtualQueue": false,
      "throughput": 760,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:07:47.947-04:00",
      "closedAt": null,
      "minWait": 0,
      "waitTimeMins": 0,
      "id": "116eb660-0e96-462d-a967-a6f460abb4db",
      "shortId": 1,
      "name": "Aqua Drag Racer",
      "description": "TODO Add description",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "140cm",
        "qband_name": "Aqua Drag Racer",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15"
      },
      "localizations": [],
      "lastChanged": "635961388679940260",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    },
    {
      "state": "open",
      "queueLength": 0,
      "queueLengthLastModified": "2016-03-08T07:11:13.652-05:00",
      "useVirtualQueue": false,
      "throughput": 60,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:06:41.429-04:00",
      "closedAt": null,
      "minWait": 0,
      "waitTimeMins": 0,
      "id": "a1d7d496-aeb2-493a-83dc-b6ce113e5e61",
      "shortId": 11,
      "name": "The Surge",
      "description": "TODO Description",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "140cm",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15",
        "is_swappable": "False",
        "qband_name": "The Surge"
      },
      "localizations": [],
      "lastChanged": "635930358736639177",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    },
    {
      "state": "open",
      "queueLength": 42820.568136,
      "queueLengthLastModified": "2016-03-08T07:11:13.455-05:00",
      "useVirtualQueue": true,
      "throughput": 920,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:06:41.429-04:00",
      "closedAt": null,
      "minWait": 0,
      "waitTimeMins": 0,
      "id": "1314bc7a-44e5-4581-9465-ba1290b2de3f",
      "shortId": 7,
      "name": "Mach 5",
      "description": "TODO Description",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "140cm",
        "visible.restrictions.max_height": "196cm",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15",
        "is_swappable": "False",
        "qband_name": "Lord Skreem"
      },
      "localizations": [],
      "lastChanged": "635930358734961053",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    },
    {
      "state": "open",
      "queueLength": 42768.310939999996,
      "queueLengthLastModified": "2016-03-08T07:11:13.512-05:00",
      "useVirtualQueue": true,
      "throughput": 920,
      "openingTime": null,
      "currentBufferQueueWait": 0,
      "targetBufferQueueWait": 900,
      "emergencyDuration": 15,
      "hideUnavailableWaitTime": false,
      "bufferQueueLastModified": "2016-04-13T06:06:41.429-04:00",
      "closedAt": null,
      "minWait": 0,
      "waitTimeMins": 0,
      "id": "d4f80e9c-7023-4da2-93ca-bc7a7af6bec6",
      "shortId": 8,
      "name": "The Blast",
      "description": "TODO Description",
      "thumbHash": null,
      "imageCount": 0,
      "images": [],
      "ordinal": 0,
      "info": {
        "visible.restrictions.min_height": "140cm",
        "hide_unavailable_wait_time": "False",
        "max_over_reserve_size": "0",
        "max_reservation_size": "20",
        "emergency.durationMins": "15",
        "is_swappable": "False",
        "qband_name": "The Blast"
      },
      "localizations": [],
      "lastChanged": "635930358735187061",
      "maxReservationSize": 20,
      "maxOverReserveSize": 0
    }
  ]
};

console.log('======each======');
(function() {
	[1, 2, 3,5,6,7,8,9,77777,3345,345,345,34645,3455,3455].forEach( 
	function(x) {
		console.log(x);}
	);
}());

console.log('======map======');
(function() {
	var x = [1, 2, 3,5,6,7,8,9].map( 
		function(x) {
			return x*2;
		}
	);
	console.log(x);
}());

console.log('======reduce======');
(function() {
	var x = [1, 2, 3,5,6,7,8,9].reduce( 
		function(x) {
			return x+2;
		}
	);
	console.log(x);
}());

console.log('======find======');
(function() {
	var x = [1, 2, 3,5,6,7,8,9,10].find( 
		function(x) {
			return x%2==0;
		}
	);
	console.log(x);
}());

console.log('======filter pick even #s ======');
(function() {
	var x = [1, 2,3,5,6,7,8,9,10,100,202].filter( 
		function(x) {
			return x%2==0;
		}
	);
	console.log(x);
}());

console.log('=======double only odd #s, filter and map');
(function() {
  var numbers = [1, 2, 3, 4];
console.log("Original Array", numbers);

var newNumbers = numbers.filter(function(number,index, arr){
    console.log('Filter index:%s, value:%s, %', index, arr[index], number % 2 !== 0 ? "selected" : "not selected");
    return (number % 2 !== 0);
}).map(function(number, index, arr){
    console.log('Map index:%s, value:%s', index, arr[index]);
    return number * 2;
});

console.log("The doubled numbers are", newNumbers); // [2, 6]
})();

console.log('=======reduce Trick');
console.log("Source: %s", "http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/");
(function() {
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.reduce(function(newArray, number){
    newArray.push(number);

    if(number % 2 == 0) {
        /* Add it a second time. */
        newArray.push(number);
    }

    return newArray; /* This is important! */
}, []);
console.log("The final numbers are", newNumbers); // [1, 2, 2, 3, 4, 4]
}());


// console.log("==== Demethodizing the Array method, forEach(),  into a generic 'each'");
// (function() {
// var each = Function.prototype.call.bind([].forEach);

// var nodeList = document.querySelectorAll("table");

// each(nodeList,bold);

// 	function bold(node){
// 	   node.style.fontWeight ="bold";
// 	}
// }());


console.log('=======Dictionary');
(function() {
	var dict = [];
	dict.push({
		key:'dikesh',
		val: 'male'});
	dict.push({
		key:'madhavi',
		val: 'female'});

	Object.keys(dict).forEach(function (key) {
		console.log(dict[key].val);
	});
	dict.find(function(k) {
		console.log(k.key);
		if (k.key === 'dikesh') console.log(k.val);
	})
}());

//console.group();
console.log("==== Parse the array and return an object that contains the number of times each string occured in the array =======");
console.log("-- from:  http://colintoh.com/blog/5-array-methods-that-you-should-use-today");
(function() {
var arr = ["apple","orange","apple","orange","pear","orange"];
console.log("Orig Array" + JSON.stringify(arr));

function getWordCnt(){
    return arr.reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    },{});
}

console.log(getWordCnt());
}());


console.log("===== count ride states ===== ");
(function() {
function getRideStateCnt(){
    return rides.result.reduce(function(prev,next, index, arr){
    	//console.log(arr[index]);
    	prev[next.state] = (prev[next.state] + 1) || 1;
        return prev;
    },{});
}

console.log("<b>Final Ride State:</b>", getRideStateCnt());
}({}));


console.log("===== Understanding next/previous in reduce()======");
(function() {
var arr = ["apple","orange","apple","pear"];
console.log("Orig Array" + JSON.stringify(arr));
function getWordCnt(){
    return arr.reduce(function(prev,next,index){
        console.log("<b>Iteration "+index+"</b>");
        console.log("prev:",prev);
        console.log("next:",next);
        
        prev[next] = ++prev[next] || 1;
        console.log("Passing this to the 'prev' of the next iteration if any:",prev);
        console.log("---------------");
        return prev;
    },{});
}

console.log("<b>Final Object:</b>",getWordCnt());

}());
//console.groupEnd();

console.log('======Object Map & Join======');
(function() {
  var obj = {
    param1: 'val1',
    param2: 'val2',
    param3: 'val3',
  };
  // convert to a url query string of the form
  // param1=val1&param2=val2&param3=val3

  var str = Object.keys(obj).map(function(key) {
      return key + '=' + obj[key];
  }).join('&');
  console.log(str);
}());


if ( 1==1){

console.log("======slice/dice array of objects ======");
(function() {
var guests = {
	age: 49,
	occupations: ["writer", "director", "producer", "composer", "actor"],
	shows: [{
		title: "Dollhouse",
		femaleLead: true,
		characters: [{
			name: "Echo",
			role: "doll"
		}, {
			name: "Topher",
			role: "mad scientist"
		}]
	}, {
		title: "Dr. Horrible's Sing-Along Blog",
		characters: [{
			name: "Billy",
			role: "mad scientist"
		}, {
			name: "Penny",
			role: "love interest"
		}]
	}, {
		title: "Buffy the Vampire Slayer",
		femaleLead: true,
		characters: [{
			name: "Buffy",
			role: "slayer"
		}, {
			name: "Angel",
			role: "love interest"
		}]
	}, {
		title: "Firefly",
		characters: [{
			name: "Mal",
			role: "captain"
		}, {
			name: "Kaylee",
			role: "mechanic"
		}]
	}]
}

console.log(guests.shows.map(function(s) { return s.title}));
console.log(guests.shows.filter(function(s) {return s.title == 'Firefly'}) );
console.log(guests.shows.filter(function(x) {
		return x.femaleLead == true;
		}));
var flTrue = guests.shows.filter(function(x) {
		return x.femaleLead == true;
	});
var r = [];
r = flTrue.slice();
//console.log(angular.toJson(flTrue));
r = r.map(function(x) {
		x.femaleLead = false;
		return x;
	});
//console.log(angular.toJson(r));

}());
if (1==0)
{
console.log("======Ride selection ======");
//console.group();
(function() {	
	
	console.log('== extract a field value for a specific field. ===');
	console.log(rides.result.map(function(s) { return s.name}));

	console.log('=== create a new array with subset of fields and additional computed field. ===');
	x = rides.result.map(function(x) {
		return {id:x.id, name:x.name, pic: (typeof x.name == typeof "XXX") ? x.name + '.png' : null }
	});
	console.log(x);


	//delete a ride
	console.log("=====find and delete a ride in the same array");
	console.log("=====find a ride first ");
	var str = "Brain Wash";
	selectedRide = rides.result.find(function(ride, idx, arrX) {
		return ride.name.indexOf(str) != -1 ;
	});

	if (!selectedRide.hasOwnProperty('pic')) {
		selectedRide.pic = selectedRide.name + '.png'
	}
	console.log(selectedRide);
	console.log("=====now delete it");
	console.log('before delete count:' + rides.result.length);
	var pos = rides.result.indexOf(selectedRide);
	console.log('found at pos:' + pos);
	if (pos != -1) rides.result.splice(pos,1);
	console.log('after delete count:' + rides.result.length);
	console.log(rides.result.indexOf(selectedRide));

	console.log('=== another way of deleting using bind(). ===');
	// first declare a func that takes a parm
	function isFound(findstr, ele) {
		console.log('FindString:' + findstr);
//		console.log(angular.toJson(ele));
		return ele.name.indexOf(findstr) != -1;
	};

	selectedRide = rides.result.find(isFound.bind(this, "Bomb Bay"));
	console.log(selectedRide);
	console.log("=====now delete it");
	console.log(rides.result);
	console.log('before delete count:' + rides.result.length);
	pos = rides.result.indexOf(selectedRide);
	console.log(pos);
	if (pos != 1) rides.result.splice(pos,1);
	console.log('after delete count:' + rides.result.length);
	console.log(rides.result.indexOf(selectedRide));


	selectedRide = rides.result.find(isFound.bind(this, "The Flyer"));
	if (!selectedRide.hasOwnProperty('pic')) {
		selectedRide.pic = selectedRide.name + '.png'
	}
	console.log(selectedRide);
}());
//console.groupEnd();
}
} // end if(1==1)
