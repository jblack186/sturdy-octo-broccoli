import React from 'react'
import './Home.css'
import Sneakers from './jakob-owens-JzJSybPFb3s-unsplash.jpg';
import Hiking from './tyler-lastovich-ILlmVlkNcHU-unsplash.jpg';
import Logo from './Run fast.png';

export default function Home() {
    return (
        <div className='container'>
            <div className='logo-nav'>
                <img src={ Logo } alt="logo" />
                <div className='top-nav'>
                    <div className='split-nav'>
                        <div className='top'>
                            <div className='login'>
                                <p>Login</p>
                                <p>Create Account</p>
                            </div>
                            <div>
                                <input placeholder='Search'/>
                            </div>    
                        </div>
                        <div>
                            <ul className='nav-links'>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-img">
                <img src={ Hiking } alt='Hiking Tail' />
            <img src={ Sneakers } alt='Person throwing up sneakers' />
                <div className="text">
                    <h2>Text</h2>
                    <button>Shop</button>
                </div>
            </div>
       
        </div>
    )
}