const API_KEY = "677b92ff8171c058571864a576c045fc";

const categories = [
	{
		name: "trending",
		title: "Em alta",
		path: `trending/all/week?api_key=${API_KEY}`,
		isLarge: true,
	}, {
		name: "netflixOriginals",
		title: "Originais Netlix",
		path: `discover/tv?api_key=${API_KEY}&with_networks=213`,
		isLarge: false,
	}, {
		name: "comedy",
		title: "Comédias",
		path: `discover/tv?api_key=${API_KEY}&with_genres=35`,
		isLarge: false,
	}, {
		name: "romances",
		title: "Romances",
		path: `discover/tv?api_key=${API_KEY}&with_genres=10749`,
		isLarge: false,
	}, {
		name: "documentary",
		title: "Documentário",
		path: `discover/tv?api_key=${API_KEY}&with_genres=99`,
		isLarge: false,
	},
];

export const getMovies = async (path) => {
	try {
		let url = `https://api.themoviedb.org/3/${path}`;
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		console.log("error getMovies: ", error);
	}
};

export default categories;