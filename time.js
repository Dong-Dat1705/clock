function Clock() {
  // Tạo một đối tượng Date mới
  var now = new Date();

  // Lấy thứ trong tuần (0 - Chủ nhật, 1 - Thứ hai, ...)
  switch (now.getDay()) {
    case 1:
      var day = "Thứ hai";
      break;
    case 2:
      var day = "Thứ ba";
      break;
    case 3:
      var day = "Thứ tư";
      break;
    case 4:
      var day = "Thứ năm";
      break;
    case 5:
      var day = "Thứ sáu";
      break;
    case 6:
      var day = "Thứ bảy";
      break;
    default:
      var day = "Chủ nhật";
  }
  var dayOfWeek = day;

  // Lấy ngày trong tháng (1 - 31)
  var dayOfMonth = now.getDate();

  // Lấy tháng (0 - Tháng một, 1 - Tháng hai, ...)
  var month = now.getMonth() + 1;

  // Lấy năm (đầy đủ 4 chữ số)
  var year = now.getFullYear();

  // Lấy giờ (0 - 23)
  var hours = now.getHours();

  // Lấy phút (0 - 59)
  var minutes = now.getMinutes();

  // Lấy giây (0 - 59)
  var seconds = now.getSeconds();

  // In ra các giá trị đã lấy
  document.getElementById("day").innerHTML = dayOfWeek;
  document.getElementById("date").innerHTML = dayOfMonth;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}
setInterval(Clock, 900);
