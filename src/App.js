import './App.css';
import axios from  'axios';
import { useState } from 'react'

function App() {

    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    function searchLyrics() {
      if( artist.trim() === "" && song.trim() === "" ){
        alert("Please enter both Artist and Song name");
      }else if(artist.trim() === ""){
        alert("Please enter the Artist Name");
      }else if(song.trim() === ""){
        alert("Please enter the song name");
      }else{
      axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
        console.log(res.data.lyrics);
        setLyrics(res.data.lyrics);
    })
    .catch(error => {
      console.error("Error fetching lyrics:" , error);
      setLyrics("Lyrics not found, please try again!");
    });
  }
}
return (
  <div className='App'>
    <h1> Lyrics Finder</h1>

    <input className='inp' type="text" 
    placeholder='Artist' onChange={ (e) => {setArtist(e.target.value) }}/>

    <input className='inp' type="text" 
    placeholder='song' onChange={ (e) => {setSong(e.target.value) }}/>

    <button className='btn' onClick={ () => searchLyrics() }>Search</button>

    <hr/>
    <pre>{lyrics}</pre>

  </div>
);

}

export default App;
