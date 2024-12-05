import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import FlowPage from '../pages/FlowPage';

describe('Skitkuk', () => {
  it('should render the app', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(
      screen.getByPlaceholderText('Write your message here...')
    ).toBeInTheDocument();
  });

  it('should render page without cards', () => {
    render(
      <BrowserRouter>
        <FlowPage />
      </BrowserRouter>
    );

    expect(screen.getByText('No cards to be found :(')).toBeInTheDocument();

    screen.debug();
  });

  it("should test local storage if it's empty", () => {
    localStorage.clear();

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const testLocalStorage = localStorage.getItem('JodlPost');
    expect(testLocalStorage).toBeNull();
  });

  it('should test to send message and route to flowpage', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const textarea = screen.getAllByRole('textbox')[0];
    const input = screen.getAllByRole('textbox')[1];
    const button = screen.getByRole('button');

    fireEvent.change(textarea, { target: { value: 'SKITKUK' } });
    fireEvent.change(input, {
      target: { value: 'användare med stor skitkuk' },
    });

    fireEvent.click(button);

    render(
      <BrowserRouter>
        <FlowPage />
      </BrowserRouter>
    );

    screen.debug();
  });

  it('should check localStorage after the card we just put in', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const storedMessages = localStorage.getItem('JodlPost');
    expect(storedMessages).not.toBeNull();
  });

  it('should test if cards exists on flowpage and router back to landingpage', () => {
    render(
      <BrowserRouter>
        <FlowPage />
      </BrowserRouter>
    );

    expect(screen.getByText('SKITKUK')).toBeInTheDocument();

    expect(screen.getByAltText('route-logo'));

    const routeImg = screen.getByAltText('route-logo');
    fireEvent.click(routeImg);

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    screen.debug();
  });
});

// toBeInTheDocument()
