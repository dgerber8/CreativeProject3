<template>
  <div class="about">
    <h1>My Team:</h1>
    <div v-if="cartData.length === 0">
      <p>Your team is empty!</p>
    </div>
    <div class="combinedCart">
      <div class="products">
        <div class="product" v-for="product in cartData" :key="product.id">
          <div class="info">
            <h1>{{product.id}} {{product.name}}</h1>
          </div>
          <div class="image">
            <img :src=product.sprite>
          </div>
          <div class="price">
            <a @click="removeFromCart(product)" href="#"><button class="auto">Remove from Team</button></a>
          </div>
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
  computed: {
    cartData() {
      return this.$root.$data.cart;
    },
    cartNumData() {
      return this.$root.$data.itemNumbers;
    }
  },
  methods: {
    removeFromCart(itemName) {
      const index = this.$root.$data.cart.indexOf(itemName);
      if (index > -1) {
        this.$root.$data.cart.splice(index, 1);
        this.$root.$data.itemNumbers.splice(index, 1);
      }
      for (let i = 0; i < this.$root.$data.cart.length; i++) {
        console.log (this.$root.$data.cart[i]);
      }
    }
  }
}

</script>

<style scoped>
.auto {
  margin-left: auto;
}
.combinedCart {
  display: flex;
  justify-content: flex-start;
}
.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  width: 200px;
  background: #000;
  color: white;
  border: none;
}
.product {
  margin: 35px;
  margin-top: 50px;
  width: 200px;
}
.currrCart {
  display: box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.currCart {
  width: 250px;
  display: flex;
  justify-content: flex-start;
  border: 1px solid purple;
}
.currrCartNums {
  display: box;
  align-items: flex-start;

}
.currCartNums {
  display: flex;
  justify-content: flex-start;
  border: 1px solid purple;
}
</style>
