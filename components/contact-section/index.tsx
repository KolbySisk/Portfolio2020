import { useState } from 'react';
import * as ContactStyles from './contact.styles';

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ContactStyles.Root>
      <ContactStyles.ToggleButton onClick={() => setModalOpen(!modalOpen)}>
        {modalOpen ? 'Cancel' : `Let's chat`}
      </ContactStyles.ToggleButton>

      <ContactStyles.Form open={modalOpen}>
        <ContactStyles.TextField>
          <ContactStyles.TextFieldLabel>Enter your name</ContactStyles.TextFieldLabel>
          <ContactStyles.TextFieldInput
            type="text"
            placeholder="What should I call you?"
            required
          />
        </ContactStyles.TextField>

        <ContactStyles.TextField>
          <ContactStyles.TextFieldLabel>Enter your email</ContactStyles.TextFieldLabel>
          <ContactStyles.TextFieldInput
            type="text"
            placeholder="What's your email? So I can reply to you."
            required
          />
        </ContactStyles.TextField>

        <ContactStyles.TextField>
          <ContactStyles.TextFieldLabel>Enter your message</ContactStyles.TextFieldLabel>
          <ContactStyles.TextFieldArea placeholder="What's on your mind?" required />
        </ContactStyles.TextField>

        <ContactStyles.Submit type="submit">Send message</ContactStyles.Submit>
      </ContactStyles.Form>

      <ContactStyles.Backdrop open={modalOpen} />
    </ContactStyles.Root>
  );
};

export default Contact;
