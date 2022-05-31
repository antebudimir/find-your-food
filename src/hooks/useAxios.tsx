import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (endpoint: string, initialValue: []) => {
	const [data, setData] = useState(initialValue),
		[error, setError] = useState(''),
		[loading, setLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();

		(async function fetchData() {
			try {
				const { data } = await axios(endpoint, {
					signal: controller.signal,
				});
				setData(data.hits);
			} catch {
				setError('An error occured.');
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
