import React from 'react';

import footerStyles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <p>© 2019–{new Date().getFullYear()} Anton Balog</p>
            {/* <div className={footerStyles.tooltip}>
        Anton Balog
    <div className={footerStyles.right}>
        <img alt="There shoul be me!" src='https://pbs.twimg.com/profile_images/878240617519882240/bupKldgs_400x400.jpg' />
        <div className={footerStyles.textcontent}>
            <h3>Fade in Effect</h3>
            <ul>
                <li>This demo has fade in/out effect.</li>
                <li>It is using CSS opacity, visibility, and transition property to toggle the tooltip.</li>
                <li>Other demos are using display property<em>(none or block)</em> for the toggle.</li>
            </ul>
        </div>
        <i></i>
    </div>
</div> */}

        </footer>
    );
}

export default Footer;