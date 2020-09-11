import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import Competency from "../Competency/Competency";
import {competencies} from "./CompetencyArray";

const AboutMe = () => {
    const aboutMeText = 'An innovative and creative student, passionate about Deep Learning, Data Science and Web Development. ' +
        'I describe myself as an initiator and a dynamic person with a great curiosity for all those things which revolve around new technologies. ' +
        'My major area of interest is centred around Deep Learning using TensorFlow 2.0. ' +
        'I have equal interest in Backend Development. ' +
        'I consider Competitive coding and algorithm development my two major strengths. ' +
        'Also, I love to explore new technology and learn new things. ' +
        'I am looking for an exciting opportunity to hone my skills in a dynamic organization where I can contribute towards developing something which makes a difference to the society.';
    return(
        <MDBJumbotron fluid>
            <MDBContainer className='text-dark'>
                <div>
                    <h1 className='f1 mb4' style={{fontWeight: '450'}}>About Me</h1>
                    <div className='f4' style={{fontWeight: '450'}}>
                        {aboutMeText}
                    </div>
                </div>
                <div className='flex-wrap'>
                    <h1 className='f1 mt5 mb2' style={{fontWeight: '400'}}>Core Competencies</h1>
                    <div className='flex flex-wrap justify-content-center'>
                        {
                            competencies.map(comp => {
                                return(
                                    <Competency competency={comp.competency}
                                                pieColor={comp.pieColor}
                                                startAngle={comp.startAngle}
                                                endAngle={comp.endAngle}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </MDBContainer>
        </MDBJumbotron>
    );
};

export default AboutMe;