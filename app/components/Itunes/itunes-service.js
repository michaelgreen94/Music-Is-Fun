import Song from "../../models/Song.js";


class ItunesService {

  //DO NOT MODIFY
  getMusicByArtist(artist) {
    var url = 'https://itunes.apple.com/search?term=' + artist;
    //Casts each object to 
    return $.getJSON(url).then(function (response) {
      var songList = response.results.map(s => { return new Song(s) })
      return songList;
    })
  }


}



export default ItunesService