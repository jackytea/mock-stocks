import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reducer } from "../reducers";
import { createStore, applyMiddleware, compose } from 'redux';
import { ThemeProvider } from "../contexts/ThemeContext/ThemeContext";
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import Markets from "../components/Markets/Markets";

// unit test - verify empty market has 0 stocks shown
test('if not logged in, login/regster button is shown on the top right', () => {
  // transaction form component
  render(
    <Provider store={createStore(reducer, compose(applyMiddleware(thunk)))}>
      <ThemeProvider>
        <BrowserRouter>
          <Markets />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

  expect(screen.getByText(/see our selection of the biggest names in the industry\. currently 0 stocks available for purchase\./i)).toHaveTextContent(
    "Currently 0 stocks available for purchase."
  );
})
