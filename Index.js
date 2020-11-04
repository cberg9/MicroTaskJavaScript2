
let artistArray = []



function firstPage(){
   
    
    const Artist1 = new Artist("Eminem","USA", "HipHop", "Lose Yourself...");
    const Artist2 = new Artist("50 cent", "USA", "HipHop","It's your birthday...");
    const Artist3 = new Artist("Danny", "Sweden", "RnB","Det brinner i bröstet...");
    const Artist4 = new Artist("Usher", "USA", "RnB","You are the one...");
    const Artist5 = new Artist("Tom Jones", "USA", "Pop","Sex bomb...");
    
    artistArray.push(Artist1)
    artistArray.push(Artist2)
    artistArray.push(Artist3)
    artistArray.push(Artist4)
    artistArray.push(Artist5)
     console.log("first page finished");
     showArtist()
     randomPicture()
    }
    
function showArtist(){
  
    let name = artistArray[0].aName + ", "+ artistArray[0].country + ", "+ artistArray[0].genre+", "+"Lyrics: " + artistArray[0].getPerform();
    let name2 = artistArray[1].aName+ ", "+ artistArray[1].country + ", "+ artistArray[1].genre+", " +"Lyrics: " + artistArray[1].getPerform();
    let name3 = artistArray[2].aName+ ", "+ artistArray[2].country + ", "+ artistArray[2].genre+", " + "Lyrics: "+artistArray[2].getPerform();
    let name4 = artistArray[3].aName+ ", "+ artistArray[3].country + ", "+ artistArray[3].genre+", " + "Lyrics: "+artistArray[3].getPerform();
    let name5 = artistArray[4].aName+ ", "+ artistArray[4].country + ", "+ artistArray[4].genre+", " + "Lyrics: "+artistArray[4].getPerform();

    
    document.getElementById("artist1").innerHTML = name;
    document.getElementById("artist2").innerHTML = name2;
    document.getElementById("artist3").innerHTML = name3;
    document.getElementById("artist4").innerHTML = name4;
    document.getElementById("artist5").innerHTML = name5;
  
}
function randomPicture(){
    let myPics = new Array("Images/Eminem.png","Images/50-cent.png","Images/Danny.jpg","Images/Usher.jpg","Images/tomjones.png");
    let randomNum=Math.floor(Math.random()*myPics.length);
    let randomArtist = artistArray[randomNum].aName+ ", "+ artistArray[randomNum].country + ", "+ artistArray[randomNum].genre+", " + "Lyrics: "+artistArray[randomNum].getPerform();
    document. getElementById("myPicture").src = myPics[randomNum];
    document.getElementById("spotlightartist").innerHTML=randomArtist;
}




