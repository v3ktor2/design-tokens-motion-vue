<script setup>
import { ref } from 'vue';

const isFavourite = ref(false);
const isPressed = ref(false);
const isAnimating = ref(false);

function toggleFavourite() {
  if (!isFavourite.value) {
    // Turning ON - animate scale up
    isAnimating.value = true;
    isFavourite.value = true;
    
    setTimeout(() => {
      isAnimating.value = false;
    }, 450);
  } else {
    // Turning OFF - instant toggle
    isFavourite.value = false;
  }
}

function handleTouchStart() {
  isPressed.value = true;
}

function handleTouchEnd() {
  isPressed.value = false;
}
</script>

<template>
  <button 
    class="favourites-btn" 
    :class="{ pressed: isPressed, active: isFavourite, animating: isAnimating }"
    @click="toggleFavourite"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchEnd"
    :aria-label="isFavourite ? 'Remove from favourites' : 'Add to favourites'"
    :aria-pressed="isFavourite"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        class="heart-fill"
        d="M18.475 2.77854C15.22 1.67309 12.9333 4.13445 12 5.335C11.0433 4.13445 8.78 1.67309 5.52501 2.77854C1.50001 4.14551 1.50001 8.16319 1.50001 8.63866C1.50001 9.06657 1.45335 12.906 6.93667 18.0766C9.50334 20.4659 11.7317 21.4168 11.825 21.4525C11.895 21.4881 11.9767 21.5 12 21.5C12.0233 21.5 12.105 21.4881 12.175 21.4525C12.2683 21.4168 14.485 20.4659 17.0633 18.0766C22.5467 12.906 22.5 9.05469 22.5 8.62677C22.5 8.1513 22.5 4.13362 18.475 2.76666V2.77854Z" 
        :fill="isFavourite ? 'var(--palette-red-500)' : 'rgba(255, 255, 255, 0.8)'"
      />
      <path 
        class="heart-stroke"
        d="M14.4912 3.40918C15.5374 2.81004 16.8481 2.49042 18.3945 3.01562L18.7246 3.12793V3.125C22.2432 4.53305 22.25 8.1616 22.25 8.62695C22.25 8.82094 22.2642 9.85642 21.6064 11.4795C20.9476 13.1054 19.6099 15.3313 16.8916 17.8945C15.6171 19.0753 14.4332 19.9004 13.5576 20.4336C13.1197 20.7003 12.7585 20.8938 12.5029 21.0225C12.3752 21.0868 12.2738 21.1352 12.2021 21.168C12.1666 21.1842 12.1384 21.1963 12.1182 21.2051C12.108 21.2095 12.0995 21.2134 12.0938 21.2158C12.0892 21.2177 12.0867 21.2184 12.0859 21.2188L12.0732 21.2236L12.0615 21.2295C12.0499 21.2354 12.0326 21.2417 12.0137 21.2461C12.0086 21.2473 12.0038 21.2474 12 21.248C11.9962 21.2474 11.9914 21.2473 11.9863 21.2461C11.9674 21.2417 11.9501 21.2354 11.9385 21.2295L11.9268 21.2236L11.9141 21.2188C11.9133 21.2185 11.9108 21.2177 11.9062 21.2158C11.9004 21.2134 11.892 21.2095 11.8818 21.2051C11.8615 21.1963 11.8328 21.1843 11.7969 21.168C11.7249 21.1352 11.6233 21.0867 11.4951 21.0225C11.2387 20.8938 10.877 20.7002 10.4385 20.4336C9.67078 19.9669 8.66715 19.277 7.57812 18.3203L7.10742 17.8936C4.38979 15.3306 3.05234 13.1081 2.39355 11.4854C1.73569 9.86481 1.75 8.83216 1.75 8.63867C1.75 8.15921 1.75738 4.32254 5.60547 3.01562C7.15188 2.49043 8.45688 2.81019 9.5 3.40918C10.5508 4.01263 11.3324 4.8985 11.8047 5.49121L12.002 5.73926L12.1973 5.48828C12.6562 4.89791 13.4377 4.01255 14.4912 3.40918Z" 
        :stroke="isFavourite ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'" 
        stroke-width="1.2"
      />
    </svg>
  </button>
</template>

<style scoped>
@import "../styles/motion.css";

.favourites-btn {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: 
    transform var(--motion-pattern-scale),
    background-color 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.favourites-btn:hover {
  background: rgba(0, 0, 0, 0.08);
}

/* Remove hover effect on touch devices */
@media (hover: none) {
  .favourites-btn:hover {
    background: transparent;
  }
}

.favourites-btn:active,
.favourites-btn.pressed {
  transform: scale(var(--motion-scale-press));
}

.heart-fill,
.heart-stroke {
  transform-origin: center;
  transition: 
    fill var(--motion-pattern-toggle-in),
    stroke var(--motion-pattern-toggle-in),
    transform var(--motion-pattern-toggle-in);
}

/* Scale up animation when becoming favourite */
.favourites-btn.animating .heart-fill,
.favourites-btn.animating .heart-stroke {
  animation: scaleUp 450ms var(--motion-ease-snap);
}

@keyframes scaleUp {
  0% {
    transform: scale(0);
  }
  35% {
    transform: scale(1.22);
  }
  50% {
    transform: scale(0.9);
  }
  65% {
    transform: scale(1.18);
  }
  80% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>
