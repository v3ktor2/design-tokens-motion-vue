<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  count: {
    type: Number,
    default: 1
  }
});

const currentCount = ref(props.count);
const previousCount = ref(props.count);
const isAnimating = ref(false);
const isBouncing = ref(false);

watch(() => props.count, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    previousCount.value = oldVal;
    currentCount.value = newVal;
    isAnimating.value = true;
    isBouncing.value = true;
    
    // Reset animation state after animation completes
    setTimeout(() => {
      isAnimating.value = false;
    }, 350);
    
    // Reset bounce after it completes
    setTimeout(() => {
      isBouncing.value = false;
    }, 400);
  }
});
</script>

<template>
  <div class="styled-badge" :class="{ bouncing: isBouncing }">
    <div class="badge-counter">
      <span class="badge-text previous" :class="{ animating: isAnimating }">
        {{ previousCount }}
      </span>
      <span class="badge-text current" :class="{ animating: isAnimating }">
        {{ currentCount }}
      </span>
    </div>
  </div>
</template>

<style scoped>
@import "../styles/motion.css";

.styled-badge {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--palette-red-500);
  border: 1.5px solid var(--palette-sand-50);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform var(--motion-pattern-scale);
}

.styled-badge.bouncing {
  animation: bounce 400ms var(--motion-ease-snap);
}

.badge-counter {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-text {
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: white;
  line-height: 1;
  position: absolute;
}

.badge-text.current {
  transform: translateY(0);
  opacity: 1;
  animation: none;
}

.badge-text.current.animating {
  animation: slideUp var(--motion-pattern-enter);
}

.badge-text.previous {
  opacity: 0;
  transform: translateY(-18px);
  pointer-events: none;
}

.badge-text.previous.animating {
  animation: slideOut var(--motion-pattern-exit);
}

@keyframes slideUp {
  from {
    transform: translateY(18px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-18px);
    opacity: 0;
  }
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(var(--motion-scale-bounce));
  }
  100% {
    transform: scale(1);
  }
}
</style>
