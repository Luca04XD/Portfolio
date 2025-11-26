import { useState, useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.scss';

const Contact = () => {
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleMouseMove = (e) => {
        if (!contactRef.current) return;
        const { left, top } = contactRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        contactRef.current.style.setProperty('--x', `${x}px`);
        contactRef.current.style.setProperty('--y', `${y}px`);
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address (e.g., user@domain.com)';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Handle successful submission here
        console.log('Form submitted:', formData);
        alert('Message sent successfully! (Demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section
            id="contact"
            className="contact"
            ref={contactRef}
            onMouseMove={handleMouseMove}
        >
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's talk about everything!</h3>
                        <p>
                            Don't like forms? Send me an email. 👋
                        </p>
                        <div className="info-item">
                            <Mail className="icon" />
                            <span>atzeni.luca04@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <MapPin className="icon" />
                            <span>Sinnai, CA</span>
                        </div>
                        <div className="info-item">
                            <Phone className="icon" />
                            <span>+39 389 019 8937</span>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={`form-group ${errors.email ? 'error' : ''}`}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
