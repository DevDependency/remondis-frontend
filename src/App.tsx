import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./routes/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </PersistGate>
      </StoreProvider>
    </>
  );
}

export default App;
