import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface ContactFormProps {
  apiUrl: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ apiUrl }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        label="Subject"
        type="text"
        id="subject"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        label="Message"
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
      >
        {isLoading? 'Submitting...' : 'Submit'}
      </Button>

      {isSuccess && <p>Form submitted successfully!</p>}
      {isError && <p>There was an error submitting the form.</p>}
    </form>
  );
};

export default ContactForm;