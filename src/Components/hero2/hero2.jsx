import React from 'react';
import './hero2.css'
import Brat from '../../images/00ba73df-bfc9-4043-b.png'

const Hero2 = () => {
    return (
        <div>
            <div className="container margin_best_top">
            <div className='payload mt-5'>
            <div className="d-flex mt-5">
                <div className='header_mobileNone2'>
                    <img className='brat' src={Brat} alt="brat" />
                </div>
                {/* hero_none
                header_mobileNone */}
                <div className='margin_hero2'>
                    <h2 className='sdelaye'>Сделаем анализ Вашего <br /> аккаунта в Instagram</h2>
                    <svg className='free' style={{"marginLeft": "-23"}} xmlns="http://www.w3.org/2000/svg" width="532" height="98" viewBox="0 0 532 98" fill="none"> <g filter="url(#filter0_d_23_11)"> <path d="M23.4014 23.7011H65.532V34.7199H37.4449V42.858H50.4802C56.5778 42.858 61.2589 44.1543 64.5238 46.747C67.7886 49.3396 69.421 53.0606 69.421 57.9098C69.421 62.9991 67.5966 66.9841 63.9476 69.8648C60.2987 72.6975 55.1854 74.1139 48.6077 74.1139H23.4014V23.7011ZM47.6715 63.8873C50.0721 63.8873 51.8966 63.4072 53.1449 62.4469C54.3932 61.4867 55.0174 60.1183 55.0174 58.3419C55.0174 54.789 52.5687 53.0126 47.6715 53.0126H37.4449V63.8873H47.6715ZM117.256 63.0951V74.1139H76.7821V23.7011H116.32V34.7199H90.8976V43.2181H113.295V53.8768H90.8976V63.0951H117.256ZM149.868 75.1221C144.587 75.1221 139.834 74.0179 135.609 71.8093C131.432 69.5527 128.143 66.4319 125.742 62.4469C123.341 58.4619 122.141 53.9488 122.141 48.9075C122.141 43.8662 123.341 39.3531 125.742 35.3681C128.143 31.3831 131.432 28.2863 135.609 26.0777C139.834 23.8212 144.587 22.6929 149.868 22.6929C154.477 22.6929 158.63 23.5091 162.327 25.1415C166.024 26.7739 169.097 29.1265 171.546 32.1993L162.471 40.4094C159.207 36.4724 155.246 34.5039 150.588 34.5039C147.852 34.5039 145.403 35.104 143.243 36.3043C141.13 37.5046 139.474 39.2091 138.273 41.4176C137.121 43.5782 136.545 46.0748 136.545 48.9075C136.545 51.7402 137.121 54.2609 138.273 56.4694C139.474 58.63 141.13 60.3104 143.243 61.5107C145.403 62.711 147.852 63.3112 150.588 63.3112C155.246 63.3112 159.207 61.3427 162.471 57.4057L171.546 65.6157C169.097 68.6885 166.024 71.0411 162.327 72.6735C158.63 74.3059 154.477 75.1221 149.868 75.1221ZM225.303 23.7011V74.1139H211.188V35.008H192.031V74.1139H177.987V23.7011H225.303ZM282.967 23.7011V74.1139H268.924V35.008H254.448L254.16 43.2181C253.92 50.4199 253.32 56.2774 252.36 60.7905C251.447 65.3037 249.863 68.8085 247.606 71.3052C245.35 73.7538 242.157 74.9781 238.028 74.9781C236.108 74.9781 233.947 74.69 231.546 74.1139L232.339 62.4469C232.963 62.591 233.611 62.663 234.283 62.663C236.156 62.663 237.596 61.9188 238.604 60.4304C239.612 58.9421 240.333 56.8775 240.765 54.2369C241.197 51.5482 241.485 48.0673 241.629 43.7942L242.349 23.7011H282.967ZM328.536 64.3194H307.218L303.257 74.1139H288.71L310.963 23.7011H325.007L347.333 74.1139H332.497L328.536 64.3194ZM324.359 53.8048L317.877 37.6727L311.396 53.8048H324.359ZM391.196 35.008H375.784V74.1139H361.741V35.008H346.257V23.7011H391.196V35.008ZM445.734 23.7011V74.1139H431.474V54.4529H412.029V74.1139H397.77V23.7011H412.029V42.6419H431.474V23.7011H445.734ZM481.34 75.1221C476.011 75.1221 471.209 73.9939 466.936 71.7373C462.711 69.4807 459.374 66.3599 456.926 62.3749C454.525 58.3899 453.325 53.9008 453.325 48.9075C453.325 43.9142 454.525 39.4251 456.926 35.4401C459.374 31.4551 462.711 28.3343 466.936 26.0777C471.209 23.8212 476.011 22.6929 481.34 22.6929C486.669 22.6929 491.447 23.8212 495.672 26.0777C499.945 28.3343 503.281 31.4551 505.682 35.4401C508.131 39.4251 509.355 43.9142 509.355 48.9075C509.355 53.9008 508.131 58.3899 505.682 62.3749C503.281 66.3599 499.945 69.4807 495.672 71.7373C491.447 73.9939 486.669 75.1221 481.34 75.1221ZM481.34 63.3112C483.885 63.3112 486.189 62.711 488.254 61.5107C490.318 60.3104 491.951 58.63 493.151 56.4694C494.351 54.2609 494.951 51.7402 494.951 48.9075C494.951 46.0748 494.351 43.5782 493.151 41.4176C491.951 39.2091 490.318 37.5046 488.254 36.3043C486.189 35.104 483.885 34.5039 481.34 34.5039C478.795 34.5039 476.491 35.104 474.426 36.3043C472.362 37.5046 470.729 39.2091 469.529 41.4176C468.329 43.5782 467.728 46.0748 467.728 48.9075C467.728 51.7402 468.329 54.2609 469.529 56.4694C470.729 58.63 472.362 60.3104 474.426 61.5107C476.491 62.711 478.795 63.3112 481.34 63.3112Z" fill="url(#paint0_linear_23_11)"/> </g> <defs> <filter id="filter0_d_23_11" x="0.895672" y="0.187176" width="530.965" height="97.4407" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="11.2528"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.205833 0 0 0 0 0.205833 0 0 0 0.19 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_11"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_11" result="shape"/> </filter> <linearGradient id="paint0_linear_23_11" x1="265" y1="18.2165" x2="265" y2="85.9088" gradientUnits="userSpaceOnUse"> <stop stopColor="#FF3434"/> <stop offset="1" stopColor="#CA0016"/> </linearGradient> </defs> </svg>
                    <div className='hero_none2'>
                        <img className='brat' src={Brat} alt="brat" />
                    </div>
                    <h3 className='smm'>SMM - Команда из 6-ти специалистов <br /> работают над вашим проектом по цене <br /> меньше штатного сотрудника.</h3>
                    <p className='mt-4 mb-2 text-light hero_napiw'>Напишите нам в WhatsApp прямо сейчас:</p>
                    <div className='d-flex'>
                        <div className='whatsap'>
                            <svg className='whatsapIcon' style={{"marginLeft": "25px", "marginTop": "20px"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 204 203" fill="none"> <path d="M101.998 202.386H101.958C86.0423 202.38 70.262 198.623 56.1205 191.494L12.529 201.41C9.86911 202.014 7.08316 201.216 5.147 199.293C3.21085 197.371 2.39374 194.592 2.97894 191.927L12.4247 148.992C4.30966 134.006 0.0249023 117.592 0.0015564 101.317C0 101.261 0 101.205 0 101.15C0.0108948 74.1794 10.6769 48.779 30.0307 29.6291C49.3409 10.5228 74.8985 0 101.997 0C129.156 0.0108948 154.673 10.543 173.856 29.654C193.304 49.0312 204.009 74.4518 204 101.231C203.992 121.469 197.924 141.028 186.452 157.792C183.966 161.425 179.007 162.354 175.375 159.868C171.744 157.383 170.813 152.424 173.298 148.791C182.95 134.687 188.055 118.239 188.062 101.225C188.07 78.7147 179.031 57.3065 162.608 40.9441C146.432 24.8276 124.905 15.9468 101.994 15.9375C54.6124 15.9375 16.0371 54.0848 15.9375 101.007C15.9375 101.058 15.9391 101.108 15.9391 101.158C15.9328 115.682 20.0184 130.409 27.7521 143.746C28.7529 145.472 29.0704 147.509 28.6408 149.456L21.2433 183.082L55.4451 175.302C57.333 174.874 59.3127 175.146 61.0154 176.069C73.5117 182.853 87.6702 186.442 101.961 186.449H101.997C117.537 186.449 132.8 182.246 146.132 174.298C149.911 172.042 154.802 173.28 157.056 177.06C159.31 180.841 158.074 185.731 154.293 187.986C138.494 197.406 120.411 202.386 101.997 202.386H101.998ZM79.4929 60.6497C77.7451 56.7773 75.9054 56.645 74.2432 56.5781H69.7717C68.2153 56.5781 65.6877 57.1602 63.5508 59.487C61.4123 61.8138 55.3844 67.4387 55.3844 78.8797C55.3844 90.3208 63.7453 101.377 64.9111 102.931C66.0784 104.481 81.0524 128.709 104.766 138.031C124.474 145.777 128.485 144.236 132.762 143.847C137.041 143.461 146.567 138.224 148.51 132.793C150.455 127.365 150.455 122.711 149.872 121.738C149.29 120.77 147.733 120.188 145.4 119.025C143.066 117.863 131.631 112.14 129.492 111.365C127.354 110.59 125.799 110.202 124.242 112.531C122.686 114.856 118.104 120.233 116.742 121.783C115.382 123.338 114.02 123.531 111.687 122.369C109.354 121.201 101.916 118.703 93.0025 110.783C86.0656 104.618 81.2532 96.758 79.8914 94.4297C78.5295 92.1044 79.7451 90.8437 80.9155 89.6842C81.9629 88.643 83.3808 87.2189 84.5481 85.8617C85.7123 84.5045 86.0454 83.5349 86.822 81.9832C87.6002 80.4314 87.2111 79.0743 86.629 77.9101C86.0454 76.7475 81.5661 65.2472 79.4914 60.6497" fill="url(#paint0_linear_23_37)"/> <defs> <linearGradient id="paint0_linear_23_37" x1="-66" y1="-0.796883" x2="246" y2="236" gradientUnits="userSpaceOnUse"> <stop stopColor="white"/> <stop offset="1" stopColor="white" stopOpacity="0.6"/> </linearGradient> </defs> </svg>
                        </div>
                        <button  className='hero2_btn'> задать вопрос <svg className='heroStrelko' xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 168 89" fill="none"> <path d="M6 38.1838C2.68629 38.1838 2.89694e-07 40.8701 0 44.1838C-2.89694e-07 47.4975 2.68629 50.1838 6 50.1838L6 38.1838ZM166.243 48.4265C168.586 46.0833 168.586 42.2844 166.243 39.9412L128.059 1.75744C125.716 -0.585706 121.917 -0.585706 119.574 1.75744C117.23 4.10059 117.23 7.89958 119.574 10.2427L153.515 44.1839L119.574 78.125C117.23 80.4681 117.23 84.2671 119.574 86.6103C121.917 88.9534 125.716 88.9534 128.059 86.6103L166.243 48.4265ZM6 50.1838L162 50.1839L162 38.1839L6 38.1838L6 50.1838Z" fill="white"/> </svg></button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Hero2;