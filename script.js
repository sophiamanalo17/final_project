let div = document.getElementById("daynight");
let timechange = document.getElementById("worddaynight");
let outputTimeDay = document.getElementById("sunshine");
let useOutput = document.getElementById("changewords");
let outputFace = document.getElementById("face");
let outputEmotion = document.getElementById("wordEmotion");

var words = ['empower.svg', 'connect.svg', 'enhance.svg', 'be_kind.svg'];
var currentIndex = 0;

var face = [["happy.svg", "happy"], ["mad.svg", "mad"], ["sad.svg", "sad"]];
var faceIndex = 0;


// section 3 day and night animation function
function sunormoon(myx){
    console.log("i ram")

   if (myx<500){
    div.style.backgroundColor = "rgb(252, 236, 201)"
    timechange.style.color = "rgb(68, 94, 147)"
    outputTimeDay.src = "sun.svg"
   } else {
    div.style.backgroundColor = "rgb(68, 94, 147)"
    timechange.style.color = "rgb(252, 236, 201)"
    outputTimeDay.src = "moon.svg"
   }
}

//section 3 animation event listener
div.addEventListener("mousemove", function(event) {
   let x = event.offsetX;
   let y = event.offsetY;

//    outputTimeDay.style.left = x
    sunormoon(x)
});

setInterval(function () {
    useOutput.src = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
 }, 500);

 var loopBegan = 0;
 var loopCompleted = 0;

//beginning animation
anime({
    targets: "#face",
    rotate: 360,
    loop: true,
    duration: 2300,
    easing: 'easeInOutSine',
    loopBegin: function(anim) {
        loopBegan++;
        face.value = 'loop began : ' + loopBegan;
        outputFace.src = face[faceIndex][0];   
        outputEmotion.innerText =  face[faceIndex][1];   
        faceIndex = (faceIndex + 1) % face.length
        console.log(loopBegan);
      },
      loopComplete: function(anim) {
        loopCompleted++;
        face.value = 'loop completed : ' + loopCompleted;
      }
});



