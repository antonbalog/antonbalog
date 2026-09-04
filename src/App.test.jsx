import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the home page at /', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(
      screen.getByText(/IT consultant/i)
    ).toBeInTheDocument();
  });

  it('navigates to the Work page via the nav link', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'WORK' }));
    expect(
      screen.getByRole('heading', { name: /devops consultant/i })
    ).toBeInTheDocument();
  });

  it('navigates to the Contact page via the nav link', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'CONTACT' }));
    expect(
      screen.getByRole('link', { name: /send anton an email/i })
    ).toBeInTheDocument();
  });

  it('shows the hamburger menu label and toggles it', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    const toggle = screen.getByRole('button', { name: /menu/i });
    expect(toggle).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  it('renders a not-found page for an unknown route', () => {
    window.history.pushState({}, '', '/this-route-does-not-exist');
    render(<App />);
    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
  });
});
