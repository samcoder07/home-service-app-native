import axios from 'axios'
const API_KEY = "44875271-fbd2c8f6c55164101a93aa5b4";

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formateUrl = (params) => {
	let url = apiUrl + "&per_page=25&safesearch=true&editors_choice=true"
	if (!params) return url;
	let paramKeys = Object.keys(params)
	paramKeys.map(key => {
		let value = key == 'q' ? encodeURIComponent(params[key]) : params[key]
		url += `&${key}=${value}`
	})
	// console.log('final url', url);
	return url;
}

export const apiCall = async (params) => {
	try {
		const response = await axios.get(formateUrl(params))
		const { data } = response
		return { success: true, data }
	} catch (error) {
		console.log('got error', error.message);
		return { success: false, msg: error.message }
	}
}