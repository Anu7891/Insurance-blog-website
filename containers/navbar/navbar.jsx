// Sample UI Implementation in React for a Navbar similar to the image
import Container from '@/hoc/container';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar-container">
                <Container>
                    <div className="navbar-main">
                        <div className="navbar-brand pr-3 mr-1">
                            <span>Bajaj Allianz</span>
                        </div>
                        <div className="navbar-menu">
                            <a href="#">Insure</a>
                            <a href="#">Renew</a>
                            <a href="#">Claim</a>
                            <a href="#">Government Schemes</a>
                            <a href="#">Insurance Samjho</a>
                            <a href="#">Prive <span className="new-badge">New</span></a>
                        </div>
                    </div>
                </Container>
            {/* <div className="navbar-bottom">
                <a href="#">Home</a>
                <a href="#">Motor Insurance</a>
                <a href="#">Health Insurance</a>
                <a href="#">Travel Insurance</a>
                <a href="#">Home Insurance</a>
                <a href="#">Cyber Insurance</a>
                <a href="#">Knowledge Bytes</a>
                <a href="#">Senior Health Care</a>
                <a href="#">Announcements</a>
                <a href="#">Pet Insurance</a>
                <a href="#">MSME</a>
                <a href="#">Wellness</a>
            </div> */}
        </div>
    );
};

export default Navbar;

