<template>
  <ul>
    <li>
      <i class="fas fa-save" @click="saveTodos"></i>
      <span>Save</span>
    </li>
    <li>
      <i class="fas fa-cloud" @click="loadTodos"></i>
      <span>Load</span>
    </li>
    <li>
      <i class="fas fa-trash" @click="deleteTodos"></i>
      <span>Delete</span>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["saveTodos", "loadTodos", "deleteTodos"])
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 15%;
  top: 5%;
}

li {
  position: relative;
  display: inline-block;
  font-size: 1.5em;
  margin-left: 50px;
  color: #999;
}
i {
  transition: color 0.3s;
}
li span {
  position: absolute;
  left: 50%;
  top: -100%;
  transform: translateX(-50%);
  font-size: 0.7em;
  background: #222;
  padding: 4px 10px;
  border-radius: 12px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
}

li span::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #222 transparent transparent;
}

li:hover i {
  color: #222;
  cursor: pointer;
}

li:hover span {
  opacity: 1;
}
</style>


