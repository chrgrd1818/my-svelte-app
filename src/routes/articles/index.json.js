import { fetchArticlesAll } from './_api';

export const get = async (request) => {
	
	const  response  = await fetchArticlesAll();
  
	if (response.status === 404) {
		return { body: [] };
	}

	return response;
	
}
