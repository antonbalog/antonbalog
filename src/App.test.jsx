import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

const renderAt = (path) => {
  window.history.pushState({}, '', path);
  render(<App />);
};

describe('home page', () => {
  it('shows the hero headline at /', () => {
    renderAt('/');
    expect(
      screen.getByRole('heading', { level: 1, name: /software delivery/i })
    ).toBeInTheDocument();
  });

  it('links each service to the services page', () => {
    renderAt('/');
    expect(
      screen.getByRole('link', { name: 'Platform takeover' })
    ).toHaveAttribute('href', '/services');
  });
});

describe('navigation', () => {
  it('goes to the services page from the nav', () => {
    renderAt('/');
    fireEvent.click(screen.getByRole('link', { name: 'Services' }));
    expect(
      screen.getByRole('heading', { name: 'What I do for companies' })
    ).toBeInTheDocument();
  });

  it('goes to the case studies list from the nav', () => {
    renderAt('/');
    fireEvent.click(screen.getByRole('link', { name: 'Case studies' }));
    expect(
      screen.getByRole('heading', { name: 'Work I can talk about' })
    ).toBeInTheDocument();
  });

  it('goes to the contact page from the nav', () => {
    renderAt('/');
    fireEvent.click(screen.getByRole('link', { name: 'Contact' }));
    expect(
      screen.getByRole('heading', { name: /let's talk about your platform/i })
    ).toBeInTheDocument();
  });

  it('toggles the mobile menu button', () => {
    renderAt('/');
    const toggle = screen.getByRole('button', { name: 'Menu' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });
});

describe('pages', () => {
  it('opens a case study from its slug', () => {
    renderAt('/case-studies/platform-takeover');
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Taking over a platform after its owner left',
      })
    ).toBeInTheDocument();
  });

  it('shows the 404 page for an unknown case study', () => {
    renderAt('/case-studies/does-not-exist');
    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
  });

  it('offers a CV download on the resume page', async () => {
    renderAt('/resume');
    expect(
      await screen.findByRole('link', { name: 'Download CV (PDF)' })
    ).toHaveAttribute('href', '/Anton-Balog-CV.pdf');
  });

  it('redirects the old /work URL to services', () => {
    renderAt('/work');
    expect(
      screen.getByRole('heading', { name: 'What I do for companies' })
    ).toBeInTheDocument();
  });

  it('shows the 404 page for an unknown route', () => {
    renderAt('/this-route-does-not-exist');
    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
  });
});
