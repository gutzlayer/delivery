import React, {useState} from 'react';
import TrackingForm from './components/TrackingForm'
import TrackingEvents from './components/TrackingEvents'
import Footer from './components/Footer/footer';
import { track } from './helpers/ApiHelper';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Menu from './components/Navbar/index';


function App() {
  const [events, setEvents] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    const formData= new FormData(event.target);
    const data = Object.fromEntries(formData);
    track(data.tracking).then(setEvents).catch(console.error);
  };

    return(
      <React.Fragment>
        <header>
          <Menu />
        </header>
        <div className="main">
          <div className="tAndP">
            <section>
              <TrackingForm className="tracking" submitHandler={submitHandler} />
              <TrackingEvents events={events} />
            </section>
            <aside>
            <Player
              className="player"
              autoplay
              loop
              src="https://assets8.lottiefiles.com/private_files/lf30_j56x43l3.json">
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>   
            </aside>
          </div>
        </div>
          <Footer />
      </React.Fragment>
    )
};

export default App;
