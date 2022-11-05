//Backend is incomplete

// need to learn Js first
console.log("Welcome to Spotify");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('Sia - Unstoppable (Lyrics)(MP3_320K).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Sia", filePath: "songs/Sia - Unstoppable (Lyrics)(MP3_320K).mp3", coverPath: "covers/1.jpg"},
    {songName: "Tum se hi", filePath: "D:/Project_5_Spotify/songs/Tum Hi Aana ((--Marjaavaan--)) Heart Touching Song _ Jubin Nautiyal _ Sidharth Malhotra _ Tara Sutaria(MP3_320K).mp3", coverPath: "covers/1.jpg"},
    {songName: "Oe re piya", filePath: "D:/Project_5_Spotify/songs/O Re Piya _ Full Song _ Aaja Nachle _ Madhuri Dixit _ Rahat Fateh Ali Khan _ Salim-Sulaiman_ Jaideep(MP3_320K).mp3", coverPath: "covers/1.jpg"},
    {songName: "Neffex - Watch Me!", filePath: "D:/Project_5_Spotify/songs/NEFFEX - Watch Me -- [Lyrics](MP3_320K).mp3", coverPath: "covers/1.jpg"},
    {songName: "We Rollin", filePath: "D:/Project_5_Spotify/songs/We Rollin (Official Audio) - Shubh(MP3_320K).mp3", coverPath: "covers/1.jpg"},
    {songName: "Oe re piya", filePath: "D:/Project_5_Spotify/songs/O Re Piya _ Full Song _ Aaja Nachle _ Madhuri Dixit _ Rahat Fateh Ali Khan _ Salim-Sulaiman_ Jaideep(MP3_320K).mp3", coverPath: "covers/1.jpg"}
]

// audioElement.play();

// Hnadle play/pause click
masterPlay.addEventListener('click', ()=>{
    // eventlisterner for playing song on play button but song is not playing because of file path 
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
    }
})
// listen to event
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Upodate seek bar
})