import React, { useEffect, useState, useRef } from 'react';

import './AgeStyle.css';
import Form from "../Form/Form";

const Age = () => {
    const [age, setAge] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [agePerson, setAgePerson] = useState();

    const yearsRef = useRef(false);
    const monthsRef = useRef(false);
    const daysRef = useRef(false);
    const hoursRef = useRef(false);
    const minutesRef = useRef(false);
    const secondsRef = useRef(false);

    useEffect(() => {
        if (agePerson) { // Check if agePerson has a value
            const interval = setInterval(() => {
                let birthday = new Date(agePerson);
                let now = new Date();
                let diff = Math.abs(now.getTime() - birthday.getTime());
    
                const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
                diff -= years * (1000 * 60 * 60 * 24 * 365.25);
    
                const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
                diff -= months * (1000 * 60 * 60 * 24 * 30.44);
    
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                diff -= days * (1000 * 60 * 60 * 24);
    
                const hours = Math.floor(diff / (1000 * 60 * 60));
                diff -= hours * (1000 * 60 * 60);
    
                const minutes = Math.floor(diff / (1000 * 60));
                diff -= minutes * (1000 * 60);
    
                const seconds = Math.floor(diff / 1000);
    
                setAge({ years, months, days, hours, minutes, seconds });
            }, 1000);
    
            return () => clearInterval(interval);
        }
    }, [agePerson]);
    

    useEffect(() => {
        const timerYears = setTimeout(() => {
            yearsRef.current = true;
        }, 1000);
        return () => clearTimeout(timerYears);
    }, []);

    useEffect(() => {
        const timerMonths = setTimeout(() => {
            monthsRef.current = true;
        }, 2000);
        return () => clearTimeout(timerMonths);
    }, []);

    useEffect(() => {
        const timerDay = setTimeout(() => {
            daysRef.current = true;
        }, 3000);
        return () => clearTimeout(timerDay);
    }, []);

    useEffect(() => {
        const timerHours = setTimeout(() => {
            hoursRef.current = true;
        }, 4000);
        return () => clearTimeout(timerHours);
    }, []);

    useEffect(() => {
        const timerMinutes = setTimeout(() => {
            minutesRef.current = true;
        }, 5000);
        return () => clearTimeout(timerMinutes);
    }, []);

    useEffect(() => {
        const timerSeconds = setTimeout(() => {
            secondsRef.current = true;
        }, 6000);
        return () => clearTimeout(timerSeconds);
    }, []);

    return (
        <div className={'age'}>
            <Form setAgePerson={setAgePerson} />

            <div className={'textBlock'}>
                <div className={`textAge ${yearsRef.current ? "showAge" : ""}`}>
                    <p>Years:</p>
                    <p className={'infoAge'}>{agePerson ? age.years : 0}</p>
                </div>

                <div className={`textAge ${monthsRef.current ? "showAge" : ""}`}>
                    <p>Months:</p>
                    <p className={'infoAge'}>{agePerson ? age.months : 0}</p>
                </div>

                <div className={`textAge ${daysRef.current ? "showAge" : ""}`}>
                    <p>Days:</p>
                    <p className={'infoAge'}>{agePerson ? age.days : 0}</p>
                </div>

                <div className={`textAge ${hoursRef.current ? "showAge" : ""}`}>
                    <p>Hours:</p>
                    <p className={'infoAge'}>{agePerson ? age.hours : 0}</p>
                </div>

                <div className={`textAge ${minutesRef.current ? "showAge" : ""}`}>
                    <p>Minutes:</p>
                    <p className={'infoAge'}>{agePerson ? age.minutes : 0}</p>
                </div>

                <div className={`textAge ${secondsRef.current ? "showAge" : ""}`}>
                    <p>Seconds:</p>
                    <p className={'infoAge'}>{agePerson ? age.seconds : 0}</p>
                </div>
            </div>
        </div>
    );
};

export default Age;
