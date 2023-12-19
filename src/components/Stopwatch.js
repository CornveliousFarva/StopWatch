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

    
}