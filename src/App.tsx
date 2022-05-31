import { ThemeProvider } from 'styled-components';
import { variables } from './styles/variables';
import { GlobalStyles } from 'styles/global';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Layout/Header/Header';
import SearchForm from 'components/Forms/SearchForm/SearchForm';
import Recipes from 'features/Recipes/Recipes';
import Footer from 'components/Layout/Footer/Footer';
import Main from 'components/Layout/Main/Main';

function App() {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<ThemeProvider theme={variables}>
			<GlobalStyles />
			<div className="App">
				<Header />

				<Main>
					<Routes>
						<Route
							path="/"
							element={<SearchForm setSearchTerm={setSearchTerm} />}
						/>

						<Route
							path="recipes/*"
							element={<Recipes searchTerm={searchTerm} />}
						></Route>
					</Routes>
				</Main>

				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
