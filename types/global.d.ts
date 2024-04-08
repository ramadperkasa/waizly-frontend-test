declare interface WeatherData {
  count: number;
  data: WeatherObservation[];
  minutely: Minutely[];
}

declare interface WeatherObservation {
  lat: number;
  lon: number;
  sunrise: string;
  sunset: string;
  timezone: string;
  station?: string;
  sources: string[];
  ob_time: string;
  datetime?: string;
  ts: number;
  city_name: string;
  country_code: string;
  state_code: string;
  pres: number;
  slp: number;
  wind_spd: number;
  gust: number;
  wind_dir: number;
  wind_cdir: string;
  wind_cdir_full: string;
  temp: number;
  app_temp: number;
  rh: number;
  dewpt: number;
  clouds: number;
  pod: "d" | "n";
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  vis: number;
  precip: number;
  snow?: number;
  uv: number;
  aqi: number;
  dhi: number;
  dni: number;
  ghi: number;
  solar_rad: number;
  elev_angle: number;
  h_angle?: number;
}

declare interface Minutely {
  precip: number;
  snow: number;
  temp: number;
  timestamp_local: string;
  timestamp_utc: string;
  ts: number;
}
