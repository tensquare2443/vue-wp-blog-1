<template>
  <div class="lds-ring-lg__container">
    <div class="lds-ring-lg">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style>
.lds-ring-lg__container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.lds-ring-lg {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
}
.lds-ring-lg div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;
  margin: 6px;
  border: 6px solid #000;
  border-radius: 50%;
  animation: lds-ring-lg 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
}
.lds-ring-lg div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring-lg div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring-lg div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring-lg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
