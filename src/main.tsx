import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { ThemeProvider } from '@providers'
import { GlobalStyles } from '@assets/styles'
import { store } from '@store'

createRoot(document.getElementById('root')!).render(
	<>
		<Provider store={store}>
			<BrowserRouter basename="/react_rtk_homework">
				<GlobalStyles />
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</>
)
