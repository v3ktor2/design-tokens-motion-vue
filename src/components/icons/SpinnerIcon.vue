<template>
  <svg class="spinner" viewBox="0 0 24 24" aria-hidden="true">
    <circle class="track" cx="12" cy="12" r="10" fill="none" />
    <circle class="arc" cx="12" cy="12" r="10" fill="none" />
  </svg>
</template>

<style scoped>
@import "../../styles/motion.css";

.spinner {
  width: 24px;
  height: 24px;
  display: block;
}
.spinner .track {
  stroke: rgba(255, 255, 255, 0.25);
  stroke-width: 2px;
}
.spinner .arc {
  stroke: #fff;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-dasharray: 80;
  stroke-dashoffset: 60;
  transform-origin: center;
  animation: spin var(--motion-dur-spinner) linear infinite;
}

@keyframes spin {
  from { transform: rotate(0turn); }
  to   { transform: rotate(1turn); }
}

</style>