const social_share = [
    { link: 'https://www.facebook.com/frontlinetechin/', target: '_blank', icon: 'icon-facebook', color: 'color-fb' aria-label="Follow Frontline Technologies on Facebook" },
    { link: 'https://twitter.com/FrontlineTechin', target: '_blank', icon: 'icon-twitter', color: 'color-twitter' aria-label="Follow Frontline Technologies on Twitter" },
    { link: 'https://www.linkedin.com/company/frontline-technologies', target: '_blank', icon: 'icon-linkedin2', color: 'color-linkd' aria-label="Follow Frontline Technologies on Linkedin" },
    { link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube', color: 'color-yt' aria-label="Follow Frontline Technologies on Youtube" },
    { link: 'https://www.instagram.com/frontlinetechnologies_', target: '_blank', icon: 'icon-instagram', color: 'color-ig' aria-label="Follow Frontline Technologies on Instagram" },
]

import React from 'react';

const FooterSocial = () => {
    return (
        <>
            {social_share.map((social, i) => (
                <li key={i}><a href={social.link} target={social.target ? social.target : ''} className={`${social.color}`} aria-label="Read more about Seminole tax hike">
                <i className={social.icon}></i>
                </a></li>
            ))}
        </>
    )
}

export default FooterSocial;
