import { reactive } from "vue";

export const store = reactive({
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cardList: [],
    app_title: 'Yu-Gi-Oh API',
    loading: true,
})