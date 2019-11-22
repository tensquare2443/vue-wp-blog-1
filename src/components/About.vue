<template>
  <div>
    <h1 class="title-txt">
      About
    </h1>
    <p class="lambda-response">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: false
    };
  }
};
</script>

<style>
.lambda-response {
  text-align: center;
  font-size: 1.5em;
}
</style>
