<script setup>
import CartIcon from "./icons/CartIcon.vue";
import StyledBadge from "./StyledBadge.vue";
</script>

<template>
  <button class="icon-cart">
    <CartIcon />
    <StyledBadge class="badge" />
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