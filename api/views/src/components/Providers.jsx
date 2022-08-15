import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";
import { CookiesProvider } from "react-cookie";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store";
import theme from "../theme";
import AlertProvider from "./alert/AlertProvider";

const queryClient = new QueryClient();

export default function Providers({ children }) {
    const _scrollbar = useRef(null);

    return (
        <CookiesProvider>
            <QueryClientProvider client={queryClient}>
                <StoreProvider store={store}>
                    <BrowserRouter>
                        <ThemeProvider theme={theme}>
                            <AlertProvider>
                                <CssBaseline />
                                <Scrollbars
                                    style={{ height: "100vh" }}
                                    autoHide
                                    ref={_scrollbar}
                                >
                                    {children}
                                </Scrollbars>
                            </AlertProvider>
                        </ThemeProvider>
                    </BrowserRouter>
                </StoreProvider>
            </QueryClientProvider>
        </CookiesProvider>
    );
}
