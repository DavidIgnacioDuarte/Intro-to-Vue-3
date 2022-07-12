const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: [{t:'S', cm:'35'}, {t:'M', cm:'40'}, {t:'L', cm:'45'}, {t:'XL', cm:'50'} ]
        }
    }
})
