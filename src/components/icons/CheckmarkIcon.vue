<template>
  <svg class="checkmark" viewBox="0 0 24 24" aria-hidden="true">
    <circle class="circle" cx="12" cy="12" r="10" fill="none" />
    <polyline class="tick" points="7,12 10,15 17,8" fill="none" />
  </svg>
</template>

<style>
@import "../../styles/motion.css";

/* Layout */
.checkmark {
  width: 24px;
  height: 24px;
  display: block;
}

/* Base appearance */
.circle,
.tick {
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

/* Start hidden */
.circle {
  opacity: 0;
  transform: scale(0.9);
  transform-origin: center;
}
.tick {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  opacity: 0;
  transform: translateY(1px);        /* ✅ Move tick 1 px downward */
  transform-origin: center;          /* Keep rotation/scale consistent */
}

/* Keyframes */
@keyframes circleIn {
  0%   { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes tickDraw {
  0%   { stroke-dashoffset: 20; opacity: 0; }
  20%  { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}

/* Triggered animation */
.buy-btn.success .checkmark .circle {
  animation: circleIn var(--motion-pattern-enter) forwards;
}
.buy-btn.success .checkmark .tick {
  animation: tickDraw var(--motion-pattern-enter) forwards;
  animation-delay: var(--motion-delay-m);
}
</style>