import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Landing from "../components/Home/Landing/Landing";

// unit test - verify no welcome message if unauthenticated
test('if not logged in, there is no welcome username message', () => {
  // landing component
  render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );

  //assert text
  expect(screen.getByRole('heading', { name: /mock stocks/i })).toHaveTextContent(
    "Mock Stocks"
  );
})
