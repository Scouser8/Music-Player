var musicPlayer = document.getElementById('musicPlayer');
var previousSong;
var currentSong;
var songChanged = 0;
var listItems = [];
var fileChooser = document.getElementById('fileInput');
var songIndex = 0;
var songID;

document.getElementById('song0').style.color = "cyan";

listItems = document.getElementsByClassName('listItem');

musicPlayer.onended= switchToNextSong;

fileChooser.onclick = addSong;

function addSong()
{
    console.log(fileChooser.value); //Couldn't find a way to get the exact path.
}


function switchToNextSong()
{
    songID='song'+songIndex;
    document.getElementById(songID).style.color= "black";
    if(songIndex<listItems.length-1)
        songIndex++;
    else songIndex =0;
    musicPlayer.src = listItems[songIndex];
    songID='song'+songIndex;
    document.getElementById(songID).style.color = "cyan";
    console.log('song'+songIndex);
    currentSong.style.color = "black";
    musicPlayer.play();
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
    listItems[songID].style.color = "black";
    for(i=0;i<listItems.length;i++)
    {
        if(musicPlayer.src == listItems[i])
            songIndex=i;  
    }
    //console.log(this.innerHTML);
    
}

