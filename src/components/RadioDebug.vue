<template>
  <button class="radio-btn" @click="toggleClass">
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <rect
        x="0.625"
        y="0.625"
        width="22.75"
        height="22.75"
        rx="11.375"
        fill="#fff"
        stroke="#353028"
        stroke-width="1.25"
      />
      <circle
        ref="inner"
        class="inner"
        cx="12"
        cy="12"
        r="8"
        fill="#353028"
      />
    </svg>
    <span class="label">Debug radio</span>
  </button>
</template>

<script setup>
import { ref } from "vue";
const inner = ref(null);

function toggleClass() {
  // manually add/remove a class on the raw element
  if (inner.value.classList.contains("active")) {
    inner.value.classList.remove("active");
  } else {
    inner.value.classList.add("active");
  }
}
</script>

<style scoped>
@import "../styles/motion.css";

.radio-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.25rem;
}
.label { font-size: 14px; color: #353028; }

/* ---- animation ---- */
.inner {
  transform-origin: center;
  opacity: 0;
  transform: scale(0.5);
  transition:
    opacity var(--motion-dur-debug) var(--motion-ease-smooth),
    transform var(--motion-dur-debug) var(--motion-ease-smooth);
}
.inner.active {
  opacity: 1;
  transform: scale(1);
}
</style>