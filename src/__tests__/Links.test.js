// src/__tests__/Links.test.js
import { render, screen } from "@testing-library/react";
import Links from "../components/Links";
import '@testing-library/jest-dom/extend-expect';

test("renders the h3 with the text 'Links'", () => {
  render(<Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza" />);
  const linkHeader = screen.getByText(/Links/i);
  expect(linkHeader).toBeInTheDocument();
});

test("renders GitHub and LinkedIn links correctly", () => {
  render(<Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza" />);
  const githubLink = screen.getByText(/github/i);
  const linkedinLink = screen.getByText(/linkedin/i);
  expect(githubLink).toHaveAttribute('href', 'https://github.com/liza');
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/liza');
});
