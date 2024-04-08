<template>
  <div class="flex flex-col w-full h-full gap-3 px-5 py-3 bg-accent rounded-xl">
    <p class="text-sm">{{ props.title }}</p>
    <p class="text-lg">
      {{ props.label }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  label: string;
}>();
</script>
