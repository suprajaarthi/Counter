// var title = document.getElementsByTagName("h1");
// var titletwo = document.getElementsByClassName("title");
// var titletwo = document.getElementsByClassName("title")[0].innerText;
// class name
var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

// set the value of a class 
// counter.innerHTML = 1000;
let count = 1;
// it increases gradually with time of 1000ms 
setInterval(()=>
{
	if(count<=100){
		count++;
		counter.innerText = count;
}
},50);

setTimeout(()=>{

	followers.innerText = "SUCESS!!";
},100);

