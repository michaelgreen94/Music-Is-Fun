import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  let template = ''
  for (let i = 0; i < results.length; i++) {
    const song = results[i];
    if (song.preview.includes('video')) {
      continue
    }
    template += `
  <div class="col-sm-6 col-md-4 col-lg-2 mx-2 my-2 card bg-opac">
      <img class="card-img-top" src="${song.albumArt}" />
    <div class="card-img-overlay-bottom d-flex aud-button">
      <audio  src="${song.preview}" controls onplay="app.controllers.itunesCtrl.pauseEm('${song.preview}')">
      </audio>
    </div>
    <div class="card-body pt0 mt-20 ">
      <h6 class="card-title text-truncate">${song.title} $${song.price}</h6>
      <h6 class="card-text text-truncate">By: ${song.artist}</h6>
      <h6 class="card-text text-truncate"><i class="fas fa-compact-disc"></i> ${song.collection}</h6>
    </div>
  </div>`

  }
  document.getElementById('songs').innerHTML = template
}

let currentAudio = ''


//PUBLIC
class ItunesController {

  pauseEm(Url) {
    let songs = document.getElementsByTagName('audio')
    for (let i = 0; i < songs.length; i++) {
      let song = songs[i]
      console.log(song)
      if (song.src != Url) {
        song.pause()
      }
    }
  }

  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      $('#get-music-button').text('GET MUSIC');
    })
  }
}

export default ItunesController