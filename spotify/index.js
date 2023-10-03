console.log("welcome");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let masterSongName =document.getElementById('masterSongName');


let songs =[
    {songName: "Salam-e-Isq",filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Let me Love You",filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Alone",filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "tumhare qasam",filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "Salam-e-Isq",filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "Salam-e-Isq",filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Salam-e-Isq",filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "Salam-e-Isq",filePath: "songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "Salam-e-Isq",filePath: "songs/9.mp3",coverPath: "covers/9.jpg"},
    {songName: "Salam-e-Isq",filePath: "songs/10.mp3",coverPath: "covers/10.jpg"},
]


//handle play/pause  click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;

    }
})


//listen to events

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    //update seeker(progreessbar)//is say bus progress bar chaltay rahay ga progressbar pay click kr kay song agay nahi barhay ga woh nechay walay ssay barhay ga
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
 //change progressbar say song bhe agar bhr raha he
myProgressBar.addEventListener('change',() =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//song name or uske image ko javscript say likhwaya he
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
});
//


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}



    
    //     if(audioElement.play ){
    //         audioElement.pause();
             
 
    //     }
    //     else{
    //         audioElement.play();
           
    
    //     }
       
        
    // })


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 

        
        makeAllPlays();
   
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


// songItemPlay.addEventListener("click",toodo)

        
//         function toodo(){
//             audioElement.pause ? audioElement.play() : audioElement.pause()
//         }


//previous
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;//song ka name likha howa araha he is say
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
