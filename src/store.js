import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    markAsComplete(state, index) {
      state.todos[index].completed = true;
    },
    markAsIncomplete(state, index) {
      state.todos[index].completed = false;
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    }
  },
  getters: {
    getTodos: state => {
      return state.todos;
    },
    getTodosCount: state => {
      return state.todos.length;
    }
  },
  actions: {

  }
})
