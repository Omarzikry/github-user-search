// __tests__/fetch.test.js
import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GithubUser from "./GithubUser";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";
import MockAdapter from "axios-mock-adapter";
import axios from "../../utils/api";
import userEvent from "@testing-library/user-event";

const mock = new MockAdapter(axios);

const setup = () =>
  render(
    <ThemeProvider theme={theme}>
      <GithubUser />
    </ThemeProvider>
  );

it("renders GithubUsers components", async () => {
  const { getByText, getByPlaceholderText } = setup();

  getByText("No great discovery was ever made without a bold guess");
  getByText("Submit");
  getByPlaceholderText("Search for users");
});

// Integration test to check
it("retrive user data and display it", async () => {
  const { getByText, getByAltText, getByPlaceholderText } = setup();

  userEvent.type(getByPlaceholderText("Search for users"), "omarzikry");
  userEvent.click(getByText("Submit"));

  await waitFor(() =>
    mock.onGet("https://api.github.com/users/omarzikry").reply(200, {
      id: 11128,
      name: "Omar Zikry",
      avatar_url:
        "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
      bio: "Frontend developer",
      html_url: "https://google.com",
    })
  );
  getByText("Omar");
  getByText("Zikry");
  getByText("Frontend developer");
  getByAltText("Omar Zikry");
});
