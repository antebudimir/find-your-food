import { useState, useEffect } from 'react';
import axios from 'axios';

export interface RecipeProps {
	recipe: {
		label: string;
		images: ImagesProps;
		mealType: string;
		ingredientLines: string[];
		totalTime: string;
		uri: string;
	};
}

export interface ImagesProps {
	REGULAR: ImageSource;
}

export interface ImageSource {
	url: string;
}

const useAxios = (endpoint: string) => {
	const [data, setData] = useState<RecipeProps[] | []>([]),
		[error, setError] = useState(''),
		[loading, setLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();

		(async function fetchData() {
			try {
				const { data } = await axios(endpoint, {
					signal: controller.signal,
				});
				const response = data.hits as RecipeProps[];
				setData(response);
			} catch {
				setError('An error occured.');
				setData([]);
			} finally {
				setLoading(false);
			}
		})();

		const cleanUp = () => {
			controller.abort();
		};

		return cleanUp;
	}, [endpoint]);

	return { data, error, loading };
};

export default useAxios;
