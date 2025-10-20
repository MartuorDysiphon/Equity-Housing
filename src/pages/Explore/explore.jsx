import './explore.css';
import heartIcon from '../../assets/icon/heart.svg';
import lockIcon from '../../assets/icon/lock.svg';
import carIcon from '../../assets/icon/car-front.svg';

import heatherImg from '../../assets/quick/2.-Heather-Court-IMG_4916.jpg';
import mildeneImg from '../../assets/quick/3.-Mildene-Court-IMG_4910-1.jpg';
import ashboroughImg from '../../assets/quick/4.-Ashborough-Heights-IMG_4909.jpg';
import rosenhofImg from '../../assets/quick/1.-Rosenhof-IMG_4911.jpg';
import vluImg from '../../assets/quick/VLU-Building.jpg';
import comingSoonImg from '../../assets/cs.jpg';   
import { Link } from 'react-router-dom';

function Explore () {
    return ( 
        <div class="section__container room__container" id="accommodations">
            <p class="section__subheader">OUR ACCOMMODATIONS</p>
            <h2 class="section__header">The Most Memorable Student life Starts Here.</h2>
            <div class="room__grid">
            <div class="room__card">
                <div class="room__card__image">
                <img className='acc__img' src={heatherImg} alt="room" />
                <div class="room__card__icons">
                    <span><img src={heartIcon} alt=""></img></span>
                    <span><img src={lockIcon} alt=""></img></span>
                    <span><img src={carIcon} alt=""></img></span>
                </div>
                </div>
                <div class="room__card__details">
                <h4>Heather Court</h4>
                <p>
                    Comfortable and secure, designed for focused living and relaxation.
                </p>
                <Link to="/heather" class="btn1">View</Link>
                </div>
            </div>
            <div class="room__card">
                <div class="room__card__image">
                <img className='acc__img' src={mildeneImg} alt="room" />
                <div class="room__card__icons">
                    <span><img src={heartIcon} alt=""></img></span>
                    <span><img src={lockIcon} alt=""></img></span>
                    <span><img src={carIcon} alt=""></img></span>
                </div>
                </div>
                <div class="room__card__details">
                <h4>Mildene</h4>
                <p>
                    Classic and convenient, ideal for students who value easy living.
                </p>
                <Link to="/meldine" class="btn1">View</Link>
                </div>
            </div>
            <div class="room__card">
                <div class="room__card__image">
                <img className='acc__img' src={ashboroughImg} alt="room" />
                <div class="room__card__icons">
                    <span><img src={heartIcon} alt=""></img></span>
                    <span><img src={lockIcon} alt=""></img></span>
                    <span><img src={carIcon} alt=""></img></span>
                </div>
                </div>
                <div class="room__card__details">
                <h4>Ashbrough Heights</h4>
                <p>
                    Stylish and private, offering a calm space for academic success.
                </p>
                <Link to="/ashbrough" class="btn1">View</Link>
                </div>
            </div>
            <div class="room__card">
                <div class="room__card__image">
                <img className='acc__img' src={rosenhofImg} alt="room" />
                <div class="room__card__icons">
                    <span><img src={heartIcon} alt=""></img></span>
                    <span><img src={lockIcon} alt=""></img></span>
                    <span><img src={carIcon} alt=""></img></span>
                </div>
                </div>
                <div class="room__card__details">
                <h4>Rosenhof</h4>
                <p>
                    Practical and welcoming, perfect for building friendships and routines.
                </p>
                <Link to="/rosenhof" class="btn1">View</Link>
                </div>
            </div>
            <div class="room__card">
                <div class="room__card__image">
                <img className='acc__img' src={vluImg} alt="room" />
                <div class="room__card__icons">
                    <span><img src={heartIcon} alt=""></img></span>
                    <span><img src={lockIcon} alt=""></img></span>
                    <span><img src={carIcon} alt=""></img></span>
                </div>
                </div>
                <div class="room__card__details">
                <h4>VLU</h4>
                <p>
                    Fresh and fully equiped, a smart choice for students who want quality and independency.
                </p>
                </div>
                <Link to="/vlu" class="btn1">View</Link>
            </div>
            <div class="room__card">
                <div class="room__card__image">
                <img className='acc__img' src={comingSoonImg} alt="comming soon" />
                <div class="room__card__icons">
                    <span><img src={heartIcon} alt=""></img></span>
                    <span><img src={lockIcon} alt=""></img></span>
                    <span><img src={carIcon} alt=""></img></span>
                </div>
                </div>
                <div class="room__card__details">
                <h4>Coming Soon</h4>
                <p>
                    A new residence is on the way. Stay turned.
                </p>
                <Link to="/contact" class="btn1">Enquire</Link>
                </div>
            </div>
            </div>
        </div>
     );
}

export default Explore ;