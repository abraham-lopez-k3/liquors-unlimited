import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Map from './Categories/map';
import GoogleIcon from '../img/download.png'; // Adjust the path according to your folder structure


const Footer = () => {
    return (
        <footer id="footer" className="footer" role="contentinfo">
            <div className="wrapper">
                <div className="one-fourth">
                    <div id="googlemapswidget-2">
                        <h2 className="widgettitle">Map of Pascagoula</h2>
                        <p>
                            <a
                                data-gmw-id="googlemapswidget-2"
                                className="gmw-thumbnail-map gmw-lightbox-enabled"
                                href="#gmw-dialog-googlemapswidget-2"
                                title="Click to open a larger map"
                            >
                                <Map />
                            </a>
                        </p>
                    </div>
                </div>
                <div className="one-fourth">
                    <div id="text-2">
                        <h2 className="widgettitle">Location</h2>
                        <div className="textwidget">
                            <div itemscope itemtype="http://schema.org/LocalBusiness">
                                <span itemprop="name">Liquors Unlimited</span>
                                <br />
                                <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                                    <a
                                        itemprop="streetAddress"
                                        href="https://www.google.com/maps/place/3002+Market+St,+Pascagoula,+MS+39567/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-map-marker" aria-hidden="true"></i> 3002 Market St
                                        <br />
                                        Pascagoula, MS 39567
                                    </a>
                                </span>
                                <br />
                                <span>
                                    <i className="fa fa-phone-square" aria-hidden="true"></i>{' '}
                                    <a itemprop="telephone" href="tel:6622343331">
                                        (228) 762-3874
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="">
                        <div className="socialicons">
                            <div className="bottomicon">
                                <a
                                    href="https://www.facebook.com/p/Liquors-Unlimited-100066869287350/"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </div>

                            <div className="bottomicon">
                                <a
                                    href="https://www.google.com/maps/place/Liquors+Unlimited/@30.3641313,-88.5509175,17z/data=!3m1!4b1!4m6!3m5!1s0x889be8c8caf3c843:0x8ab0c06d01c57717!8m2!3d30.3641313!4d-88.5483372!16s%2Fg%2F1tkp0kny?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    <img src={GoogleIcon} alt="Google Icon" width="32" height="32" />

                                </a>
                            </div>

                        </div>
                    </div>
                  
                </div>
                <div className="one-fourth">
                    <div className="business-hours">
                        <h2>Business Hours</h2>
                        <ul>
                            <li>Monday: 10:00 AM - 10:00 PM</li>
                            <li>Tuesday: 10:00 AM - 10:00 PM</li>
                            <li>Wednesday: 10:00 AM - 10:00 PM</li>
                            <li>Thursday: 10:00 AM - 10:00 PM</li>
                            <li>Friday: 10:00 AM - 10:00 PM</li>
                            <li>Saturday: 10:00 AM - 10:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                        <strong></strong>
                    </div>

                </div>
                <div className="one-fourth">
                    <div id="text-16">
                        <h2 className="widgettitle">Contact Us Today!</h2>
                        <div className="textwidget">
                            Looking for something in particular? Come see if we have it in stock or if we can order
                            it special for you. Stop into our fully-stocked liquor store and choose between a
                            tremendous selection of wines and name-brand liquors.
                        </div>
                        <a className="btn" href="/contact-us/">
                                Learn More
                            </a>
                    </div>
                </div>
            </div>

            <div className="copy">
                © {new Date(Date.now()).getFullYear()} Liquors Unlimited
            </div>
        </footer>
    )
}


export default Footer;