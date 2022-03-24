Vue.component ('product',{
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:'<div class="product">\n' +
        '\n' +
        '            <div class="product-image">\n' +
        '                <img v-bind:src="image">\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="product-info">\n' +
        '                <h1>{{ title }}</h1>\n' +
        '                <p v-if="inventory <= 1" >In Stock</p>\n' +
        '                <p v-if="" v-bind:style="{\'text-decoration\':textDecoration}">{{sale}}</p>\n' +
        '                <p v-if-else="inventory <= 10 && inventory > 0" :style=\'styleObject\'>Almost sold out!</p>\n' +
        '            <p v-else>Out of Stock</p>\n' +
        '               <p>Shipping : {{ shipping }}</p>>' +
        '\n' +
        '            <ul>\n' +
        '                <li v-for="detail in details">{{detail}}</li>\n' +
        '            </ul>\n' +
        '\n' +
        '            <div v-for="(variant, index) in variants"\n' +
        '            :key="variant.variantId"\n' +
        '            class="color-box"\n' +
        '            :style="{backgroundColor: variant.variantColor}"\n' +
        '            @mouseover="updateProduct(index)">\n' +
        '\n' +
        '        </div>\n' +
        '\n' +
        '<button v-on:click="addToCart" :disabled="!inStock"\n' +
        ':class="{ disabledButton : !inStock }">Add to Cart</button>\n' +
        '<button v-on:click="removeToCart">Remove to Cart</button>\n' +
        '\n' +
        '<div class="cart">\n' +
        '    <p>Cart({{cart}})</p>\n' +
        '</div>\n' +
        '\n' +
        '</div>\n' +
        '\n' +
        '</div>'
       ,
data() {
    return {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        },
        product: 'Apple',
        brand: 'Fresh',
        selectedVariant: 0,
        inventory: 8,
        onSale: false,
        textDecoration: 'underline',

        details: ["80% cotton", "20% polyster", "Gender neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'assets/vmApple-green.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "red",
                variantImage: 'assets/vmApple-red.jpg',
                variantQuantity: 0
            }
        ],
        cart: 0
    }
},
methods: {
    addToCart: function (){
        this.cart += 1
    },
    removeToCart: function (){
        this.cart -= 1
    },
    updateProduct: function (index){
        this.selectedVariant = index
        console.log(index)
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants [this.selectedVariant].variantImage
    },
    inStock() {
        return this.variants [this.selectedVariant].variantQuantity
    },
    sale() {
        if (this.onSale) {
            return this.brand + ' ' + this.product + ' are on sale!'
        }
        return this.brand + ' ' + this.product + ' are not on sale'
    },
    shipping() {
        if(this.premium){
            return 'FREE'
        }
            return 2.99
    }
}
})

const app = new Vue
({
    el: '#app',
    data: {
        premium: false
    }

})