import { reactive } from "vue";

export const store = reactive({
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',
    apiArchetypes:'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardList: [],
    archetypeList: [],
    searchCardList: [],
    app_title: 'Yu-Gi-Oh API',
    loading: true,
    flagSearch: true,
    search: '',
    archetype: '',
})