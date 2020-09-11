import React from "react";
import './Intro.css';
import SocialIcons from "../SocialIcons/SocialIcons";

const Intro = () => {
    return(
        <div className='intro-wrapper'>
            <div className="mt7 details-wrapper">
                <div className='intro-font'>
                    <h1 style={{fontSize: '80px', fontWeight: '100'}}>
                        Hi, I am
                        <br/>
                        <span style={{fontWeight: '420'}}>Kushagra Seth</span>
                    </h1>
                    <h3 style={{fontSize: '40px', fontWeight: '400'}}>
                        Fullstack Developer
                    </h3>
                    <h3 className='mt3 pt2' style={{fontSize: '30px', fontWeight: '200'}}>Join me here:
                        <div className='mb5'>
                            <SocialIcons/>
                        </div>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Intro;