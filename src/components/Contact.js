import React from 'react';

// SVGS
const addressIcon = "/assets/svgs/ADDRESS-ICON.svg";
const emailIcon = "/assets/svgs/EMAIL-ICON.svg";
const githubIcon = "/assets/svgs/GITHUB-ICON.svg";
const linkedinIcon = "/assets/svgs/LINKEDIN-ICON.svg";
const phoneIcon = "/assets/svgs/PHONE-ICON.svg";

const Contact = ({ phone, email, address, linkedin, github }) => {
    const phoneURL = "tel:"+phone
    const emailURL = "mailto:"+email
    const linkedinURL = "https://www.linkedin.com/" + linkedin
    const githubURL = "https://github.com/" + github
    return (
        <div id='contact-component'>
            <div className='leftHeader heading-primary'>
                <p>CONTACT</p>
            </div>
            <div className='leftContents'>
                <ul>
                    <li>
                        <img src={phoneIcon} alt="Phone Icon" className='svg-icon' />
                        <p className='text-white-light'><a href={phoneURL}>{phone}</a></p>
                    </li>
                    <li>
                        <img src={emailIcon} alt="Email Icon" className='svg-icon' />
                        <p className='text-white-light'><a href={emailURL}>{email}</a></p>

                    </li>
                    <li>
                        <img src={addressIcon} alt="Address Icon" className='svg-icon' />
                        <p className='text-white-light'>{address}</p>
                    </li>
                    {
                        linkedin !== '' &&
                        <li>
                            <img src={linkedinIcon} alt="LinkedIn Icon" className='svg-icon' />
                            <p className='text-white-light'><a href={linkedinURL} target='_blank'>{linkedin}</a></p>
                        </li>
                    }
                    {
                        github !== '' &&
                        <li>
                            <img src={githubIcon} alt="GitHub Icon" className='svg-icon' />
                            <p className='text-white-light'><a href={githubURL} target='_blank'>{github}</a></p>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Contact;
