import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    active_filter: 'all'
  },
  mutations: {
    addTodo(state, todo) {
      if (todo.text.trim().length < 5)
        return alert('Todo has to have at least 5 characters');
      state.todos.push(todo);
    },
    markAsComplete(state, todo) {
      todo.completed = true;
    },
    markAsIncomplete(state, todo) {
      todo.completed = false;
    },
    deleteTodo(state, todo) {
      let index = state.todos.findIndex(el => el.text == todo.text);
      state.todos.splice(index, 1);
    },
    updateFilter(state, type) {
      state.active_filter = type;
    }
  },
  getters: {
    getTodos: state => {
      return state.todos;
    },
    getTodosCount: state => {
      return state.todos.length;
    },
    getTodosByType(state) {
      if (state.active_filter === 'all') {
        return state.todos;
      } else if (state.active_filter === 'active') {
        return state.todos.filter(todo => todo.completed === false);
      } else if (state.active_filter === 'completed')
        return state.todos.filter(todo => todo.completed === true);
    },
    getTodoType(state) {
      return state.active_filter;
    }
  },
  actions: {
    saveTodos({ state }) {
      if (state.todos.length === 0) {
        if (confirm('Your list has no todos, are you sure you want to save it?'))
          localStorage.setItem("todos", JSON.stringify(state.todos));
      }
      else
        localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    loadTodos({ state }) {
      state.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    },
    deleteTodos({ state }) {
      state.todos = [];
    }
  }
})
