import React, {useEffect} from 'react';
import './quiz.css';
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";

const Quiz = () => {

    useEffect(() => {

        $('.father_quiz .quiz_block#first_quiz input').on('click',function(e){
            $(this).attr('data-attr','checked');
            $('.father_quiz .quiz_block#first_quiz .quiz_next').removeAttr('disabled');
        })

        $('.father_quiz .quiz_block#second_quiz input').on('click',function(e){
            $(this).attr('data-attr','checked');
            $('.father_quiz .quiz_block#second_quiz .quiz_next').removeAttr('disabled');
        })

        $('.father_quiz .quiz_block#fifth_quiz input').on('click',function(e){
            $(this).attr('data-attr','checked');
        })

        $('.father_quiz .quiz_block#first_quiz .quiz_next').on('click',function(e){
            let inputAttr = $('.father_quiz .quiz_block#first_quiz input').data('attr');
            if(inputAttr !== 'checked'){
                $('.father_quiz .quiz_block#first_quiz .quiz_next').attr('disabled');
            }else{
                $('.father_quiz .quiz_block#first_quiz').removeClass('active_quiz');
                $('.father_quiz .quiz_block#second_quiz').addClass('active_quiz');
            }   
        })

        $('.father_quiz .quiz_block#second_quiz .quiz_next').on('click',function(e){
            let inputAttr = $('.father_quiz .quiz_block#second_quiz input').data('attr');
            if(inputAttr !== 'checked'){
                $('.father_quiz .quiz_block#second_quiz .quiz_next').attr('disabled');
            }else{
                $('.father_quiz .quiz_block#second_quiz').removeClass('active_quiz');
                $('.father_quiz .quiz_block#third_quiz').addClass('active_quiz');
            }   
        })

        $('.father_quiz .quiz_block#third_quiz .quiz_next').on('click',function(e){
            let inputAttr = $('.father_quiz .quiz_block#third_quiz input').data('attr');
            if(inputAttr !== 'checked'){
                $('.father_quiz .quiz_block#third_quiz .quiz_next').attr('disabled');
            }else{
                $('.father_quiz .quiz_block#third_quiz').removeClass('active_quiz');
                $('.father_quiz .quiz_block#fourth_quiz').addClass('active_quiz');
            }   
        })
        
        $('.father_quiz .quiz_block#fourth_quiz .quiz_next').on('click',function(e){
            let inputAttr = $('.father_quiz .quiz_block#fourth_quiz input').data('attr');
            if(inputAttr !== 'checked'){
                $('.father_quiz .quiz_block#fourth_quiz .quiz_next').attr('disabled');
            }else{
                $('.father_quiz .quiz_block#fourth_quiz').removeClass('active_quiz');
                $('.father_quiz .quiz_block#fifth_quiz').addClass('active_quiz');
            }   
        })

        $('.father_quiz .quiz_block#fifth_quiz .quiz_next').on('click',function(e){
            let inputAttr = $('.father_quiz .quiz_block#fifth_quiz input').data('attr');
            if(inputAttr !== 'checked'){
                $('.father_quiz .quiz_block#fifth_quiz .quiz_next').attr('disabled');
            }else{
                $('.father_quiz .quiz_block#fifth_quiz').removeClass('active_quiz');
                $('.father_quiz .quiz_block#sixth_quiz').addClass('active_quiz');
            }   
        })

        $('.father_quiz .quiz_block#sixth_quiz .quiz_next').on('click',function(e){
            let inputAttr = $('.father_quiz .quiz_block#sixth_quiz input').data('attr');
            if(inputAttr !== 'checked'){
                $('.father_quiz .quiz_block#sixth_quiz .quiz_next').attr('disabled');
            }else{
                $('.father_quiz .quiz_block#sixth_quiz').removeClass('active_quiz');
                $('.father_quiz .quiz_block#sixth_quiz').addClass('active_quiz');
            }   
        })

        // $('.father_quiz .quiz_block#second_quiz .quiz_next').on('click',function(e){
        //     e.preventDefault();
        //     $('.father_quiz .quiz_block#second_quiz').removeClass('active_quiz');
        //     $('.father_quiz .quiz_block#third_quiz').addClass('active_quiz');  
        // })

        // $('.father_quiz .quiz_block#third_quiz .quiz_next').on('click',function(e){
        //     e.preventDefault();
        //     $('.father_quiz .quiz_block#third_quiz').removeClass('active_quiz');
        //     $('.father_quiz .quiz_block#fourth_quiz').addClass('active_quiz');  
        // })

        // $('.father_quiz .quiz_block#fourth_quiz .quiz_next').on('click',function(e){
        //     e.preventDefault();
        //     $('.father_quiz .quiz_block#fourth_quiz').removeClass('active_quiz');
        //     $('.father_quiz .quiz_block#fifth_quiz').addClass('active_quiz');  
        // })

        // $('.father_quiz .quiz_block#fifth_quiz .quiz_next').on('click',function(e){
        //     e.preventDefault();
        //     $('.father_quiz .quiz_block#fifth_quiz').removeClass('active_quiz');
        //     $('.father_quiz .quiz_block#sixth_quiz').addClass('active_quiz');  
        // })

        // $('.father_quiz .quiz_block#second_quiz .quiz_nazad').on('click',function(e){
        //     e.preventDefault();
        //     $('.father_quiz .quiz_block#second_quiz').removeClass('active_quiz');
        //     $('.father_quiz .quiz_block#first_quiz').addClass('active_quiz');  
        // })

        // $('.father_quiz .quiz_block#third_quiz .quiz_nazad').on('click',function(e){
        //     e.preventDefault();
        //     $('.father_quiz .quiz_block#third_quiz').removeClass('active_quiz');
        //     $('.father_quiz .quiz_block#second_quiz').addClass('active_quiz');  
        // })

        // $('.father_quiz .quiz_block#first_quiz .quiz_next').on('click',function(e){
        //     e.preventDefault();
        //     $('.father_quiz .quiz_block#second_quiz').removeClass('active_quiz');
        //     $('.father_quiz .quiz_block#first_quiz').addClass('active_quiz');  
        // })



    },[]);

    return (

        <>

            <div className="d-flex justify-content-center mb-5">
                <svg className='podxodLogo' xmlns="http://www.w3.org/2000/svg" width="761" height="78" viewBox="0 0 3197 328" fill="none"> <g filter="url(#filter0_d_71_1312)"> <path d="M209.82 199.737V247.431H180.852V224.864H109.151V247.431H80.0228V199.737H84.024C90.6392 199.63 95.2805 195.096 97.9479 186.133C100.722 177.17 102.429 164.26 103.069 147.402L104.35 112.832H194.616V199.737H209.82ZM130.757 150.123C130.331 162.073 129.37 172.209 127.876 180.531C126.383 188.854 124.089 195.256 120.995 199.737H163.407V137.959H131.237L130.757 150.123ZM303.525 203.098H256.152L247.349 224.864H215.02L264.474 112.832H295.683L345.297 224.864H312.328L303.525 203.098ZM294.243 179.731L279.839 143.881L265.435 179.731H294.243ZM439.759 166.287C446.375 168.421 451.389 171.729 454.804 176.21C458.325 180.691 460.085 186.24 460.085 192.855C460.085 202.778 456.191 210.62 448.402 216.382C440.72 222.037 429.783 224.864 415.592 224.864H358.136V112.832H412.552C425.995 112.832 436.398 115.393 443.761 120.514C451.229 125.529 454.964 132.678 454.964 141.96C454.964 147.402 453.63 152.203 450.963 156.364C448.402 160.526 444.667 163.833 439.759 166.287ZM389.345 157.645H409.511C418.473 157.645 422.955 153.964 422.955 146.602C422.955 139.24 418.473 135.559 409.511 135.559H389.345V157.645ZM414.312 202.138C423.488 202.138 428.076 198.243 428.076 190.454C428.076 182.879 423.488 179.091 414.312 179.091H389.345V202.138H414.312ZM554.535 203.098H507.161L498.359 224.864H466.029L515.484 112.832H546.692L596.307 224.864H563.337L554.535 203.098ZM545.252 179.731L530.848 143.881L516.444 179.731H545.252ZM609.145 112.832H640.354V178.611L686.607 112.832H716.376V224.864H685.167V159.245L639.074 224.864H609.145V112.832ZM662.601 106.11C651.291 106.11 642.968 103.923 637.633 99.5483C632.405 95.1737 629.791 88.6651 629.791 80.0227H651.077C651.184 83.7571 652.144 86.5312 653.958 88.345C655.772 90.1589 658.653 91.0658 662.601 91.0658C666.548 91.0658 669.483 90.1589 671.403 88.345C673.324 86.5312 674.337 83.7571 674.444 80.0227H695.73C695.73 88.6651 693.063 95.1737 687.728 99.5483C682.393 103.923 674.017 106.11 662.601 106.11ZM830.699 137.959H796.449V224.864H765.24V137.959H730.83V112.832H830.699V137.959ZM935.252 200.377V224.864H845.307V112.832H933.172V137.319H876.676V156.204H926.45V179.891H876.676V200.377H935.252ZM1054.94 227.105C1043.09 227.105 1032.42 224.597 1022.93 219.583C1013.54 214.568 1006.12 207.632 1000.68 198.777C995.347 189.921 992.68 179.945 992.68 168.848C992.68 157.752 995.347 147.775 1000.68 138.92C1006.12 130.064 1013.54 123.128 1022.93 118.114C1032.42 113.099 1043.09 110.591 1054.94 110.591C1066.78 110.591 1077.4 113.099 1086.79 118.114C1096.28 123.128 1103.7 130.064 1109.03 138.92C1114.47 147.775 1117.2 157.752 1117.2 168.848C1117.2 179.945 1114.47 189.921 1109.03 198.777C1103.7 207.632 1096.28 214.568 1086.79 219.583C1077.4 224.597 1066.78 227.105 1054.94 227.105ZM1054.94 200.857C1060.59 200.857 1065.71 199.524 1070.3 196.856C1074.89 194.189 1078.52 190.454 1081.19 185.653C1083.85 180.745 1085.19 175.143 1085.19 168.848C1085.19 162.553 1083.85 157.005 1081.19 152.203C1078.52 147.295 1074.89 143.507 1070.3 140.84C1065.71 138.173 1060.59 136.839 1054.94 136.839C1049.28 136.839 1044.16 138.173 1039.57 140.84C1034.99 143.507 1031.36 147.295 1028.69 152.203C1026.02 157.005 1024.69 162.553 1024.69 168.848C1024.69 175.143 1026.02 180.745 1028.69 185.653C1031.36 190.454 1034.99 194.189 1039.57 196.856C1044.16 199.524 1049.28 200.857 1054.94 200.857ZM1134.14 112.832H1227.77V137.319H1165.35V155.404H1194.32C1207.87 155.404 1218.27 158.285 1225.53 164.047C1232.78 169.808 1236.41 178.077 1236.41 188.854C1236.41 200.164 1232.35 209.02 1224.24 215.421C1216.14 221.717 1204.77 224.864 1190.16 224.864H1134.14V112.832ZM1188.07 202.138C1193.41 202.138 1197.46 201.071 1200.24 198.937C1203.01 196.803 1204.4 193.762 1204.4 189.814C1204.4 181.918 1198.96 177.971 1188.07 177.971H1165.35V202.138H1188.07ZM1307.34 227.105C1295.61 227.105 1285.04 224.651 1275.65 219.743C1266.37 214.728 1259.06 207.793 1253.73 198.937C1248.39 190.081 1245.72 180.051 1245.72 168.848C1245.72 157.645 1248.39 147.615 1253.73 138.759C1259.06 129.904 1266.37 123.022 1275.65 118.114C1285.04 113.099 1295.61 110.591 1307.34 110.591C1317.59 110.591 1326.81 112.405 1335.03 116.033C1343.25 119.661 1350.07 124.889 1355.52 131.717L1335.35 149.963C1328.09 141.213 1319.29 136.839 1308.94 136.839C1302.86 136.839 1297.42 138.173 1292.62 140.84C1287.92 143.507 1284.24 147.295 1281.58 152.203C1279.01 157.005 1277.73 162.553 1277.73 168.848C1277.73 175.143 1279.01 180.745 1281.58 185.653C1284.24 190.454 1287.92 194.189 1292.62 196.856C1297.42 199.524 1302.86 200.857 1308.94 200.857C1319.29 200.857 1328.09 196.483 1335.35 187.733L1355.52 205.979C1350.07 212.807 1343.25 218.035 1335.03 221.663C1326.81 225.291 1317.59 227.105 1307.34 227.105ZM1474.39 112.832L1427.97 199.417C1423.07 208.699 1417.04 215.741 1409.89 220.543C1402.85 225.344 1395.11 227.745 1386.68 227.745C1380.49 227.745 1373.88 226.358 1366.84 223.584L1374.36 200.217C1378.73 201.497 1382.47 202.138 1385.56 202.138C1388.66 202.138 1391.38 201.444 1393.72 200.057C1396.18 198.67 1398.42 196.483 1400.45 193.495L1356.91 112.832H1390.36L1416.45 166.928L1443.5 112.832H1474.39ZM1602.72 199.737V247.431H1573.75V224.864H1502.05V247.431H1472.92V199.737H1476.92C1483.54 199.63 1488.18 195.096 1490.85 186.133C1493.62 177.17 1495.33 164.26 1495.97 147.402L1497.25 112.832H1587.51V199.737H1602.72ZM1523.66 150.123C1523.23 162.073 1522.27 172.209 1520.77 180.531C1519.28 188.854 1516.99 195.256 1513.89 199.737H1556.3V137.959H1524.14L1523.66 150.123ZM1617.87 112.832H1649.08V178.611L1695.33 112.832H1725.1V224.864H1693.89V159.245L1647.8 224.864H1617.87V112.832ZM1850.15 224.864L1849.99 165.487L1821.18 213.821H1807.1L1778.29 166.767V224.864H1749.16V112.832H1775.25L1814.62 177.491L1853.03 112.832H1879.12L1879.44 224.864H1850.15ZM2031.46 166.287C2038.08 168.421 2043.09 171.729 2046.51 176.21C2050.03 180.691 2051.79 186.24 2051.79 192.855C2051.79 202.778 2047.9 210.62 2040.11 216.382C2032.42 222.037 2021.49 224.864 2007.3 224.864H1949.84V112.832H2004.26C2017.7 112.832 2028.1 115.393 2035.47 120.514C2042.93 125.529 2046.67 132.678 2046.67 141.96C2046.67 147.402 2045.33 152.203 2042.67 156.364C2040.11 160.526 2036.37 163.833 2031.46 166.287ZM1981.05 157.645H2001.22C2010.18 157.645 2014.66 153.964 2014.66 146.602C2014.66 139.24 2010.18 135.559 2001.22 135.559H1981.05V157.645ZM2006.02 202.138C2015.19 202.138 2019.78 198.243 2019.78 190.454C2019.78 182.879 2015.19 179.091 2006.02 179.091H1981.05V202.138H2006.02ZM2146.24 203.098H2098.87L2090.06 224.864H2057.73L2107.19 112.832H2138.4L2188.01 224.864H2155.04L2146.24 203.098ZM2136.96 179.731L2122.55 143.881L2108.15 179.731H2136.96ZM2352.73 112.832V224.864H2200.85V112.832H2232.06V199.737H2261.35V112.832H2292.56V199.737H2321.52V112.832H2352.73ZM2528.41 112.832V224.864H2497.04V137.959H2454.47V224.864H2423.26V112.832H2528.41ZM2603.57 112.832C2613.71 112.832 2622.51 114.539 2629.98 117.954C2637.45 121.261 2643.21 126.063 2647.26 132.358C2651.32 138.546 2653.35 145.855 2653.35 154.284C2653.35 162.713 2651.32 170.022 2647.26 176.21C2643.21 182.399 2637.45 187.2 2629.98 190.614C2622.51 193.922 2613.71 195.576 2603.57 195.576H2584.05V224.864H2552.36V112.832H2603.57ZM2601.65 170.609C2608.16 170.609 2613.07 169.222 2616.38 166.447C2619.68 163.567 2621.34 159.512 2621.34 154.284C2621.34 149.056 2619.68 145.001 2616.38 142.12C2613.07 139.24 2608.16 137.799 2601.65 137.799H2584.05V170.609H2601.65ZM2724.32 227.105C2712.48 227.105 2701.81 224.597 2692.31 219.583C2682.92 214.568 2675.51 207.632 2670.07 198.777C2664.73 189.921 2662.06 179.945 2662.06 168.848C2662.06 157.752 2664.73 147.775 2670.07 138.92C2675.51 130.064 2682.92 123.128 2692.31 118.114C2701.81 113.099 2712.48 110.591 2724.32 110.591C2736.16 110.591 2746.78 113.099 2756.17 118.114C2765.67 123.128 2773.08 130.064 2778.42 138.92C2783.86 147.775 2786.58 157.752 2786.58 168.848C2786.58 179.945 2783.86 189.921 2778.42 198.777C2773.08 207.632 2765.67 214.568 2756.17 219.583C2746.78 224.597 2736.16 227.105 2724.32 227.105ZM2724.32 200.857C2729.98 200.857 2735.1 199.524 2739.69 196.856C2744.27 194.189 2747.9 190.454 2750.57 185.653C2753.24 180.745 2754.57 175.143 2754.57 168.848C2754.57 162.553 2753.24 157.005 2750.57 152.203C2747.9 147.295 2744.27 143.507 2739.69 140.84C2735.1 138.173 2729.98 136.839 2724.32 136.839C2718.67 136.839 2713.54 138.173 2708.96 140.84C2704.37 143.507 2700.74 147.295 2698.07 152.203C2695.41 157.005 2694.07 162.553 2694.07 168.848C2694.07 175.143 2695.41 180.745 2698.07 185.653C2700.74 190.454 2704.37 194.189 2708.96 196.856C2713.54 199.524 2718.67 200.857 2724.32 200.857ZM2893.47 200.377V224.864H2803.52V112.832H2891.39V137.319H2834.89V156.204H2884.67V179.891H2834.89V200.377H2893.47ZM2956.82 181.972H2942.41V224.864H2910.88V112.832H2942.41V156.364H2957.62L2984.34 112.832H3017.63L2982.58 166.928L3017.95 224.864H2982.26L2956.82 181.972ZM3116.98 137.959H3082.73V224.864H3051.52V137.959H3017.11V112.832H3116.98V137.959Z" fill="white"/> </g> <defs> <filter id="filter0_d_71_1312" x="0" y="0" width="3197" height="327.453" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="10"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_71_1312"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_71_1312" result="shape"/> </filter> </defs> </svg>
            </div>

            <div className='father_quiz'>
                <div className='container quiz_block active_quiz' id='first_quiz'>
                <div className='d-flex flex-column justify-content-start align-items-center'>
                    <div className='number_quiz'>
                        <p className='quiz_number'>1/5</p>
                    </div>
                    <div className="white_quiz">
                        <div className="container">
                            <h2 className='quiz_text'>Ваша должность?</h2>
                        </div>
                        <div className="container ms-5 d-flex flex-column">
                            <label className="input_contanier">
                                <p className='quiz_input_text'>Собственник бизнеса / Генеральный директор</p>
                                <input name='value' value="Собственник бизнеса / Генеральный директор" type="radio"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="input_contanier">
                                <p className='quiz_input_text'>Руководитель отдела (продаж, маркетинга и т.д.)</p>
                                <input name='value' value="Руководитель отдела (продаж, маркетинга и т.д.)" type="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="input_contanier">
                                <p className='quiz_input_text'>Индивидуальный предприниматель</p>
                                <input name='value' value="Индивидуальный предприниматель" type="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="input_contanier">
                                <p className='quiz_input_text'>Топ-менеджер работающий по найму</p>
                                <input name='value' value="Топ-менеджер работающий по найму" type="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="input_contanier">
                                <p className='quiz_input_text'>Развиваю личный бренд</p>
                                <input name='value' value="Развиваю личный бренд" type="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="input_contanier">
                                <p className='quiz_input_text'>Другое...</p>
                                <input name='value' value="Другое..." type="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='contanier nazad_div'>
                            <button className='quiz_nazad' disabled>
                                <div className='quiz_cencel'>
                                    →
                                </div>
                                <div className="quiz_cencel_text">
                                    Назад
                                </div>
                            </button>
                            <button className='quiz_next'>
                                Дальше →
                            </button>
                        </div>
                    </div>
                </div>
                </div>

                <div className='container quiz_block' id='second_quiz'>
                    <div className='d-flex flex-column justify-content-start align-items-center'>
                        <div className='number_quiz'>
                            <p className='quiz_number'>2/5</p>
                        </div>
                        <div className="white_quiz2">
                            <div className="container">
                                <h2 className='quiz_text'>Какие услуги Вас интересуют?</h2>
                            </div>
                            <div className="container ms-5 d-flex flex-column">
                                <label className="input_contanier">
                                    <p className='quiz_input_text'>Ведение аккаунтов в соц. сетях</p>
                                    <input name='value' value="Ведение аккаунтов в соц. сетях" type="radio" defaultChecked={true}/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="input_contanier">
                                    <p className='quiz_input_text'>Таргетированная реклама</p>
                                    <input name='value' value="Таргетированная реклама" type="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="input_contanier">
                                    <p className='quiz_input_text'>Аналитика аккаунтов или рекламы</p>
                                    <input name='value' value="Аналитика аккаунтов или рекламы" type="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="input_contanier">
                                    <p className='quiz_input_text'>Полный комплекс интернет-маркетинга</p>
                                    <input name='value' value="Полный комплекс интернет-маркетинга" type="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="input_contanier">
                                    <p className='quiz_input_text'>Все перечисленные услуги и, возможно, больше</p>
                                    <input name='value' value="Все перечисленные услуги и, возможно, больше" type="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className='contanier nazad_div'>
                                <button className='quiz_nazad'>
                                    <div className='quiz_cencel'>
                                        →
                                    </div>
                                    <div className="quiz_cencel_text">
                                        Назад
                                    </div>
                                </button>
                                <button className='quiz_next'>
                                    Дальше →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container quiz_block' id='third_quiz'>
                    <div className='d-flex flex-column justify-content-start align-items-center'>
                        <div className='number_quiz'>
                            <p className='quiz_number'>3/5</p>
                        </div>
                        <div className="white_quiz3">
                            <div className="container">
                                <h2 className='quiz_text'>Расскажите о себе</h2>
                            </div>
                            <div className="container ms-5 d-flex flex-column">
                                <input placeholder='Опишите в двух словах о компании' type="text" className='input_text_ras' />
                            </div>
                            <div className='contanier nazad_div'>
                                <button className='quiz_nazad'>
                                    <div className='quiz_cencel'>
                                        →
                                    </div>
                                    <div className="quiz_cencel_text">
                                        Назад
                                    </div>
                                </button>
                                <button className='quiz_next'>
                                    Дальше →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container quiz_block' id='fourth_quiz'>
                    <div className='d-flex flex-column justify-content-start align-items-center'>
                        <div className='number_quiz'>
                            <p className='quiz_number'>4/5</p>
                        </div>
                        <div className="white_quiz4">
                            <div className="container">
                                <h2 className='quiz_text'>Расскажите о себе</h2>
                                <p className='quiz_ssilka'>Ссылка на сайт или instagram компании</p>
                            </div>
                            <div className="container ms-5 d-flex flex-column">
                                <input type="text" className='input_text_ras' />
                            </div>
                            <div className='contanier nazad_div'>
                                <button className='quiz_nazad'>
                                    <div className='quiz_cencel'>
                                        →
                                    </div>
                                    <div className="quiz_cencel_text">
                                        Назад
                                    </div>
                                </button>
                                <button className='quiz_next'>
                                    Дальше →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container quiz_block' id='fifth_quiz'>
                <div className='d-flex flex-column justify-content-start align-items-center'>
                    <div className='number_quiz'>
                        <p className='quiz_number'>5/5</p>
                    </div>
                    <div className="white_quiz">
                        <div className="container">
                            <h2 className='quiz_text'>Общий бюджет на продвижение:</h2>
                        </div>
                        <div className="container ms-5 d-flex flex-column">
                            <label className="input_contanier">
                                <p className='quiz_input_text'>До 250 тыс. тенге</p>
                                <input name='value' value="До 250 тыс. тенге" type="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="input_contanier">
                                <p className='quiz_input_text'>От 250 до 400 тыс. тенге</p>
                                <input name='value' value="От 250 до 400 тыс. тенге" type="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="input_contanier">
                                <p className='quiz_input_text'>От 400 до 600 тыс. тенге</p>
                                <input name='value' value="От 400 до 600 тыс. тенге" type="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="input_contanier">
                                <p className='quiz_input_text'>От 600 до 800 тыс. тенге</p>
                                <input name='value' value="От 600 до 800 тыс. тенге" type="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="input_contanier">
                                <p className='quiz_input_text'>Свыше 900 тыс. тенге</p>
                                <input name='value' value="Свыше 900 тыс. тенге" type="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="input_contanier">
                                <p className='quiz_input_text'>Не готов ответить</p>
                                <input name='value' value="Не готов ответить" type="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='contanier nazad_div'>
                            <button className='quiz_nazad'>
                                <div className='quiz_cencel'>
                                    →
                                </div>
                                <div className="quiz_cencel_text">
                                    Назад
                                </div>
                            </button>
                            <button className='quiz_next'>
                                Дальше →
                            </button>
                        </div>
                    </div>
                </div>
                </div>

                <div className='container quiz_block' id='sixth_quiz'>
                    <div className='d-flex flex-column justify-content-start align-items-center'>
                        <div className='number_quiz'>
                            <p className='quiz_big_text'>Давайте обсудим Ваш проект</p>
                        </div>
                        <div className="white_quiz5">
                            <div className="container">
                                <h2 className='quiz_text2'>Мы готовы сделать для вас лучшее предложение и подарить <br /> подарок!</h2>
                            </div>
                            <div className="container ms-5 d-flex flex-column">
                                <input placeholder='Ваше имя' type="text" className='input_text_ras mb-2' />
                                <input placeholder='Номер телефона' type="tel" className='input_text_ras mb-2' />
                                <input placeholder='Ваш e-mail' type="email" className='input_text_ras' />
                            </div>
                            <div className='contanier nazad_div2'>
                                <button className='quiz_nazad'>
                                    <div className='quiz_cencel'>
                                        →
                                    </div>
                                    <div className="quiz_cencel_text">
                                        Назад
                                    </div>
                                </button>
                                <button className='quiz_next' disabled>
                                    Дальше →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quiz;