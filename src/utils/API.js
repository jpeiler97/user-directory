import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/?results=';

export default {
	getResults: function(query) {
		return axios.get(BASEURL + query);
	}
};
