import React, { useState, useEffect } from 'react';

function CountdownTimer({ hours, minutes, seconds }) {
  const [timeLeft, setTimeLeft] = useState({ hours, minutes, seconds });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex flex-row '>
      <h2 className="md:text-xl text-sm md:font-bold text-red-500">Offer Ends In:</h2>
      <div className='mx-3'>
        <span className="md:text-xl text-sm md:font-bold text-red-500">{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}</span>:
        <span className="md:text-xl text-sm md:font-bold text-red-500">{timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes}</span>:
        <span className="md:text-xl text-sm md:font-bold text-red-500">{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
