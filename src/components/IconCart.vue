<script setup>
import CartIcon from "./icons/CartIcon.vue";
</script>

<template>
  <div class="icon-cart">
    <CartIcon />
  </div>
</template>

<style scoped>
.icon-cart {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.icon-cart:hover {
  background-color: #e5e5e5;
  cursor: pointer;
}
</style>