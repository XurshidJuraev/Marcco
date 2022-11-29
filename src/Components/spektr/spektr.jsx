import React from 'react';
import './spektr.css'
import SpektrLogo from '../../images/cpektr.svg'
import SpektrHuman from '../../images/smm_human.png'

const Spektr = () => {
    return (
        <div className="spektrBody">
            <div className='container'>
            <div className="d-flex justify-content-center mt-5">
                <img width={328} height={62} src={SpektrLogo} alt="SpektrHeading" />
            </div>

            <div className="spektr_flex mt-5">
                <div className='spektr_zIndex3'>
                    <h2 className='spektr_text spektr_smm'>SMM - продвижение <br /> бренда/продукта</h2>
                    <h2 className='spektr_text spektr_smm2'>Продвижение Instagram</h2>
                    <h2 className='spektr_text spektr_smm2'>Продвижение Facebook</h2>
                    <h2 className='spektr_text spektr_smm'>Разработка стратегий <br /> Интернет-маркетинга</h2>
                </div>
                <div className='spektr_zIndex2'>
                    <img className='spektr_zIndex2' src={SpektrHuman} alt="SpektrHuman" />
                </div>
                <div className='spektr_zIndex'>
                    <h2 className='spektr_text spektr_oneB'>Контекстная реклама <br /> Google</h2>
                    <h2 className='spektr_text spektr_twoB'>Таргетированная реклама</h2>
                    <h2 className='spektr_text spektr_twoB'>Набор подписчиков <br /> в инстаграм</h2>
                    <h2 className='spektr_text spektr_threeB'>Увеличение узнаваемости <br /> бренда</h2>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Spektr;