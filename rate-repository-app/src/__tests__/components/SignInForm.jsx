import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInForm from '../../components/SignIn/SignInForm';

describe('SignIn', () => {
  describe('SignInForm', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn()
      render(<SignInForm onSubmit={onSubmit} />)

      const usernameField = screen.getByPlaceholderText("Username")
      const passwordField = screen.getByPlaceholderText("Password")
      const submitButton = screen.getByText("Sign in")
      
      fireEvent.changeText(usernameField, "kalle")
      fireEvent.changeText(passwordField, "password")
      fireEvent.press(submitButton)

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1)

        expect(onSubmit.mock.calls[0][0]).toEqual({username: "kalle", password: "password"})
      });
    });
  });
});