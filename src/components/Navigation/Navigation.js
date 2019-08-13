import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
            if(isSignedIn) {
                return(
                    <nav className="flex justify-between bb b--white-10 shadow-3 navbar-container"  style = {{display: 'flex', justifyContent: 'flex-end'}}>
                        <div className="flex-grow flex items-center">
                            <p onClick={ () => onRouteChange('signout')} className="f6 dib white bg-black mr3 mr4-ns pv2 ph2 pointer navbar-button">Sign out</p>
                        </div>
                    </nav>
                );
            }else {
                return(
                    <nav className="flex justify-between bb b--white-10 shadow-3 navbar-container"  style = {{display: 'flex', justifyContent: 'flex-end'}}>
                        <div className="flex-grow flex items-center">
                            <p onClick={ () => onRouteChange('SignIn')}  className="f6 dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer navbar-button">Sign in</p>
                            <p onClick={ () => onRouteChange('Register')} className="f6 dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer navbar-button">Register</p>
                        </div>
                    </nav>
                );
            }
}

export default Navigation;