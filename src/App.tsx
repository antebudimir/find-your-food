import { ThemeProvider } from 'styled-components';
import { variables } from './styles/variables';
import { GlobalStyles } from 'styles/global';
import { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from 'react-router-dom';
import Header from 'components/Layout/Header/Header';
import SearchForm from 'components/Forms/SearchForm/SearchForm';
import Recipes from 'features/Recipes/Recipes';
import RecipeDetails from 'features/RecipeDetails/RecipeDetails';
import NotFound from 'components/Layout/NotFound/NotFound';
import Footer from 'components/Layout/Footer/Footer';
import Main from 'components/Layout/Main/Main';

function App() {
	const [searchTerm, setSearchTerm] = useState(''),
		[recipes, setRecipes] = useState([]);

	return (
		<ThemeProvider theme={variables}>
			<GlobalStyles />
			<div className="App">
				<Router>
					<Header />

					<Main>
						<Routes>
							<Route
								path="/"
								element={<SearchForm setSearchTerm={setSearchTerm} />}
							/>

							<Route path="recipes" element={<Outlet />}>
								<Route
									index
									element={
										<Recipes
											recipes={recipes}
											setRecipes={setRecipes}
											searchTerm={searchTerm}
										/>
									}
								/>
								<Route
									path="recipe/:id"
									element={<RecipeDetails recipes={recipes} />}
								/>

								<Route path="*" element={<NotFound />} />
							</Route>
						</Routes>
					</Main>

					<Footer />
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
