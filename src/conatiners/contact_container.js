import React, { Component, createRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailJS from 'emailjs-com';
import '../styles/contact.css';
import GithubSVG from '../assets/github_svg';
import LinkedInSVG from '../assets/linkedin_svg.js';

const ContactContainer = () => {
  const [loaded, setLoaded] = useState(false);

  const fieldValues = [
    { title: 'Subject', id: 'subject', required: true, type: 'text' },
    { title: 'Your Contact Email', id: 'from_email', required: true, type: 'email' },
    { title: 'Your Message', id: 'email_body', required: true, type: 'textarea' }
  ];
  const validateForm = event => {
    let proceed = true;
    fieldValues.forEach(field => {
      if (field.required) {
        const value = event.target[field.id].value;
        if (!value) {
          proceed = false;
        }
      }
    });
    return proceed;
  };

  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const validation = validateForm(event);
    if (validation) {
      const params = {
        recipient_email: 'stephen.higgins1995@gmail.com'
      };
      fieldValues.forEach(field => {
        params[field.id] = event.target[field.id].value;
      });
      emailJS.send('gmail', 'template_one', params, 'user_NZ9AngoKPS2Lb7NFOpI8I').then(res => {
        console.log(res);
      });
      event.target.reset();
      setEmailSent(true);
    }
  };

  const ref = createRef();

  useEffect(() => {
    if (emailSent === true) {
      setTimeout(() => {
        setEmailSent(false);
      }, 1000);
    }
    if (loaded === false) {
      ref.current.scrollIntoView({
        behavior: 'auto',
        block: 'start'
      });
      document.title = 'Stephen Higgins | Contact Me';
      setLoaded(true);
    }
  }, [loaded, ref, emailSent]);

  const redirect = location => {
    window.location = location;
  };

  return (
    <div id="contact_container">
      <div id="scroll_anchor" ref={ref} />
      <div className="information">
        <p>
          If you would like to contact me for building your website, for other business enquiries or just to say hello,
          please end me an email below.
        </p>
        <p>
          Make sure to send any other contact information in your message so I can contact you back as soon as I can
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          {fieldValues.map((field, index) => {
            return (
              <div className="input_container" key={index}>
                <label htmlFor={field.id}>{field.title}</label>
                {field.type !== 'textarea' ? (
                  <input required type={field.type} id={field.id} name={field.id} />
                ) : (
                  <textarea required id={field.id} name={field.id} />
                )}
              </div>
            );
          })}
          <div className="input_container">
            <button id="submit_button">Submit</button>
          </div>
        </form>
      </div>
      <div className="thank_you" id={emailSent ? 'show' : 'hidden'}>
        <p>Email Sent!</p>
      </div>
    </div>
  );
};

export default ContactContainer;
