<template>
  <div id="app-container">
    <router-view />
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
@import "styles/common.scss";
.app-container {
  height: 100vh;
  box-sizing: border-box;
}
.drag{
    width: 50px;
    height: 50px;
    background-color: rgb(238, 238, 238);
    border-radius: 50%;
    border: 5px solid rgb(170, 170, 170);
}
</style>
