import Song from "../../models/Song.js";

class ItunesService {

  getMusicByArtist(artist) {

    var url1 = '//bcw-getter.herokuapp.com/?url=';
    var url2 = 'https://itunes.apple.com/search?term=' + artist
    var apiUrl = url1 + encodeURIComponent(url2);
    //Casts each object to 
    return $.getJSON(apiUrl).then(function (response) {
      var songList = response.results.map(s => {
        return new Song(s)
      })
      return songList;
    })
  }
}


export default ItunesService