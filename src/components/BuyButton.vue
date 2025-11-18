<script setup>
import { ref } from "vue";
import SpinnerIcon from "./icons/SpinnerIcon.vue";
import CheckmarkIcon from "./icons/CheckmarkIcon.vue";
import CartIcon from "./icons/CartIcon.vue";

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
  <button class="buy-btn" :class="state" @click="handleClick">
    <span class="label">Add to Cart</span>
    <SpinnerIcon v-if="state === 'loading'" class="spinner" />
    <CheckmarkIcon v-if="state === 'success'" class="checkmark" />
  </button>
</template>

<style scoped>
@import "../styles/motion.css";

/* ---------- Base Button ---------- */
.buy-btn {
  position: relative;
  height: 56px;
  min-width: 160px;
  border: none;
  border-radius: 32px;
  background: var(--palette-red-500);
  color: var(--palette-sand-50);
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  transition: transform var(--motion-pattern-scale);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.buy-btn:hover {
  background: var(--palette-red-600);
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
.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.buy-btn.loading .spinner {
  display: block;
}

/* ---------- Checkmark ---------- */
.checkmark {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
</style>