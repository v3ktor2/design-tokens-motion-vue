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

watch(() => props.count, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    previousCount.value = oldVal;
    isAnimating.value = false;
    
    // Force a reflow to reset animation state
    setTimeout(() => {
      isAnimating.value = true;
      currentCount.value = newVal;
    }, 10);
    
    // Reset animation state
    setTimeout(() => {
      isAnimating.value = false;
      previousCount.value = newVal;
    }, 320);
  }
});
</script>

<template>
  <div class="styled-badge">
    <div class="badge-counter">
      <span v-if="isAnimating" class="badge-text previous">
        {{ previousCount }}
      </span>
      <span class="badge-text current" :class="{ animating: isAnimating }">
        {{ currentCount }}
      </span>
    </div>
  </div>
</template>

<style scoped>
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
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.badge-text.current {
  transform: translateY(0);
  opacity: 1;
}

.badge-text.current.animating {
  animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.badge-text.previous {
  animation: slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
</style>
