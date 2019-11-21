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
  },
  mounted() {
    console.log("fetching");
    fetch(
      "https://lgl59t5jue.execute-api.us-east-1.amazonaws.com/default/testOne"
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        console.log("fetched");
        this.msg = json;
      })
      .catch(e => {
        console.log(e);
        alert(e);
      });
  }
};
</script>

<style>
.lambda-response {
  text-align: center;
  font-size: 1.5em;
}
</style>
