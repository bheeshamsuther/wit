import React from "react";
import { Link } from "gatsby";
import WitLogo from '../images/win.jpeg'
import Styles from '../components/wit.css'
import Gallery from '../components/gallery'
const Wit = () => (
    <div>
        <img src={WitLogo} width="100%" />
        <div className='textDiv'>
            <p>The Women Empowerment Division of the Presidential Initiative for Artificial
                 Intelligence & Computing is committed to the empowerment and autonomy of
         women in Pakistan.</p>
            <p>The single most important channel for the empowerment of women is education. The Women Empowerment Division is committed to providing the best technical education in the world with the flexibility to allow just about anyone to participate and improve their lives. The primary objective of the Women Empowerment Division is to provide a platform via which women can receive education and training to jumpstart their careers in the global technology industry.</p>
       <p>The Women Inclusion in Technology project is the largest initiative on women education in Pakistan. The main of the project is to drive female participation in the technology industry in Pakistan from less than 5% to 30% over the next two years. Via this project, PIAIC is propagating awareness and training on the latest, most state-of-the-art technologies to women in Pakistan. The Women Empowerment Division will aid highly skilled women in technology to establish themselves as entrepreneurs and leaders in the technology industry not only in Pakistan but also around the world.</p>
        </div>
        <p style={{
            textAlign : 'center',
            color :'black',
            fontWeight : 700,
            fontFamily : 'sans-serif',
            fontSize : 40,
            lineHeight : 1,
            wordSpacing  : 24,


        }}>WOMEN INCLUSION IN TECHNOLOGY</p>
        <p style={{
            fontSize : 14,
            fontWeight : 700,
            lineHeight : 3,
            letterSpacing : 12,
            borderTop : '1px solid black',
            textAlign : 'center',
            color : 'black'
        }}>PIAIC WOMEN'S GALLERY</p>
        <Gallery/>
    </div>
)

export default Wit