const API_KEY = "677b92ff8171c058571864a576c045fc";
const language = "pt-BR";

const categories = [
	{
		name: "trending",
		title: "Em alta",
		path: `trending/all/week?api_key=${API_KEY}&language=${language}`,
		isLarge: true,
	}, {
		name: "netflixOriginals",
		title: "Originais Netlix",
		path: `discover/tv?api_key=${API_KEY}&with_networks=213&language=${language}`,
		isLarge: false,
	}, {
		name: "comedy",
		title: "Comédias",
		path: `discover/tv?api_key=${API_KEY}&with_genres=35&language=${language}`,
		isLarge: false,
	}, {
		name: "romances",
		title: "Romances",
		path: `discover/tv?api_key=${API_KEY}&with_genres=10749&language=${language}`,
		isLarge: false,
	}, {
		name: "documentary",
		title: "Documentário",
		path: `discover/tv?api_key=${API_KEY}&with_genres=99&language=${language}`,
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