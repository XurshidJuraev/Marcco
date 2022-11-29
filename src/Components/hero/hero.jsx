import React from 'react';
import './hero.css'
import TridGlass from '../../images/f341a2eb-b0a0-4ede-9.png'

const Hero = () => {
    return (
        <div className="post">
            <div className="container">
            <div className="d-flex margin_top_hero">
                <div className=''>
                    <h4 className='hero_mini_text'>Маркетинговое агенство</h4>
                    <h1 className='hero_big_text'>МЫ ПОМОГАЕМ РАСТИ В <br /> ЦИФРОВОМ МИРЕ</h1>
                    <div className='hero_none'>
                        <img className='triDGlass' src={TridGlass} alt="Glass" />
                    </div>
                    <div className="header_mobileNone">
                        <button  className='hero_btn'>обсудить проект</button>
                    </div>
                    <div className='d-flex text_hero'>
                        <div className='hero_border'></div>
                        <h3 className='hero_border_text'>Вырастим ключевые метрики <b>Вашего бизнеса</b>, используя <br /> современные <b>инструменты интернет-маркетинга</b>: SMM; <br /> контекстная реклама Google; таргетированная реклама; <br /> SEO - оптимизация сайта.</h3>
                    </div>
                    <div className='d-flex text_hero2'>
                        <div className='hero_border2'></div>
                        <div className='hero_number'>5000+</div>
                        <div className='ms-5 mt-3 hero_left'>
                            <h3 className='hero_uspeshnix'>УСПЕШНЫХ</h3>
                            <p className='hero_ads'>РЕКЛАМНЫХ ЗАПУСКОВ</p>
                        </div>
                    </div>
                    <div className="hero_none mobileButton_hero">
                        <button  className='hero_btn'>обсудить проект</button>
                    </div>
                </div>
                <div className='header_mobileNone'>
                    <img className='triDGlass' src={TridGlass} alt="Glass" />
                </div>
            </div>
            
            <div className="hero">

            </div>
        </div>
        </div>
    );
};

export default Hero;