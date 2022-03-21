const app = new Vue
({
    el: '#app',
    data: {
        product: 'Apple',
        image: 'assets/vmApple-green.jpg',
        inventory: 8,
        onSale: true,
        details: ["80% cotton", "20% polyster", "Gender neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'assets/vmApple-green.jpg'
            },
            {
                variantId: 2235,
                variantColor: "red",
                variantImage: 'assets/vmApple-red.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function (){
            this.cart += 1
        },
        removeToCart: function (){
            this.cart -= 1
        },
        updateProduct: function (variantImage){
            this.image = variantImage
        }
    }
})