<template>
  <div>
    <div v-for="(todo, index) in getTodos" :key="index" class="todo-item row">
      <div
        class="checkbox_button offset-md-2"
        @click="todo.completed ? markAsIncomplete(index) : markAsComplete(index)"
      >
        <i :class="{completed: todo.completed}" class="fas fa-check"></i>
      </div>
      <h5 class="col-md-8 mt-3">{{ todo.text }}</h5>
      <i class="fas fa-times col-md-2 delete" @click="deleteTodo(index)"></i>
    </div>
    <todos-footer></todos-footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import todosFooter from "./TodosFooter.vue";
export default {
  props: ["todos"],
  computed: {
    ...mapGetters(["getTodos"])
  },
  methods: {
    markAsComplete(index) {
      this.$store.commit("markAsComplete", index);
    },
    markAsIncomplete(index) {
      this.$store.commit("markAsIncomplete", index);
    },
    deleteTodo(index) {
      this.$store.commit("deleteTodo", index);
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

.todo-item:hover .checkbox_button i {
  cursor: pointer;
  opacity: 0.5;
  color: #36c96c;
}

i.completed {
  color: #36c96c;
}
</style>
