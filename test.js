// fetch(
//   "https://www.accuweather.com/vi/vn/ho-chi-minh-city/353981/hourly-weather-forecast/353981"
// )
//   .then((response) => response.text())
//   .then((data) => {
//     // Xử lý dữ liệu nhận được từ URL
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Lỗi:", error);
//   });
import axios from "axios";
export const axios = require("axios");

const url =
  "https://www.accuweather.com/vi/vn/ho-chi-minh-city/353981/hourly-weather-forecast/353981";

axios
  .get(url)
  .then((response) => {
    const html = response.data;
    // Xử lý HTML để lấy thông tin nhiệt độ và độ ẩm
    // ...
  })
  .catch((error) => {
    console.log(error);
  });
console.log(axios);
