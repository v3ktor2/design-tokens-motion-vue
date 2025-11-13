<script setup>
import { ref } from "vue";
import BuyButton from "./components/BuyButton.vue";
import RadioButton from "./components/RadioButton.vue";
import IconCart from "./components/IconCart.vue";

const selected = ref("a");
</script>

<template>
  <main class="app-container">
    <h1>Motion Tokens Demo</h1>

    <section class="component-section">
      <h2>Icon Cart</h2>
      <IconCart />
    </section>

    <section class="component-section">
      <h2>Buy Button</h2>
      <BuyButton />
    </section>

    <section class="component-section">
      <h2>Radio Buttons</h2>
      <div class="radio-group">
        <RadioButton
          label="Option A"
          :modelValue="selected === 'a'"
          @update:modelValue="selected = 'a'"
        />
        <RadioButton
          label="Option B"
          :modelValue="selected === 'b'"
          @update:modelValue="selected = 'b'"
        />
      </div>
      <p class="note">Selected: {{ selected }}</p>
    </section>
  </main>
</template>

<style>
@import "./styles/motion.css";

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  gap: 2.5rem;
  font-family: system-ui, sans-serif;
  color: var(--palette-sand-900);
  background-color: var(--palette-sand-50);
}

.component-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.radio-group {
  display: flex;
  gap: 1rem;
}

.note {
  font-size: 0.875rem;
  color: var(--palette-sand-500);
}
</style>