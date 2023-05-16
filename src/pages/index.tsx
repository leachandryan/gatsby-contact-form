import React from 'react';
import ContactForm from '../components/contact-form';

const IndexPage = (): JSX.Element => {
    
    return (
        <div>
            <h1>Contact Us</h1>
            <ContactForm apiUrl="https://example.com/api/contact" />
        </div>
    );
};

export default IndexPage;