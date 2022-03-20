/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Hero', () => {
  it('title has the correct text', () => {
    render(<App />);
    const linkElement = screen.getByRole(
      'heading',
      { level: 2, name: /Easily create or join a local nanny share with Hapu/ },
    );
    expect(linkElement).toBeInTheDocument();
  });

  it('if description has the correct text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare./);
    expect(linkElement).toBeInTheDocument();
  });
});
