import { ArrowRight } from 'lucide-react';
import './Hero.scss';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hello, I'm Luca Atzeni</span>
                    <h1 className="title">
                        <span className="highlight">Frontend Developer</span>
                        <br />
                        & UI/UX Designer.
                    </h1>
                    <h3 className="description">
                        I build accessible, pixel-perfect, performant, and awesome web experiences.
                    </h3>
                    <br />
                    <div className="hero-actions">
                        <a href="#projects" className="primary-btn">
                            View Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="secondary-btn">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
