import React from 'react';


const NavBar = () => {
    return (
        <nav style={{ padding: '10px',  background: '#333',marginTop: '20px' ,text:'light'}}>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/states"> States</a></li>
                <li><a href="/states2"> States2</a></li>
                <li><a href="/profilepic"> profile</a></li>
                <li><a href="/count"> count page</a></li>
            
            
            </ul>
        </nav>
    );
};

export default NavBar;
