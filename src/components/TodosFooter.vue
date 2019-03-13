<template>
  <div class="footer-wrapper" v-if="getTodosCount > 0">
    <div class="row">
      <h6 class="col-md-3 mt-2">{{ getTodosCount }} item left</h6>
    </div>
    <div class="tab tab1"></div>
    <div class="tab tab2"></div>
  </div>
</template>
<script>
export default {
  computed: {
    getTodosCount() {
      return this.$store.getters.getTodosCount;
    }
  }
};
</script>
<style scoped>
.row {
  margin: 0;
  height: 38px;
  z-index: 10;
  border-bottom: 1px solid #bbb;
  border-top: 1px solid #bbb;
  box-shadow: 1px 5px 15px #bbb;
}

h6 {
  font-size: 0.8em;
  text-align: center;
}

.tab {
  position: absolute;
  height: 6px;
  background: white;
  border: 1px solid #ccc;
}
.tab1 {
  width: 97%;
  bottom: -5px;
  left: 1.5%;
}
.tab2 {
  width: 95%;
  bottom: -10px;
  left: 2.5%;
}
</style>


