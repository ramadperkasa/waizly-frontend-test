<template>
  <div class="flex flex-col">
    <div class="mx-auto">
      {{
        searchTodo
          ? 'No Data Found for "' + searchTodo + '"'
          : "No Data Found! Please add todo"
      }}
    </div>
    <img
      src="/assets/images/no-data.svg"
      class="w-1/2 mx-auto"
      alt="No data found"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  searchTodo: string;
}>();
</script>
