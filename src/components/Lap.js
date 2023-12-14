import React from "react";

export default function Laps(( laps )) {
    const calculateTimeDifference = (timeString1, timeString2) => { 
        const time1 = new Date(`1970-01-01T${timeString1}Z`); 
        const time2 = new Date(`1970-01-01T${timeString2}Z`); 
        const timeDiff = Math.abs(time2 - time1); 
        const hours = Math.floor(timeDiff / 3600000).toString().padStart(2, '0'); 
        const minutes = Math.floor((timeDiff % 3600000) / 60000).toString().padStart(2, '0'); 
        const seconds = Math.floor((timeDiff % 60000) / 1000).toString().padStart(2, '0'); 
        const milliseconds = ((timeDiff % 1000) / 10).toString().padStart(2, '0'); 
        const resultString = `${hours}:${minutes}:${seconds}.${milliseconds}`; 
        return resultString; 
}