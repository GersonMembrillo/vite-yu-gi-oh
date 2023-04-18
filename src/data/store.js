import { reactive } from 'vue';

export const store = reactive({
	cardList: [],
	baseURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
	endpoint: '',
	loading: false,
	search: {
		archetype: '',
		fname: '',
		num: 50,
		offset: 0,
	},
});
