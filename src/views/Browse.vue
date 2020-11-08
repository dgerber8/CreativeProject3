<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Kanto')" href="#" class="pure-menu-link">Kanto</a></li>
      <li class="pure-menu-item"><a @click="select('Johto')" href="#" class="pure-menu-link">Johto</a></li>
      <li class="pure-menu-item"><a @click="select('Hoenn')" href="#" class="pure-menu-link">Hoenn</a></li>
      <li class="pure-menu-item"><a @click="select('Sinnoh')" href="#" class="pure-menu-link">Sinnoh</a></li>
      <li class="pure-menu-item"><a @click="select('Unova')" href="#" class="pure-menu-link">Unova</a></li>
      <li class="pure-menu-item"><a @click="select('Kalos')" href="#" class="pure-menu-link">Kalos</a></li>
      <li class="pure-menu-item"><a @click="select('Alola')" href="#" class="pure-menu-link">Alola</a></li>
      <li class="pure-menu-item"><a @click="select('Galar')" href="#" class="pure-menu-link">Galar</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.country === this.country);
    }
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>
