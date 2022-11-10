<script setup>
import { useTodoListStore } from "@/stores/todoList";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted } = store;
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <!--      <span>{{ todo }}</span>-->
      <span
        @click.stop="toggleCompleted(todo.id)"
        :class="{ completed: todo.completed }"
        >{{ todo.item }}</span
      >
      <span @click.stop="toggleCompleted(todo.id)">&check;</span>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
