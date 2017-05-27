//Listener for events of message type coming from main thread.
self.addEventListener('message', function(e) {
	console.log(e);
	//colorArray : is satatic array of hexa color.
    var colorArray = ["d0efb1","9dc3c2","4d7298", "#a94251", "#42a978", "#dfea04"];
	//initializes the counter.
	var cp = e.data;
	//used to iterate the execution of instructions in each 1000 seconds.
	setInterval(function(){
		//Send the message back to main thread.
		self.postMessage(colorArray[cp]);
		cp++;
		if(cp == colorArray.length ){
			cp = 0;
		}
	 }, 1000);
	 
}, false);