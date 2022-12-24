import React, { useEffect } from 'react';
import categories, { getMovies } from '../api';
import "./Banner.css";

function Banner() {
	const [movie, setMovie] = React.useState({});

	const fetchRandomMovie = async (_path) => {
		try {
			const netflixOriginalsCategory = categories.find(
				(category) => category.name === "netflixoriginals"
			);
			const data = await getMovies(netflixOriginalsCategory.path);
			const movies = data?.results;
			const randomIndex = Math.floor(Math.random() * data.results.lenght);
			setMovie(movies[randomIndex]);
		} catch (error) {
			console.log("Banner fetchRandomMovie error: ", error)
		}
	};

	useEffect(() => {

	}, []);

	return (
		<div>Banner</div>
	)
}

export default Banner