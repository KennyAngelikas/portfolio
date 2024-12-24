import React, {useState} from 'react';
import Scene from './components/scene/scene';
import Overlay from './components/Overlay';
import Header from './components/Header';

function App() {
    const [overlayVisible, setOverlayVisible] = useState(true);
  
    const handleOverlayFinish = () => {
      setOverlayVisible(false); // Hide the overlay when animation completes
    };
  
    return (
      <>
        {/*{overlayVisible && <Overlay onFinish={handleOverlayFinish} />}
        {!overlayVisible && <Header />}
        {!overlayVisible && <Scene />}*/}
        <Scene />
      </>
    );
  }

export default App;