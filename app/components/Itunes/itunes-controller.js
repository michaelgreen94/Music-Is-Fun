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
  <div class="col-sm-3 card bg-secondary mx-1 my-1">
      <img class="card-img" src="${song.albumArt}" />
    <div class="card-img-overlay d-flex justify-content-end">
      <audio controls>
        <source src="${song.preview}">
      </audio>
    </div>
    <div class="card-body">
      <h5 class="card-title">${song.title} $${song.price}</h5>
      <h5 class="card-text">By: ${song.artist}</h5>
      <h5 class="card-text"><i class="fas fa-compact-disc"></i> ${song.collection}</h5>
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