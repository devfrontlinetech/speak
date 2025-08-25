import React from 'react';

const social_share = [
    { link: 'https://www.facebook.com/frontlinetechin/', target: '_blank', icon: 'icon-facebook',},
    { link: 'https://twitter.com/FrontlineTechin', target: '_blank', icon: 'icon-twitter', },
    { link: 'https://www.linkedin.com/company/frontline-technologies', target: '_blank', icon: 'icon-linkedin2'},
];

export const SocialShare = () => {
    return (
        <>
            {social_share.map((social, i) => (
                <li key={i}><a href={social.link} target={social.target ? social.target : ''}>
                <i className={social.icon}></i>
                </a></li>
            ))}
        </>
    )
}
