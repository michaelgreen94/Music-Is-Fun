import Song from "../../models/Song.js";

//DO NOT MODIFY
class ItunesService {

  //   getMusicByArtist(artist) {
  //     var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
  //     // @ts-ignore
  //     return $.getJSON(url)
  //       .then(res => res.results.map(s => new Song(s)))
  //       .catch(err => console.log(err))
  //   }

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