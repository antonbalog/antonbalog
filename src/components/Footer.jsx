import footerStyles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <p>© 2019–{new Date().getFullYear()} Anton Balog</p>
        </footer>
    );
}

export default Footer;