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
      <RouterProvider router={router} />
      <StoreProvider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={baseTheme}></ThemeProvider>
      </StoreProvider>
    </>
  );
}

export default App;
