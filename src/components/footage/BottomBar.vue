<template>
  <div class="main" v-if="getEnabled('bottombar/enabled', true)">
    <v-row class="mx-0" style="height: 60px" no-gutter>
      <v-col class="display-time text-center" cols="1">
        <div style="height: 60px; width: 100%; font-size: 30px">
          {{ curTime }}
        </div>
      </v-col>
      <v-col cols="10" class="display-news">
        <MarqueeText
          :key="
            getAttr(
              'bottombar/news',
              'this is news marquee, it\'s long so i must write more words in this placeholder'
            )
          "
          class="mx-4"
          style="font-size: 30px"
        >
          {{
            getAttr(
              "bottombar/news",
              "this is news marquee, it's long so i must write more words in this placeholder"
            )
          }}
        </MarqueeText>
      </v-col>
      <v-col
        cols="1"
        v-if="getAttr('bottombar/weather', true)"
        class="display-tag"
      >
        <v-window
          class="mt-1"
          v-if="weather.weathercode"
          :model-value="currWeatherShow"
        >
          <v-window-item
            class="mr-4"
            v-for="n in [0, 1, 2, 3, 4, 5, 6]"
            :key="n"
          >
            <p style="font-size: 24px; white-space: nowrap; text-align: right">
              {{ n === 0 ? "今天" : `+${n}天` }}
              <v-icon size="30">{{
                "mdi-" + weatherCode(weather.weathercode[n])
              }}</v-icon>
              {{
                (
                  (weather.temperature_2m_max[n] +
                    weather.temperature_2m_min[n]) /
                  2
                ).toFixed(1)
              }}
            </p>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { stateStore } from "@/store/state";
const { getAttr, getEnabled } = stateStore();
import MarqueeText from "vue-marquee-text-component";
import { ref } from "vue";
import axios from "axios";
import moment from "moment";
import { reactive } from "vue";

let curTime = ref(null);
const refreshTime = () => {
  curTime.value = moment().format("hh:mm:ss");
};
setInterval(refreshTime, 1000);
refreshTime();

let weather = reactive({});
const updateWeather = () => {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=30.67&longitude=104.07&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore";
  axios.get(url).then((res) => {
    Object.assign(weather, res.data.daily);
  });
};
updateWeather();
let currWeatherShow = ref(0);
const weatherCode = (code) => {
  if ([0].includes(code)) return "weather-sunny";
  if ([1, 2].includes(code)) return "weather-partly-cloudy";
  if ([3].includes(code)) return "weather-cloudy";
  if ([45, 48].includes(code)) return "weather-fog";
  if ([51, 53, 55].includes(code)) return "weather-partly-rainy";
  if ([56, 57].includes(code)) return "weather-partly-rainy";
  if ([61, 63, 65].includes(code)) return "weather-rainy";
  if ([66, 67].includes(code)) return "weather-rainy";
  if ([80, 81, 82].includes(code)) return "weather-rainy";
  if ([85, 86].includes(code)) return "weather-snowy-heavy";
  return "question";
};
setInterval(() => {
  if (currWeatherShow.value != 6) currWeatherShow.value++;
  else currWeatherShow.value = 0;
}, 5000);
</script>

<style scoped>
.main {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.display-time {
  background-color: rgb(var(--v-theme-primary));
  color: white;
}

.display-news {
  background-color: white;
}

.display-tag {
  background-color: white;
}

.v-col {
  padding: 0;
}
</style>
