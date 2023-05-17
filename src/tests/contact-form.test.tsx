import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContactForm from '../components/contact-form';

test('renders without crashing', () => {
  const { container } = render(
    <ThemeProvider theme={createTheme()}>
      <ContactForm />
    </ThemeProvider>
  );
  expect(container).not.toBeNull();
});

test('handles form submission correctly', async () => {
  const { getByTestId } = render(<ContactForm />);
  const nameInput = getByTestId('name').querySelector('input');
  const emailInput = getByTestId('email').querySelector('input');
  const subjectInput = getByTestId('subject').querySelector('input');
  const messageInput = getByTestId('message').querySelector('textarea');

  const name = 'John Doe';
  const email = 'john.doe@example.com';
  const subject = 'Test Subject';
  const message = 'Test Message';

  if (nameInput && emailInput && subjectInput && messageInput) {
    await fireEvent.change(nameInput, { target: { value: name } });
    await fireEvent.change(emailInput, { target: { value: email } });
    await fireEvent.change(subjectInput, { target: { value: subject } });
    await fireEvent.change(messageInput, { target: { value: message } });

    // Rest of your test
  } else {
    throw new Error('Input elements not found');
  }
});