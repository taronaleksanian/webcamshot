import React from 'react';
import Webcam from './components/Webcam';
import { actionKeys } from './constants';
import { downloadImage } from './utils';
import './styles.css';
import Hint from './components/Hint';
import { EAppStates } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = React.useState(EAppStates.INITIAL);
  const webcamRef = React.useRef<HTMLVideoElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const handleTakePhoto = (e: KeyboardEvent) => {
      switch (e.key) {
        case actionKeys.takePhoto: {
          setAppState(EAppStates.CAPTURED);
          break;
        }
        case actionKeys.retry: {
          setAppState(EAppStates.INITIAL);
          break;
        }
        case actionKeys.download: {
          if (
            webcamRef.current &&
            canvasRef.current &&
            appState === EAppStates.CAPTURED
          ) {
            downloadImage(webcamRef.current, canvasRef.current);
            setAppState(EAppStates.INITIAL);
          }
          break;
        }
      }
    };
    window.addEventListener('keypress', handleTakePhoto);
    appState === EAppStates.INITIAL
      ? webcamRef.current?.play()
      : webcamRef.current?.pause();

    return () => {
      window.removeEventListener('keypress', handleTakePhoto);
    };
  }, [appState]);

  return (
    <div className="container">
      <Hint appState={appState} />
      <Webcam ref={webcamRef} />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default App;
