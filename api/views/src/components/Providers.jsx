import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import theme from '../theme';
import AlertProvider from './alert/AlertProvider';

const queryClient = new QueryClient();

export default function Providers({children}) {
	return (
		<CookiesProvider>
			<QueryClientProvider client={queryClient}>
				<StoreProvider store={store}>
					<BrowserRouter>
						<ThemeProvider theme={theme}>
							<AlertProvider>
								<CssBaseline />
								{children}
							</AlertProvider>
						</ThemeProvider>
					</BrowserRouter>
				</StoreProvider>
			</QueryClientProvider>
		</CookiesProvider>
	);
}
