let inputDate = document.querySelector("#inputDate");
let inputMonth = document.querySelector("#inputMonth");
let inputYear = document.querySelector("#inputYear");
let inputCalendar = document.querySelector(".btn_inputCalendar");

let months = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4",
    "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8",
    "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
];

let days = [
    "Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư",
    "Thứ năm", "Thứ sáu", "Thứ bảy"
];

let hour = new Date().getHours();

let greeting;
if (hour < 12) {
    greeting = "Chào buổi sáng!";
} else if (hour < 18) {
    greeting = "Chào buổi chiều!";
} else {
    greeting = "Chào buổi tối!";
}

document.querySelector(".greeting").innerHTML = greeting;

inputCalendar.addEventListener("click", function () {
    let date = Number(inputDate.value);
    let month = Number(inputMonth.value);
    let year = Number(inputYear.value);

    let dateNhap = new Date(year, month - 1, date);
    if (
        dateNhap.getDate() !== date ||
        dateNhap.getMonth() !== month - 1 ||
        dateNhap.getFullYear() !== year
    ) {
        document.querySelector(".message").innerHTML =
            "Ngày này không tồn tại!";
        return;
    }

    let day = dateNhap.getDay();

    document.querySelector(".year").innerHTML = year;
    document.querySelector(".month").innerHTML = months[month - 1];
    document.querySelector(".date").innerHTML = date;
    document.querySelector(".day").innerHTML = days[day];

    document.querySelector(".message").innerHTML = "";
});
