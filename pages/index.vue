<template>
  <div
    class="flex flex-wrap items-center justify-center max-w-screen-xl p-4 mx-auto"
  >
    <div class="w-full max-w-2xl mx-auto">
      <TodoAddData v-model="todoInput" @onSubmit="onSubmit" />

      <div class="mt-3">
        <div class="p-4 rounded-xl bg-accent">
          <TodoSearch v-model="searchTodo" />

          <TransitionGroup name="slide-fade" tag="ul">
            <li
              v-if="filteredTodo.length > 0"
              class="flex gap-5 p-2 mt-2 mb-2 border-b-2 border-gray-700"
              v-for="(item, index) in filteredTodo"
              :key="item.id"
              :data-index="index"
            >
              <div>
                <div @click="onToggleCheck(index)" class="cursor-pointer">
                  <svg
                    class="w-6 h-6 fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    v-if="!item.isDone"
                  >
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                    />
                  </svg>

                  <svg
                    class="w-6 h-6 fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    v-if="item.isDone"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                </div>
              </div>

              <div class="flex justify-between w-full align-center">
                <div
                  v-if="!item.isEdit"
                  @click="
                    item.isEdit = !item.isEdit;
                    handleFocus('todo-' + item.id);
                  "
                  :class="{ 'line-through': item.isDone }"
                >
                  {{ item.name }}
                </div>

                <input
                  v-else
                  type="text"
                  :id="'todo-' + item.id"
                  :name="'todo-' + item.id"
                  class="block w-full p-0 text-black bg-transparent border border-transparent rounded-lg focus:ring-transparent focus:border-transparent"
                  v-model="item.name"
                  placeholder="Edit todolist"
                  @keyup.enter="item.isEdit = !item.isEdit"
                />

                <div class="flex gap-3">
                  <div
                    class="cursor-pointer"
                    @click="
                      item.isEdit = !item.isEdit;
                      handleFocus('todo-' + item.id);
                    "
                  >
                    <svg
                      v-if="!item.isEdit"
                      class="w-5 h-5 fill-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                      />
                    </svg>
                    <svg
                      v-else
                      class="w-5 h-5 fill-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                      />
                    </svg>
                  </div>

                  <div class="cursor-pointer" @click="onRemove(index)">
                    <svg
                      class="w-5 h-5 fill-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </li>

            <div v-else class="mt-5">
              <TodoDataNotFound :search-todo="searchTodo" />
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface ListTodo {
  id: number;
  name: string;
  isDone: boolean;
  isEdit: boolean;
}

const todoList = ref<ListTodo[]>([]);

const todoInput = ref<string>("");

const searchTodo = ref<string>("");

const onSubmit = () => {
  if (todoInput.value) {
    todoList.value.push({
      id: todoList.value.length + 1,
      name: todoInput.value,
      isDone: false,
      isEdit: false,
    });

    setDataToLocalStorage();

    todoInput.value = "";
  }
};

const onRemove = (index: number) => {
  todoList.value.splice(index, 1);

  setDataToLocalStorage();
};

const onToggleCheck = (index: number) => {
  todoList.value[index].isDone = !todoList.value[index].isDone;

  setDataToLocalStorage();
};

const filteredTodo = computed(() => {
  return todoList.value.filter((item) => {
    return item.name.toLowerCase().includes(searchTodo.value.toLowerCase());
  });
});

const handleFocus = (id: string) => {
  setTimeout(() => {
    const searchInput = document.getElementById(id);
    searchInput?.focus();
  }, 100);
};

const getDataFromLocalStorage = () => {
  if (process.client) {
    const data = localStorage.getItem("todoList");

    if (data) {
      todoList.value = JSON.parse(data);
    }
  }
};

const setDataToLocalStorage = () => {
  if (process.client) {
    localStorage.setItem("todoList", JSON.stringify(todoList.value));
  }
};

getDataFromLocalStorage();
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
