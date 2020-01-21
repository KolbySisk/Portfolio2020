import { useState, FormEvent } from 'react';
import axios from 'axios';
import * as ContactStyles from './contact.styles';

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const formSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const postMessage = await axios.post('/api/slack', {
      name,
      email,
      message,
    });

    if (postMessage.status === 200) {
      setMessageSent(true);
    }
  };

  const toggleClick = () => {
    setModalOpen(!modalOpen);
    setMessageSent(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactStyles.Root>
      <ContactStyles.ToggleButton onClick={toggleClick}>
        {modalOpen ? 'Cancel' : `Let's chat`}
      </ContactStyles.ToggleButton>

      <ContactStyles.Form open={modalOpen} onSubmit={formSubmit}>
        {messageSent && (
          <ContactStyles.Thanks>
            <h2>Message sent. Thanks!</h2>
          </ContactStyles.Thanks>
        )}
        <ContactStyles.TextField>
          <ContactStyles.TextFieldLabel>Enter your name</ContactStyles.TextFieldLabel>
          <ContactStyles.TextFieldInput
            type="text"
            required
            value={name}
            onChange={(event: any) => setName(event.target.value)}
          />
        </ContactStyles.TextField>

        <ContactStyles.TextField>
          <ContactStyles.TextFieldLabel>Enter your email</ContactStyles.TextFieldLabel>
          <ContactStyles.TextFieldInput
            type="email"
            required
            value={email}
            onChange={(event: any) => setEmail(event.target.value)}
          />
        </ContactStyles.TextField>

        <ContactStyles.TextField>
          <ContactStyles.TextFieldLabel>Enter your message</ContactStyles.TextFieldLabel>
          <ContactStyles.TextFieldArea
            required
            value={message}
            onChange={(event: any) => setMessage(event.target.value)}
          />
        </ContactStyles.TextField>
        <ContactStyles.Submit type="submit">Send message</ContactStyles.Submit>
      </ContactStyles.Form>
      <ContactStyles.Backdrop open={modalOpen} />
    </ContactStyles.Root>
  );
};

export default Contact;
