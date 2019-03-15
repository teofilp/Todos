<template>
  <div>
    <div v-for="(todo, index) in getTodosByType" :key="index" class="todo-item row">
      <div
        class="checkbox_button offset-md-2"
        @click="todo.completed ? markAsIncomplete(todo) : markAsComplete(todo)"
      >
        <i :class="{completed: todo.completed}" class="fas fa-check"></i>
      </div>
      <p class="col-md-8 mt-3">{{ todo.text }}</p>
      <i class="fas fa-times col-md-2 delete" @click="deleteTodo(todo)"></i>
    </div>
    <todos-footer></todos-footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import todosFooter from "./TodosFooter.vue";
export default {
  computed: {
    ...mapGetters(["getTodos", "getTodosByType"])
  },
  methods: {
    markAsComplete(todo) {
      this.$store.commit("markAsComplete", todo);
    },
    markAsIncomplete(todo) {
      this.$store.commit("markAsIncomplete", todo);
    },
    deleteTodo(todo) {
      this.$store.commit("deleteTodo", todo);
    }
  },
  components: {
    todosFooter
  }
};
</script>

<style scoped>
.row {
  margin: 0;
}
.todo-item {
  width: 100%;
}
.todo-item:hover {
  cursor: pointer;
}
.todo-item .checkbox_button {
  position: relative;
  height: 35px;
  width: 35px;
  margin: 12px 10px 12px 12px;
  border: 1px solid #e2e2e2;
  border-radius: 50%;
}
.todo-item p {
  width: 70%;
}
.checkbox_button:hover {
  cursor: pointer;
}
.checkbox_button i {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;

  transition: opacity 0.3s;
}
.todo-item .delete {
  font-size: 1.7em;
  margin: 15px 12px 12px 0;
  text-align: right;
  opacity: 0;
  color: #f44277;
  transition: opacity 0.2s;
}

.todo-item:hover .delete {
  opacity: 1;
  cursor: pointer;
}

.checkbox_button:hover i {
  cursor: pointer;
  opacity: 0.5;
  color: #36c96c;
}

i.completed {
  color: #36c96c;
}
</style>
