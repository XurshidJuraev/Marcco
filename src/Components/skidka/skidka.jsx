import React, {useState, useEffect, useRef} from 'react';
import ContentImage from '../../images/content.png'
import HumanPhone from '../../images/138596d7-9b4e-4cfd-b.png'
import './skidka.css'

const Skidka = () => {

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownData = new Date('November 30, 2028 23:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownData - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    });

    return (
        <div className='skidkaBody'>
            <div className='container d-flex justify-content-center' style={{"marginTop": "100px"}}>
            <div className="d-flex">
                <div>
                    <h2 className='text-light skidka_33'>СКИДКА ДО - 33%</h2>
                    <img className='nashi_kontent' style={{"marginLeft": "-20px"}} src={ContentImage} alt="ContentImage" />
                    <img className='content_bigImage' style={{"maxWidth": "617px", "maxHeight": "662px"}} src={HumanPhone} alt="HumanPhone" />
                    <h3 className='text-light mobiileCenter'>Наши контентщики освободились от 2-х <br /> проектов, скидка действует до:</h3>
                    <div className='text-light d-flex div_hours_client mobiileCenter2'>
                        <p> {timerHours} </p>
                         : 
                        <p> {timerMinutes} </p>
                         : 
                        <p> {timerSeconds} </p>
                    </div>
                    <div className="d-flex flex-column mobileInput_btn">
                        <input type="text" className='client_input' placeholder="    ВВЕДИТЕ НОМЕР ТЕЛЕФОНА" />
                        <button className="skidka_btn">ЗАБРАТЬ ПОДАРОК</button>
                    </div>
                </div>
                <div>
                    <img className='content_bigImageNone' style={{"maxWidth": "617px", "maxHeight": "662px"}} src={HumanPhone} alt="HumanPhone" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Skidka;