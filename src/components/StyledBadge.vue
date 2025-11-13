<template>
  <div class="styled-badge">
    <span class="badge-text">1</span>
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
}

.badge-text {
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: white;
  line-height: 1;
}
</style>
