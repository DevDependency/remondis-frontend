import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/store";
import { router } from "./routes/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}

export default App;
