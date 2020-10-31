import React from 'react';
import ReactDOM from 'react-dom';

function Footer(){
    const year=new Date().getFullYear();
    return (
        <footer> Copyright ©{year}
        </footer>
    );
        
    
}

export default Footer;