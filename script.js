console.log("Welcome to Spotify");

let songindex = 0;
let audioelement = new Audio("music/1.mp3");

let masterplay = document.getElementById('masterplay'); // MAIN PLAY BUTTON
let myprogressbar = document.getElementById("myProgessBar"); // PROGRESS BAR
let gif = document.getElementById("playergif");
let songItems = Array.from(document.getElementsByClassName("songitem")); // ALL SONG ITEM CLASS
let mastersongname = document.getElementById("masterSongName"); // ANME OF SONG PLAYED



let songs =[
    { songname : "Kahriyat", filepath : "music/1.mp3", coverpath :"images/cover1.jpg" } , 
    { songname : "Aagr tum saath ho", filepath : "music/2.mp3", coverpath :"images/cover2.jpg" } ,
    { songname : "Desh Mera", filepath : "music/3.mp3", coverpath :"images/cover3.jfif" } ,
    { songname : "Chunar", filepath : "music/4.mp3", coverpath :"images/cover4.jpg" } ,
    { songname : "Galti sa Mistake", filepath : "music/5.mp3", coverpath :"images/cover5.jpg" } ,
    { songname : "Ma tera Boyfriend", filepath : "music/6.mp3", coverpath :"images/cover6.jpg" } ,
    { songname : "Sanam Re", filepath : "music/7.mp3", coverpath :"images/cover7.jpg" } ,
    { songname : "Naina", filepath : "music/8.mp3", coverpath :"images/cover8.jpg" } ,
    { songname : "Mast Magan", filepath : "music/9.mp3", coverpath :"images/cover9.jfif" } ,

]


songItems.forEach((element,i)=>{
  
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songname;

})


// master button play and pause 

masterplay.addEventListener("click" , ()=>{
    if (audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove("fa-circle-play"); // classlist usied to mainopulate element
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity =1;
    }
    else
    {
        audioelement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity =0;
    }
})



// Seekbar
audioelement.addEventListener("timeupdate" , ()=>
{
    //update seekbar
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value =progress;
}
);


myprogressbar.addEventListener("change" , ()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration * 0.01;
})


const MakeAllPlays = ()=>{
    
    Array.from (document.getElementsByClassName("songItemplay")).forEach( (element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}



Array.from (document.getElementsByClassName("songItemplay")).forEach( (element)=> {
    element.addEventListener("click" ,(e)=>{  // e atla jena par clik thayo hoi ee

        MakeAllPlays();
    

        songindex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioelement.src = `music/${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime =0;
        audioelement.play();
        gif.style.opacity =1;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
    })
}
    
);


document.getElementById('next').addEventListener("click" , ()=>{
    if(songindex>=8)
    {
        songindex=0;
    }
    else
    {
        songindex += 1;
    }
    
    audioelement.src = `music/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;

        audioelement.currentTime =0; 
        audioelement.play();
  
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
})


document.getElementById('previous').addEventListener("click" , ()=>{
    if(songindex<=1)
    {
        songindex=0;
    }
    else
    {
        songindex -= 1;
    }
    audioelement.src = `music/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime =0;
        audioelement.play();
      
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
})
 

