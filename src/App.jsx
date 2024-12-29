import React, { useState } from 'react';
import Scene from './components/scene/Scene';
import Overlay from './components/overlay/Overlay';
import DarkMode from './DarkMode';

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