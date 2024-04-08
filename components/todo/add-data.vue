<template>
  <div class="relative">
    <div
      class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"
    >
      <svg
        class="w-4 h-4 text-gray-500 dark:text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      v-model="todoInput"
      class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-primary/40 focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary/40 dark:focus:border-primary"
      placeholder="What do you need to do"
      @keyup.enter="onSubmit()"
    />

    <button
      @click="onSubmit()"
      class="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary/80 dark:hover:bg-primary dark:focus:ring-primary/90hover:bg-primary/90"
    >
      Add
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue", "onSubmit"]);

const todoInput = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const onSubmit = () => {
  emit("onSubmit");
};
</script>
