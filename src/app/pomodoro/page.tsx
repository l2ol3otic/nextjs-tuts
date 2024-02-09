"use client"

import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast'

const TIME_LIMIT = [ 1, 5, 15 ]

function App() {
  const [isActive, setIsActive] = useState(false);
  const [minute, setMinute] = useState(0);
  const [time, setTime] = useState( TIME_LIMIT[0] * 60); // 15 minutes in seconds

  useEffect(() => {
    let interval: any = null;
    if (isActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      toast(`Time Up!`, {
            icon: '🍅',
        });
      setIsActive(false);
      setTime(TIME_LIMIT[minute] * 60); // Reset timer to 15 minutes
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const changeMinute = (tick: number) => {
    let updateMinute = 0
    if(tick == -1){
        if( minute > 0 ){ 
            updateMinute = minute - 1
            setMinute(updateMinute)
            setTime(TIME_LIMIT[updateMinute] * 60)
        }
    }else if(tick == 1){
        if( minute < (TIME_LIMIT.length - 1) ){ 
            updateMinute = minute + 1
            setMinute(updateMinute)
            setTime(TIME_LIMIT[updateMinute] * 60)
        }
    }    
  }

  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen">
      <div><Toaster/></div>
      <header className="text-center">
        {/* tomato design */}
        <div className='relative'>
            <div className='bg-red-600 h-64 w-64 rounded-full flex items-center justify-center'>
                <p className='text-5xl'>
                    {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
                </p>
            </div>
            <span className='absolute z-3 top-0 bg-green-500 -ml-8 rounded-full w-16  h-8'></span>
        </div>
        
        {/* control bar */}
        <div>
            <button onClick={() => changeMinute(-1)} className='bg-white rounded-lg w-10 h-10 mr-3'>➖</button>
            <button className='bg-red-500 p-2 px-4 rounded-lg mt-5' onClick={startTimer} disabled={isActive}>
                Start Pomodoro
            </button>
            <button onClick={() => changeMinute(1)} className='bg-white rounded-lg w-10 h-10 ml-3'>➕</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;
