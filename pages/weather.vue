<template>
  <div class="flex flex-col h-[92vh] bg-gray-100">
    <div class="grid h-full grid-cols-7 gap-5 bg-white">
      <WeatherSectionWeather :current-weather="currentWeather" />
      <WeatherSectionDetail :current-weather="currentWeather" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentWeather = ref<WeatherData | null>(null);

const fetchCurrentWeather = async () => {
  const API_URL = "https://api.weatherbit.io/v2.0/current";
  const API_KEY = "9d91340bdc1b43d4b5d55c1192cd62cf";
  const COORDS = { lat: -6.9031331082278635, lon: 107.58903296461837 };

  try {
    const { data } = await useFetch(
      `${API_URL}?lat=${COORDS.lat}&lon=${COORDS.lon}&key=${API_KEY}&include=minutely`,
      {
        transform: (response: WeatherData) => response,
      }
    );

    currentWeather.value = data.value;
  } catch (error) {
    console.error(error);
  }
};

fetchCurrentWeather();
</script>
