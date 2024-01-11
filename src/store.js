import { reactive } from "vue";

export const store = reactive({
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cardList: [],
    archetypeList: ['Alien','Infernoble Arms','Noble Knight', 'Melodious', 'Archfiend'],
    app_title: 'Yu-Gi-Oh API',
    loading: true,
    search: '',
    archetype: '',
})