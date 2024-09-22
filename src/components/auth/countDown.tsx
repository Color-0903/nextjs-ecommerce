import React, { useState, useEffect } from 'react';

const OTPResendTimer = ({ initialSeconds = 60, onComplete }: any) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds: any) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      onComplete();
    }
  }, [seconds, onComplete]);

  const renderTime = (time: number) => time > 9 ? time : `0${time}`;

  return (
    <>
      {seconds > 0 ? (
        <>Gửi lại sau ({renderTime(Math.floor(seconds / 60))}:{renderTime(seconds % 60)})</>
      ) : (
        <button onClick={onComplete}>Gửi lại</button>
      )}
    </>
  );
};

export default OTPResendTimer;
