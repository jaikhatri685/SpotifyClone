let temp=Math.floor(Math.random()*7)+1
var audio = new Audio(`../songs/${temp}.mp3`);
let index=temp;


PlayBtn = document.getElementById("play-btn");
ForwardButton = document.getElementById("forward-btn")
BackwardButton = document.getElementById("backward-btn")
myProgressBar = document.getElementById("progress-bar");
let songBanner=document.getElementById("song-banner");

totalDuration = document.getElementById("totaltime");
let songItems = document.getElementsByClassName("songItem");

let songs = [
  {
    songname: "Uncha Lamba Kad - PagalNew",
    filepath: "../songs/1.mp3",
    coverpath: "../covers/1.jpg",
  },
  {
    songname: "Ranjha - Shershaah",
    filepath: "../songs/2.mp3",
    coverpath: "../covers/2.jpg",
  },
  {
    songname: "Dance Meri Rani Guru Randhawa",
    filepath: "../songs/3.mp3",
    coverpath: "../covers/3.jpg",
  },
  {
    songname: "Rait Zara Si Atrangi Re",
    filepath: "../songs/4.mp3",
    coverpath: "../covers/4.jpg",
  },
  {
    songname: "Sirf Tu - Stebin Ben",
    filepath: "../songs/5.mp3",
    coverpath: "../covers/5.jpg",
  },
  {
    songname: "Kusu Kusu - Satyameva Jayate 2",
    filepath: "../songs/6.mp3",
    coverpath: "../covers/6.jpg",
  },
  {
    songname: "Tenu Lehenga - Satyameva Jayate 2",
    filepath: "../songs/7.mp3",
    coverpath: "../covers/7.jpg",
  },
];


document.getElementById("TitlebelowBar").innerText=songs[index-1].songname;
songBanner.src=songs[index-1].coverpath;
for (let i = 0; i < songItems.length; i++) {
  songItems[i].getElementsByTagName("img")[0].src = songs[i].coverpath;
  songItems[i].getElementsByTagName("span")[0].innerText = songs[i].songname;
}


PlayBtn.addEventListener("click", function () {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    document.getElementById(`${index}`).classList.remove("fa-play-circle");
    document.getElementById(`${index}`).classList.add("fa-pause-circle")
    

    PlayBtn.classList.remove("fa-play-circle");
    PlayBtn.classList.add("fa-pause-circle");
    document.getElementById("gif").style.opacity = 1;
  } else {
    audio.pause();
    makeAllPlay();
    PlayBtn.classList.remove("fa-pause-circle");
    PlayBtn.classList.add("fa-play-circle");
    document.getElementById("gif").style.opacity = 0;
  }
});

myProgressBar.addEventListener("click", function () {
  let percent = myProgressBar.value / 100;
  console.log(percent);
  audio.currentTime = percent * audio.duration;
  myProgressBar.value = percent * 100;
});
setInterval(function () {
  var myNumber = Math.floor(audio.currentTime) % 60;
  var formattedNumber = ("0" + myNumber).slice(-2);
  console.log(formattedNumber);
  myProgressBar.value = (audio.currentTime / audio.duration) * 100;
  document.getElementById("timeelapsed").innerText =
    Math.floor(Math.floor(audio.currentTime / 60)) + ":" + formattedNumber;
}, 500);

function makeAllPlay() {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element, i) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element, i) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();
      audio.src = `../songs/${i + 1}.mp3`;
      index=i+1;
      document.getElementById("TitlebelowBar").innerText=songs[index-1].songname;
      audio.currentTime = 0;
      audio.play();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      document.getElementById("gif").style.opacity = 1;
      PlayBtn.classList.remove("fa-play-circle");
      PlayBtn.classList.add("fa-pause-circle");
  
    });
  }
)

  

BackwardButton.addEventListener("click",function() {
    index=index-1;

    if(index===0)
    {
        index=7;
    }
    audio.src= `../songs/${index}.mp3`
    document.getElementById("TitlebelowBar").innerText=songs[index-1].songname;
    audio.currentTime=0;
    makeAllPlay();
    audio.play();
    PlayBtn.classList.remove("fa-play-circle");
    PlayBtn.classList.add("fa-pause-circle");
    document.getElementById("gif").style.opacity = 1;
    songBanner.src=songs[index-1].coverpath;

})
ForwardButton.addEventListener("click",function() {
    index=index+1;
    if(index===8)
    {
        index=0;
    }
    document.getElementById("TitlebelowBar").innerText=songs[index-1].songname;
    audio.src= `../songs/${index}.mp3`;
    audio.currentTime=0;
    makeAllPlay();
    audio.play()
    PlayBtn.classList.remove("fa-play-circle");
    PlayBtn.classList.add("fa-pause-circle");
    document.getElementById("gif").style.opacity = 1;
    songBanner.src=songs[index-1].coverpath;
    
})
