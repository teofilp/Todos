<template>
  <div id="app" class="container">
    <app-menu></app-menu>
    <div class="wrapper">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 id="title">todos</h1>
        </div>
        <todos class="col-md-10 offset-md-1 mt-2"></todos>
      </div>
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Menu from "./components/Menu.vue";
export default {
  components: {
    Todos,
    appMenu: Menu
  }
};
</script>

<style>
.wrapper {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
}
#title {
  text-align: center;
  font-size: 5em;
  font-weight: 400;
  color: #e8d5d6;
}
</style>
