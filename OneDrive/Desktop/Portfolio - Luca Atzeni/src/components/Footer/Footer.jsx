import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
