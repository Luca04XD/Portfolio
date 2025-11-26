import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">Portfolio.</a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="social-links-mobile">
                        <a href="https://github.com/Luca04XD?tab=repositories" target="_blank" rel="noreferrer"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/atzeni-luca-1841a736b/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="nav-actions">
                    <a href="mailto:email@example.com" className="contact-btn">Let's Talk</a>
                    <button className="menu-btn" onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
