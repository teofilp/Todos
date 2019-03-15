<template>
  <div class="todos-wrapper">
    <div class="input-wrapper">
      <i
        :class="{i_active : getTodos.length > 0}"
        class="fas fa-chevron-down col-md-2 col-sm-2 col-xs-2"
      ></i>
      <input
        type="text"
        @keyup.enter="submit"
        placeholder="What needs to be done?"
        class="col-md-10 col-sm-10 col-xs-10"
        v-model="todo.text"
      >
    </div>
    <todos-list></todos-list>
  </div>
</template>
<script>
import TodosList from "./TodosList.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      todo: {
        text: "",
        completed: false
      }
    };
  },
  computed: {
    ...mapGetters(["getTodos"])
  },
  methods: {
    submit() {
      this.$store.commit("addTodo", this.todo);

      this.todo = {
        text: "",
        completed: false
      };
    }
  },
  components: {
    TodosList
  }
};
</script>
<style scoped>
i {
  padding: 0;
  height: 100%;
  text-align: center;
  font-size: 1.7em;
  color: #eee;
  opacity: 0;
}

.i_active {
  opacity: 1;
}
.todos-wrapper {
  background: white;
  padding: 0;
  box-shadow: 0px 5px 15px #bbb;
  margin-bottom: 200px;
}

.input-wrapper {
  width: 100%;
  height: 70px;
  padding: 0;
  border-bottom: 2px solid #eee;
}

input[type="text"] {
  border: none;
  height: 50px;
  height: 100%;
  font-size: 1.7em;
  padding: 10px 10px;
}

input:focus {
  outline: none;
}
::placeholder {
  color: #eaeaea;
  font-style: italic;
}
</style>


