
import GGposter from './gadhalakondaganesh/images.jpeg';
import GGtrailer from './gadhalakondaganesh/Valmiki Teaser _ Varun Tej _ Harish Shankar _ Mickey J Meyer _ 14 Reels Plus.mp4';
import GGsong from './gadhalakondaganesh/[iSongs.info] 03 - Waka Waka (Telugu).mp3';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='saaho'>
      <h1 className='heading'>SAAHO</h1>
      <img className='Poster' src='https://services.brninfotech.com/tws/media2/posters/saahoPoster.jpg'></img>


    <video  className='trailer' src='https://services.brninfotech.com/tws/media2/trailers/saaho.mp4' controls></video>

    <audio className='audio' src='https://services.brninfotech.com/tws/media2/songs/Saaho/05 - Saaho Bang.mp3' controls></audio>
    </div>
    <hr></hr>

    <div className='devara'>
    <h1 className='heading'>DEVARA PART 1</h1>

    <img className='poster' src='./devara/devaraPoster.avif'></img>

    <video className='trailer' src='./devara/Devara - Jr. NTR Official Trailer_HD-(Hd9video).mp4' controls></video>

    <audio src='./devara/[iSongs.info] 05 - Red Sea.mp3' controls></audio>
    </div>
    <hr></hr>

    <div className='gandhalakondaGanesh'> 

      <h1 className='heading'>GADHALAKONDA GANESH</h1>
      <img className='poster' src={GGposter}></img>

      <video className='trailer' src={GGtrailer} controls></video>

      <audio src={GGsong} controls></audio>
    </div>

    </div>

    
  );
}

export default App;
