const app = Vue.createApp({
    data() {
        return {
            cartCounter: 0,
            cartArray: [],
            premium: true
        }
    },
    methods: {
        add_to_cart(productName) {
            this.cartCounter++;
            this.push_to_cart(productName);
        },
        push_to_cart(productName) {
            this.cartArray.push(productName);
        },
        remove_from_cart(productName) {
            var i = this.cartArray.indexOf(productName);
            this.cartArray.splice( i, 1 );
            this.cartCounter--;
        },
        containsInCart : function(product) {
            return this.cartArray.includes(product);
        } 
    },
    computed: {
        booll() {
            return true;
        }
    }
})
