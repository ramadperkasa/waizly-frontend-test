<template>
  <div class="col-span-2 px-3 mt-3">
    <div
      v-for="(item, index) in currentWeather?.data"
      :key="index"
      class="h-full"
    >
      <div class="flex flex-col items-center justify-between h-full">
        <div
          class="flex flex-col items-center justify-center w-full h-full gap-8"
        >
          <img
            :src="
              'https://www.weatherbit.io/static/img/icons/' +
              item.weather.icon +
              '.png'
            "
            class="w-36 h-w-36"
            alt="Weather icon"
          />

          <div class="flex flex-col items-center gap-5">
            <p class="text-5xl font-bold">{{ item.temp + "°C" }}</p>

            <p class="ml-3 text-lg text-gray-500">
              {{ item.weather.description }}
            </p>
          </div>

          <div class="w-full border-2 border-gray-500"></div>

          <p class="text-sm text-gray-500">{{ item.ob_time }}</p>

          <p class="text-sm text-gray-500">
            Last updated: {{ formattedDateTime }}
          </p>
        </div>
        <div class="py-2">
          <p class="text-lg font-bold">
            {{ item.city_name }}, {{ item.country_code }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentWeather: WeatherData | null;
}>();

const formattedDateTime = computed(() => {
  if (props.currentWeather) {
    const date = new Date(props.currentWeather.data[0].ts * 1000);
    return date.toLocaleString();
  }

  return "";
});
</script>
