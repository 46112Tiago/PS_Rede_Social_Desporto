import React from "react";
import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Footer()  {
      return(
        
        <>
          <div className="footer">
            <div id="middle">
                <h3>Contacts:</h3>
                
                <p>Diogo Fernandes 
                    <a  className='github' href="https://github.com/bullycow" target={'_blank'}><FaGithub/></a> 
                    <a className="linkedin" href="https://pt.linkedin.com/" target={'_blank'}><FaLinkedin/></a></p>
                
                <p>Tiago Alves 
                    <a className='github' href="https://github.com/46112Tiago" target={'_blank'}><FaGithub/></a> 
                    <a className="linkedin" href="https://pt.linkedin.com/" target={'_blank'}><FaLinkedin/></a></p>
            </div>

            <div id="right">
                <p>&copy; 2022 FieldMe</p>
            </div>

          </div>
        </>
        
        
        );
    }

export default Footer;
