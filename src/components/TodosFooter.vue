<template>
  <div class="footer-wrapper" v-if="getTodosCount > 0">
    <div class="row">
      <h6 class="col-md-3 col-sm-3 col-xs-3 mt-2">{{ getTodosCount }} items left</h6>
      <ul class="col-md-6 col-sm-6 col-xs-6 mt-1">
        <li>
          <a
            href
            @click.prevent="updateFilter('all')"
            :class="{active_filter: getTodoType === 'all'}"
          >All</a>
        </li>
        <li>
          <a
            href
            @click.prevent="updateFilter('active')"
            :class="{active_filter: getTodoType === 'active'}"
          >Active</a>
        </li>
        <li>
          <a
            href
            @click.prevent="updateFilter('completed')"
            :class="{active_filter: getTodoType === 'completed'}"
          >Completed</a>
        </li>
      </ul>
    </div>
    <div class="tab tab1"></div>
    <div class="tab tab2"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTodoType", "getTodosCount"])
  },
  methods: {
    updateFilter(type) {
      this.$store.commit("updateFilter", type);
      this.active_filter = type;
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

ul {
  list-style: none;
  height: 100%;
}

ul li {
  display: inline-block;
  text-align: center;
  width: 33.33%;
  padding: 0;
  height: 100%;
  font-size: 0.7em;
}

ul li a {
  border: 1px solid transparent;
  padding: 3px;
  text-decoration: none;
  color: black;
  transition: border-color 0.3s;
}

ul li:hover a,
.active_filter {
  cursor: pointer;
  border-color: #e8d5d6;
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


