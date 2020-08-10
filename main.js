
Vue.component('product', {

    template: `
    <div class="product">
                <div class="product-image text-center">
                    <img id="socks" v-bind:src="image">
                </div>

                <div class="product-info text-right">
                    <h1 :class="{deactive : !onSail}">{{title}}</h1>
                    <p class="my-1 w-25 text-center"
                       :class="{active : inStock, deactive : !inStock}"
                    >In Stock</p>
                    <p class="my-1 w-25 text-center"
                       :class="{active : !inStock, deactive : inStock}"
                    >Out Of Stock</p>
                    <span :class="{deactive : !onSail}">On Sale!</span>
                    <ul>
                        <li v-for="detail in details" v-text="detail"></li>
                    </ul>

                    <!--                    part5&6-->

                    <div v-for="(variant , index) in variants"
                         :key="variant.variantId"
                         class="color-box"
                         :style="{backgroundColor:variant.variantColor}"
                         @mouseover="updateProduct(index)"
                    >
                    </div>

                    <button class="btn btn-info"
                            v-on:click="addToCart"
                            :disabled="!inStock"
                            :class="{ disabledButton : !inStock }"
                    >Add to Cart
                    </button>
   

                    <button class="btn btn-danger"
                            v-on:click="removeCart">
                        Remove from Cart
                    </button>

                    <div class="cart d-inline-block mr-2 border px-3">
                        <p>cart({{cart}})</p>
                    </div>
                </div>
            </div>
    `,

    data() {
        return {
            brand : 'vue Mastery',
            product : 'Socks',
            selectedVariant : 0,
            // onSail:true,
            onSail : 0,
            details:['80% cotton','20% polyester','Gender-neutral'],
            variants:[
                {
                    variantId: 2224,
                    variantColor: "#eee",
                    variantImage:'public/assets/image/socks_1.jpg',
                    variantQuality : 0,
                    variantNumber : 0
                },
                {
                    variantId: 2225,
                    variantColor: "grey",
                    variantImage:'public/assets/image/socks_2.jpg',
                    variantQuality: 10,
                    variantNumber: 15
                },
            ],

            cart:0,

        }
    },

    methods:{
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index;
            this.onSail = index;
        },
        removeCart() {
            this.cart -=1;
            if (this.cart < 0){
                this.cart=0
            }
        }
    },

    computed:{
        title(){
            return this.brand + '' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuality
        },
        inSail(){
            return this.variants[this.onSail].variantNumber
        }
    }


});


var app = new Vue({
    el:'#app',

});

