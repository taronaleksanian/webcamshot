import React from 'react';

const Webcam = React.forwardRef(
  (props, ref: React.ForwardedRef<HTMLVideoElement>) => {
    React.useEffect(() => {
      (async () => {
        const stream = await window.navigator.mediaDevices.getUserMedia({
          video: true,
        });
        // @ts-ignore
        if (ref?.current) {
          // @ts-ignore
          ref.current.srcObject = stream;
          // @ts-ignore
          ref.current.play();
        }
      })();
    }, [ref]);

    return <video ref={ref} />;
  },
);

export default Webcam;
