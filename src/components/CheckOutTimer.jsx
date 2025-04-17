import React, { useEffect, useState } from 'react'

export default function CheckOutTimer() {
   const [seconds, setSeconds] = useState(60);
   const [finished, setFinished] = useState(false);

   useEffect(() => {
      if (seconds <= 0) {
         setFinished(true);
         return;
      }

      const timer = setInterval(() => {
         setSeconds((prev) => {
            if (prev <= 1) {
               clearInterval(timer);
               setFinished(true);
               return 0;
            }
            return prev - 1;
         });
      }, 1000);

      return () => clearInterval(timer);
   }, [seconds]);

   const formatTime = (secs) => {
      const min = String(Math.floor(secs / 60)).padStart(2, '0');
      const sec = String(secs % 60).padStart(2, '0');
      return `${min}:${sec}`;
   };
   return (
      <section className="my-2">
         <div className="alert alert-warning fs-7 fw-500 text-center p-2" role="alert">
            {!finished ? (
               <span className="text-capitalize">
                  <i className="fa-solid fa-fire text-danger" /> Hurry up, these products are limited, checkout within
                  <span className="fs-15 fw-600 text-primary">{formatTime(seconds)}</span> minutes.
               </span>
            ) : (
               <span className="text-danger blink_me fw-bold text-capitalize">
                  You are out of time! Checkout now to avoid losing your order!
               </span>
            )}
         </div>
      </section>
   )
}
