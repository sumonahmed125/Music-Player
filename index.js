const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const name = document.getElementById('name');

const songs = [
    { title: "Song 1", src: "song1.mp3", name:"oracion" },
    { title: "Song 2", src: "song2.mp3", name:"Estrella"  },
    { title: "Song 3", src: "song3.mp3", name:"Samba Gitana"  }
];

let songIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.textContent = "⏸️";
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = "▶️";
}

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

nextBtn.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

prevBtn.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

loadSong(songs[songIndex]);