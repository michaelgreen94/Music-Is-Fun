import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ''
  for (let i = 0; i < results.length; i++) {
    const song = results[i];
    template += `
  <div class="col-sm-6 col-md-4 col-lg-2 mx-1 my-1 card bg-opac">
      <img class="card-img" src="${song.albumArt}" />
    <div class="card-img-overlay aud-button">
      <audio controls>
        <source src="${song.preview}">
      </audio>
    </div>
    <div class="card-body">
      <h6 class="card-title text-truncate">${song.title} $${song.price}</h6>
      <h6 class="card-text text-truncate">By: ${song.artist}</h6>
      <h6 class="card-text text-truncate"><i class="fas fa-compact-disc"></i> ${song.collection}</h6>
    </div>
  </div>`

  }

  document.getElementById('songs').innerHTML = template
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController