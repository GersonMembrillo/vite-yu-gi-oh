import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
	cardList: [],
	baseURL: 'https://db.ygoprodeck.com/api/v7/',
	endpoint: {
		card: 'cardinfo.php',
		type: 'archetypes.php',
	},
	errormessage: '',
	loading: false,
	search: {
		archetype: '',
		fname: '',
		num: 50,
		offset: 0,
	},
	getCard() {
		this.errormessage = '';
		this.loading = true;
		const url = this.baseURL + this.endpoint.card;
		let options = {};
		let params = {};
		for (let key in this.search) {
			if (this.search[key] || key === 'offset') {
				params[key] = this.search[key];
			}
		}
		if (Object.keys(params).length > 0) {
			options.params = params;
		}
		axios
			.get(url, options)
			.then((res) => {
				store.cardList = res.data.data;
				console.log(res.data.data);
			})
			.catch((error) => {
				this.cardList.length = 0;
				this.errormessage = error.message;
			})
			.finally(() => {
				this.loading = false;
			});
	},
});
