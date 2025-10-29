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
  <button class="buy-btn" :class="state" @click="handleClick">
    <!-- Label -->
    <span class="label" v-if="state === 'idle'">Buy Now</span>

    <!-- Spinner -->
    <SpinnerIcon v-if="state === 'loading'" />

    <!-- Checkmark -->
    <CheckmarkIcon v-if="state === 'success'" />
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
  transform: scale(0.95);
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
</style>