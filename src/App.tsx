import GlobalStyle from "./styles/global";
import { baseTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/store";
import { router } from "./routes/Router";

function App() {
  return (
    <>
      <StoreProvider store={store}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ThemeProvider theme={baseTheme} />
      </StoreProvider>
    </>
  );
}

export default App;
