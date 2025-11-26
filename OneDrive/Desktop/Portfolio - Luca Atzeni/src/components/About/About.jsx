import './About.scss';

const About = () => {
    const skills = [
        'JavaScript (ES6+)', 'Java', 'React', 'C / C++',
        'TypeScript', 'CSS3/Sass', 'Git', 'UI/UX Design',
        'Responsive Design', 'HTML', 'Phyton', 'Figma / Webflow',
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a passionate developer with a keen eye for detail and a love for creating
                            seamless digital experiences. With a background in both design and development,
                            I bring a unique perspective to every project I work on.
                        </p>
                        <p>
                            My passion for computer science and the digital world began in childhood, 
                            ranging from hardware assembly and maintenance to software implementation and 
                            programming—an activity I continue to cultivate today.
                        </p>
                        <p>
                            After obtaining a diploma in electronics, I embarked on a university path in computer engineering. 
                            Although I was unable to complete my studies for financial reasons, 
                            I continued to pursue my educational goals by specializing in Frontend Development and UI/UX Design 
                            at the TNV Academy in Cagliari. This journey has provided me 
                            with the practical skills and theoretical knowledge necessary to create intuitive 
                            and engaging digital experiences.
                        </p>
                    </div>
                    <div className="skills-container">
                        <h3>Tech Stack</h3>
                        <div className="skills-grid">
                            {skills.map((skill) => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
