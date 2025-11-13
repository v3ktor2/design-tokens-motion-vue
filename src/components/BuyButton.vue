<script setup>
import { ref } from "vue";
import SpinnerIcon from "./icons/SpinnerIcon.vue";
import CheckmarkIcon from "./icons/CheckmarkIcon.vue";

const state = ref("idle"); // idle → loading → success

function handleClick() {
  if (state.value !== "idle") return;
  state.value = "loading";

  // Simulate async operation
  setTimeout(() => {
    state.value = "success";

    // Return to idle after showing checkmark
    setTimeout(() => (state.value = "idle"), 2000);
  }, 2000);
}
</script>

<template>
  <button class="buy-button">
    <CartIcon class="cart-icon" />
    <span class="label">Add to Cart</span>
  </button>
</template>

<style scoped>
@import "../styles/motion.css";

/* ---------- Base Button ---------- */
.buy-btn {
  position: relative;
  height: 56px;
  min-width: 160px; /* prevent width shift */
  border: none;
  border-radius: 32px;
  background: #dc2638;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  transition: transform var(--motion-pattern-scale);
}
.buy-btn:active {
  transform: scale(var(--motion-scale-press));
}

/* Hide text when loading or success */
.buy-btn.loading .label,
.buy-btn.success .label {
  opacity: 0;
  transition: opacity var(--motion-pattern-exit);
}

/* ---------- Spinner ---------- */
.buy-btn.loading .spinner {
  display: block;
}

/* ---------- Checkmark animation trigger ---------- */
.buy-btn.success .circle {
  opacity: 1;
  transform: scale(1);
  transition-delay: var(--motion-delay-s);
}

.buy-btn.success .tick {
  opacity: 1;
  stroke-dashoffset: 0;
  transition-delay: var(--motion-delay-m);
}

.buy-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--palette-sand-50);
  background-color: var(--palette-red-500);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform var(--motion-pattern-scale);
}

.buy-button:hover {
  background-color: var(--palette-sand-900);
}

.buy-button:active {
  transform: scale(var(--motion-scale-press));
}
</style>