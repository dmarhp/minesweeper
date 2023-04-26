import { useEffect, useState } from 'react';
import './Clock.scss';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const hours = time.toLocaleTimeString([], { hour: '2-digit' });
  const minutes = time.toLocaleTimeString([], { minute: '2-digit' });
  return (
    <div className="clock">
      <span>{hours}</span>
      <span className="clock__divider">:</span>
      <span>{minutes}</span>
    </div>

  );
};

export default Clock;
