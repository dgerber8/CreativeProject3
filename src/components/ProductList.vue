<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.id}} {{product.name}}</h1>
      </div>
      <div class="image">
        <img :src=product.sprite>
      </div>
      <div class="price">
        <a @click="addToCart(product)" href="#"><button class="auto">Add to Team</button></a>
      </div>
    </div>
  </div>
  <a class="repolink" href="https://github.com/dgerber8/CreativeProject3.git">
    <p>Dalan Gerber and Will Hainsworth Github Repo</p>
    </a>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  data() {
    return {
      country: '',
    }
  },
  methods: {
    addToCart(itemName) {
      if (this.$root.$data.cart.length < 6) {
        this.$root.$data.cart.push(itemName);
        this.$root.$data.itemNumbers.push(1);
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
  background-color: #ffffff
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #e32020;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
  width: 200px;
  object-fit: cover;
}
</style>
