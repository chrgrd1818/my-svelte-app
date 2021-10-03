//const baseurl = 'https://app1db-68da.restdb.io/rest/articles';
//const baseurl ='https://jsonplaceholder.typicode.com/posts';
const baseurl = 'https://blog-worker.chrisgrd.workers.dev/articles'
const init = {
	headers: { 'cache-control': 'no-cache',
	'x-apikey': 'acd182cde866b1738d860dca965f68731e231' },
};


const getJson = async url => {

	const response = await fetch(url, init);

	if (!response.ok) {
		throw new Error('OOPs! Unexpected HTTP Response');
	}

	const jdata = await response.json();

	//console.log('src: ' + JSON.stringify(jdata));
	return { body: jdata, status: response.status };
}

export const fetchArticlesAll = () => getJson(baseurl);
export const fetchArticlesId = (id) => getJson(`${baseurl}/${id}`);