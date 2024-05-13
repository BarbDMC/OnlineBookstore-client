/**
 * @jest-environment jsdom
 */

import App from '../App';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';

const response = {
  data: {
    user: {
      name: 'John',
      surname: 'Doe',
    },
    token: 'token123'
  }
};

jest.mock('../src/hooks/useLogin', () => ({
  useLogin: () => ({
    login: jest.fn().mockResolvedValue(response),
    isLoading: false,
    error: null,
  }),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));


describe('App', () => {
  describe('When Login', () => {
    beforeEach(() => {
      render(<App />);
      mockNavigate.mockClear();
    });

    test('fail if email or password field is missing in form submission', async () => {
      await act(async () => {
        userEvent.click(screen.getByRole('link', { name: /Login/i }));
      });
      
      expect(window.location.pathname).toBe('/login');
      screen.getByText('Sign in to your account');
  
      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /Sign in/i }));
      });

      expect(mockNavigate).not.toHaveBeenCalled();
    });

  
    test('going to login page and login successfully', async () => {
      expect(window.location.pathname).toBe('/login');
      screen.getByText('Sign in to your account');
  
      await act(async () => {
        userEvent.type(screen.getByTestId('email'), 'test@email.com');
        userEvent.type(screen.getByTestId('password'), '12345678');
        fireEvent.click(screen.getByRole('button', { name: /Sign in/i }));
      });


      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/notes', { state: response });
      });
    });
  });
});