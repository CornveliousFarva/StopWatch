import React, { useState, useEffect } from "react";
import "./Stopwatch.css";
import Lap from './Lap';

export default function Stopwatch(){
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [miliseconds, setMiliseconds] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isRunning, setIsRunning] = useState(false);

    const formatWithLeadingZero = (number) => {
        is (number < 10) return "0" + number;
        else return number.toString();
    }

    useEffect(() => {
        interval = setInterval(() => { 
            setMiliSeconds((miliSeconds) => { 
                if (miliSeconds >= 99) { 
                    setSeconds((seconds) => { 
                        if (seconds >= 59) { 
                            setMinutes((minutes) => { 
                                if (minutes >= 59) { 
                                    setHours((prevHours) => prevHours + 1); 
                                    return 0; 
                                } else { 
                                    return minutes + 1; 
                                } 
                            }); 
                            return 0; 
                        } else { 
                            return seconds + 1; 
                        } 
                    }); 
                    return 0; 
                } else { 
                    return miliSeconds + 1; 
                } 
            }); 
        }, 10); 
    } 
    return () => clearInterval(interval); 
}, [isRunning]); 

const handleStart = () => {
    setIsRunning(true)
};

const handlePause = () => {
    setIsRunning(false)
};

const handleLap = () => { 
    const lapTime = 
        formatWithLeadingZero(hours) + 
        ":" + 
        formatWithLeadingZero(minutes) + 
        ":" + 
        formatWithLeadingZero(seconds) + 
        "." + 
        formatWithLeadingZero(miliSeconds); 
    setLaps((prevLaps) => [...prevLaps, lapTime]); 
}; 

const handleReset = () => { 
    setIsRunning(false); 
    setMiliSeconds(0); 
    setSeconds(0); 
    setMinutes(0); 
    setHours(0); 
    setLaps([]); 
};


 }
    
}