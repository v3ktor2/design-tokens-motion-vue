<script setup>
import { ref } from 'vue';
import CartIcon from "./icons/CartIcon.vue";
import StyledBadge from "./StyledBadge.vue";

const cartCount = ref(1);

// Example: increment count on click to demonstrate animation
function handleClick() {
  cartCount.value++;
}
</script>

<template>
  <button class="icon-cart" @click="handleClick">
    <CartIcon />
    <StyledBadge :count="cartCount" class="badge" />
  </button>
</template>

<style scoped>
@import "../styles/motion.css";

.icon-cart {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: 
    transform var(--motion-pattern-scale),
    background-color 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.icon-cart:hover {
  background: var(--palette-sand-100);
}

.icon-cart:active {
  transform: scale(var(--motion-scale-press));
}

.badge {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>