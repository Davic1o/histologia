

import React from 'react';
import '../../css/footerP.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

    const FooterP = () => {
        return (
            <footer className="section footer-corporate context-dark">
                <div className="footer-corporate-inset">
                    <div className="container">
                        {/* Contact Us Section */}
                        <div className="footer-block">
                            <h6 className="text-spacing-100 text-uppercase">Contact us</h6>
                            <ul className="footer-contacts d-inline-block d-sm-block">
                                <li>
                                    <div className="unit">
                                    <span className="icon"><FontAwesomeIcon icon={faPhone} /></span>
                                        <div className="unit-body"><a className="link-phone" href="tel:#"> (+593) 2 3962900</a></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="unit">
                                        <div className="unit-left"><span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span></div>
                                        <div className="unit-body"><a className="link-aemail" href="mailto:#">GIByB-UPS@gmail.com</a></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="unit">
                                        <div className="unit-left">   <span className="icon"><FontAwesomeIcon icon={faLocationArrow} /></span></div>
                                        <div className="unit-body"><a className="link-location" href="#">Ecuador - Quito </a></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
    
                        {/* Popular News Section */}
                        <div className="footer-block">
                            <h6 className="text-spacing-100 text-uppercase">Popular news</h6>
                            <article className="post post-minimal-2">
                                <p className="post-minimal-2-title"><a href="#"> new</a></p>
                                <div className="post-minimal-2-time">
                                    <time dateTime="2019-05-04">date </time>
                                </div>
                            </article>
                            <article className="post post-minimal-2">
                                <p className="post-minimal-2-title"><a href="#"> new </a></p>
                                <div className="post-minimal-2-time">
                                    <time dateTime="2019-05-04">date </time>
                                </div>
                            </article>
                        </div>
    
                        {/* Quick Links Section */}
                        <div className="footer-block">
                            <h6 className="text-spacing-100 text-uppercase">Quick links</h6>
                            <ul className="list-custom-2">
                                <li><a href="about.html">About us</a></li>
                                <li><a href="#">Our Tours</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                {/* Bottom Panel */}
                <div className="footer-corporate-bottom-panel footer-bottom-section">
                    <div className="col">
                        <p className="rights">© 2024 . All Rights Reserved. Design by Jorge</p>
                    </div>
                    <div className="col">
                        <ul className="list-inline list-inline-sm footer-social-list-2">
                        <li><a href="#" className="icon"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a></li>
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="rights"><a href="#" className="privacy-policy">Privacy Policy</a></p>
                    </div>
                </div>
            </footer>
        );
    };
    
    export default FooterP;
    