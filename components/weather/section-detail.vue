<template>
  <div class="col-span-5 p-5 bg-gray-100">
    <div class="mt-5">
      <span>Today</span>

      <div class="grid grid-cols-4 gap-5 mt-5">
        <WeatherCardWeather
          title="Wind"
          :label="currentWeather?.data[0].wind_spd + 'm/s'"
        />

        <WeatherCardWeather
          title="Humidity"
          :label="currentWeather?.data[0].rh + '%'"
        />

        <WeatherCardWeather
          title="Visibility"
          :label="currentWeather?.data[0].vis + 'km'"
        />

        <WeatherCardWeather
          title="UV Index"
          :label="`${currentWeather?.data[0].uv}`"
        />

        <WeatherCardWeather
          title="Sunrise"
          :label="`${currentWeather?.data[0].sunrise}`"
        />

        <WeatherCardWeather
          title="Sunset"
          :label="`${currentWeather?.data[0].sunset}`"
        />

        <WeatherCardWeather
          title="Pressure"
          :label="currentWeather?.data[0].pres + 'hPa'"
        />

        <WeatherCardWeather
          title="Cloudiness"
          :label="currentWeather?.data[0].clouds + '%'"
        />

        <WeatherCardWeather
          title="Dew Point"
          :label="currentWeather?.data[0].dewpt + '°C'"
        />

        <WeatherCardWeather
          title="Feels Like"
          :label="currentWeather?.data[0].app_temp + ' °C'"
        />

        <WeatherCardWeather
          title="Precipitation"
          :label="currentWeather?.data[0].precip + ' mm'"
        />

        <WeatherCardWeather
          title="Snow"
          :label="currentWeather?.data[0].snow + ' mm'"
        />

        <WeatherCardWeather
          title="AQI"
          :label="`${currentWeather?.data[0].aqi}`"
        />

        <WeatherCardWeather
          title="Solar Radiation"
          :label="`${currentWeather?.data[0].solar_rad}`"
        />

        <WeatherCardWeather
          title="Elevation Angle"
          :label="`${currentWeather?.data[0].elev_angle}`"
        />

        <WeatherCardWeather
          title="GHI"
          :label="`${currentWeather?.data[0].ghi}`"
        />

        <WeatherCardWeather
          title="DHI"
          :label="`${currentWeather?.data[0].dhi}`"
        />

        <WeatherCardWeather
          title="DNI"
          :label="`${currentWeather?.data[0].dni}`"
        />

        <WeatherCardWeather
          title="Wind Gust"
          :label="currentWeather?.data[0].gust + ' m/s'"
        />

        <WeatherCardWeather
          title="Wind Direction"
          :label="`${currentWeather?.data[0].wind_cdir_full}`"
        />

        <WeatherCardWeather
          title="Wind Degree"
          :label="currentWeather?.data[0].wind_dir + ' °'"
        />

        <WeatherCardWeather
          title="Pod"
          :label="`${currentWeather?.data[0].pod}`"
        />

        <WeatherCardWeather
          title="Weather Station"
          :label="`${currentWeather?.data[0].station}`"
        />

        <WeatherCardWeather
          title="State Code"
          :label="`${currentWeather?.data[0].state_code}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentWeather: WeatherData | null;
}>();
</script>
