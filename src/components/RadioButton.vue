<script setup>
import { ref, watch, nextTick } from "vue";

const props = defineProps({
  label: String,
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const isActive = ref(props.modelValue);

// Watch for prop updates from a radio group parent
watch(
  () => props.modelValue,
  async (newVal) => {
    // tiny tick to ensure transitions are visible
    await nextTick();
    isActive.value = newVal;
  }
);

function toggle() {
  emit("update:modelValue", !props.modelValue);
}
</script>

<template>
  <button class="radio-btn" @click="toggle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      aria-hidden="true"
    >
      <!-- Outer ring -->
      <rect
        x="0.625"
        y="0.625"
        width="22.75"
        height="22.75"
        rx="11.375"
        fill="var(--UI-Background-color-background, #FFF)"
        stroke="var(--Colors-Sand-900, #353028)"
        stroke-width="1.25"
      />

      <!-- Inner circle (persistent element) -->
      <circle
        class="inner"
        cx="12"
        cy="12"
        r="8"
        fill="var(--Colors-Sand-900, #353028)"
        :class="{ active: isActive, inactive: !isActive }"
      />
    </svg>

    <span class="label">{{ label }}</span>
  </button>
</template>

<style scoped>
@import "../styles/motion.css";

/* ---------- Layout ---------- */
.radio-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.25rem;
  transition: transform var(--motion-pattern-scale);
}
.radio-btn:active { transform: scale(0.95); }

.label {
  font-size: 14px;
  color: var(--Colors-Sand-900, #353028);
}

/* ---------- Animation ---------- */
.inner {
  transform-origin: center;
  opacity: 0;
  transform: scale(0.5);
  transition:
    opacity var(--motion-pattern-toggle-out),
    transform var(--motion-pattern-toggle-out);
}

/* Fade/scale in */
.inner.active {
  opacity: 1;
  transform: scale(1);
  transition:
    opacity var(--motion-pattern-toggle-in),
    transform var(--motion-pattern-toggle-in);
}

/* Fade/scale out with a small material delay */
.inner.inactive {
  opacity: 0;
  transform: scale(0.5);
  transition:
    opacity var(--motion-pattern-toggle-out),
    transform var(--motion-pattern-toggle-out);
transition-delay: var(--motion-delay-s);}
</style>