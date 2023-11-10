import React, { useState } from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const ContactContainer = styled.div`
  padding: 40px; 

  @media (max-width: 375px) {
    padding: 20px; 
  }
`;

const ContactForm = styled.form`
  max-width: 800px; /* Increased max-width for a larger form */
  margin: 0 auto;
  font-size: 18px; /* Increased font size */

  @media (max-width: 375px) {
    max-width: 100%;
  }
`;

const FormField = styled.div`
  margin-bottom: 30px; /* Increased margin for more spacing */
`;

const RequiredLabel = styled.label`
  display: block;
  margin-bottom: 10px; /* Increased margin for more spacing */
  font-weight: bold; /* Added bold font weight */
  font-size: 20px; /* Increased font size */
  color: green; 
`;

const Input = styled.input`
  width: 100%;
  padding: 15px; /* Increased padding */
  border: 2px solid #ccc; /* Increased border width */
  border-radius: 6px; /* Increased border radius */
  font-size: 16px; /* Increased font size */
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px; /* Increased padding */
  border: 2px solid #ccc; /* Increased border width */
  border-radius: 6px; /* Increased border radius */
  font-size: 16px; /* Increased font size */
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: green;
  color: white;
  padding: 15px 30px; /* Increased padding */
  border: none;
  border-radius: 6px; /* Increased border radius */
  cursor: pointer;
  font-size: 18px; /* Increased font size */

  &:hover {
    background-color: darkgreen;
  }
`;

const Message = styled.p`
  margin-top: 15px; /* Increased margin for more spacing */
  color: green;
  font-weight: bold;
  font-size: 18px; /* Increased font size */
`;

const ContactMethods = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    fill: #333;
  }
`;

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1);
    };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 3000); 
  };

  return (
    <>
    <p id="back" onClick={handleGoBack} style={{fontSize:"30px",position:"absolute", marginLeft:"40px",marginTop:"3px",color:"black"}}>←<span style={{fontSize:"30px"}}>Back</span></p>
    <ContactContainer>
      
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <RequiredLabel htmlFor="name">Name:</RequiredLabel>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <RequiredLabel htmlFor="email">Email:</RequiredLabel>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <RequiredLabel htmlFor="message">Message:</RequiredLabel>
          <TextArea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </FormField>
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>
      {messageSent && (
        <Message>Message received! We'll get back to you soon.</Message>
      )}

      <ContactMethods>
        <ContactMethod>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm2-11.586l-1.768-1.768-2.829 2.828-2.828-2.828-1.768 1.768 2.828 2.829-2.828 2.828 1.768 1.768 2.828-2.828 2.829 2.828 1.768-1.768-2.828-2.829 2.828-2.828z"/>
          </svg>
          Viatu@gmail.com
          </ContactMethod>
        <ContactMethod>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0c6.628 0 12 5.373 12 12s-5.372 12-12 12-12-5.373-12-12 5.372-12 12-12zm0 22c5.524 0 10-4.477 10-10s-4.476-10-10-10-10 4.477-10 10 4.476 10 10 10zm1-15h-2v6h2zm0 8h-2v2h2z"/>
          </svg>
          +254 (723) 456-789
        </ContactMethod>
      </ContactMethods>
    </ContactContainer>
    </>
  );
}

export default Contact;
