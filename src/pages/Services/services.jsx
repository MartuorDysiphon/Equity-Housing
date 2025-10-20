import './services.css';
import stars from '../../assets/icon/stars.svg';
import camera from '../../assets/icon/camera-video.svg';
import headphones from '../../assets/icon/headphones.svg';
import map from '../../assets/icon/map.svg';
import fingerprint from '../../assets/icon/fingerprint.svg';
import wifi from '../../assets/icon/wifi.svg';
import suitcase from '../../assets/icon/suitcase.svg';


function Services() {
    return ( 
        <div className="service__sec">
            <div class="service" id="service">
                <div class="section__container service__container">
                <div class="service__content">
                    <p class="section__subheader">SERVICES</p>
                    <h2 class="section__header">Strive Only For The Best.</h2>
                    <ul class="service__list">
                    <li>
                        <span>
                        <img src={stars} alt=""/>
                        </span>
                        High Class Security
                    </li>
                    <li>
                        <span>
                        <img src={camera} alt=""/>
                        </span>
                        24 Hours CCTV Service
                    </li>
                    <li>
                        <span>
                        <img src={headphones} alt=""/>
                        </span>
                        Entertainment Room
                    </li>
                    <li>
                        <span>
                        <img src={map} alt=""/>
                        </span>
                        Playground
                    </li>
                    <li>
                        <span>
                        <img src={fingerprint} alt=""/>
                        </span>
                        2* Biometric Access
                    </li>
                    <li>
                        <span>
                        <img src={wifi} alt=""/>
                        </span>
                        Free Wifi
                    </li>
                    <li>
                        <span>
                        <img src={suitcase} alt=""/>
                        </span>
                        Fully Furnished Rooms
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div class="section__container banner__container">
                <div class="banner__content">
                <div class="banner__card">
                    <h4>5+</h4>
                    <p>Properties Available</p>
                </div>
                <div class="banner__card">
                    <h4>2300+</h4>
                    <p>Bookings Completed</p>
                </div>
                <div class="banner__card">
                    <h4>340+</h4>
                    <p>Happy Customers</p>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Services;