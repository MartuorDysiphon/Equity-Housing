import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return ( 
        <div className="home">
            <header className='home__header'>
                <div className="section__container header__container" id="home">
                    <p>Unique - Amazing - Safe</p>
                    <h1>The Simplicity of a Home Away From Home <br /><span>_</span></h1>
                </div>
            </header>
            <div className="section__container booking__container">
                <form className="booking__form">
                    <div className="input__group">
                        <div>
                            <p className="form__title">Application Categories</p>
                        </div>
                    </div>
                    <div className="input__group">
                        <span><i className="ri-calendar-2-fill"></i></span>
                        <div>
                            <Link to="/apply" className="btn1">Semester Application</Link>
                        </div>
                    </div>
                    <div className="input__group">
                        <span><i className="ri-calendar-2-fill"></i></span>
                        <div>
                            <Link to="/apply" className="btn1">Year Application</Link>
                        </div>
                    </div>
                    <div className="input__group input__btn">
                        <Link to="/explore" className="gallery__btn">Explore</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;
