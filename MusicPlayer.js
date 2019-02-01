var musicPlayer = document.getElementById('musicPlayer');
var previousSong;
var currentSong;
var songChanged = 0;
var listItems = [];

listItems = document.getElementsByClassName('listItem');

musicPlayer.addEventListener("ended",switchToNextSong);


function switchToNextSong()
{
    for(i=0;i<listItems.length;i++)
    {
        console.log(listItems[i]);
    }
}



playList.addEventListener("click",function(e)
{
    e.preventDefault();
})


for(i=0;i<listItems.length;i++)
 {
        listItems[i].onclick = selectSong;
 }



function selectSong()
{
    if(songChanged>0)
    {
        previousSong = currentSong;
        previousSong.style.color = "black"; //To restore the color to black as the song is unselected.
    }
    currentSong = this;
    currentSong.style.color = "cyan";
    // currentSongSource.setAttribute('src', this.href); another way to change the song.
    musicPlayer.src = this.href; //Shorter Statement.
    musicPlayer.play();
    songChanged++;
    
    console.log(this.innerHTML);
    console.log(a.indexOf(this.innerHTML));
    
}

