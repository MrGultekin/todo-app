import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  // state
  // getter
  // actions
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },
    deleteTodo(itemId) {
      this.todoList.filter((object) => {
        return object.id !== itemId;
      });
    },
  },
});
