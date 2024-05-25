function updateTime() {
  // Bloemfontein
  let bloemfonteinElement = document.querySelector("#bloemfontein");
  if (bloemfonteinElement) {
    let bloemfonteinDateElement = bloemfonteinElement.querySelector(".date");
    let bloemfonteinTimeElement = bloemfonteinElement.querySelector(".time");
    let bloemfonteinTime = moment().tz("Africa/bloemfontein");
    bloemfonteinDateElement.innerHTML = bloemfonteinTime.format("MMMM Do YYYY");
    bloemfonteinTimeElement.innerHTML = bloemfonteinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Canberra
  let canberraElement = document.querySelector("#canberra");
  if (canberraElement) {
    let canberraDateElement = canberraElement.querySelector(".date");
    let canberraTimeElement = canberraElement.querySelector(".time");
    let canberraTime = moment().tz("Australia/Canberra");
    canberraDateElement.innerHTML = canberraTime.format("MMMM Do YYYY");
    canberraTimeElement.innerHTML = canberraTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Dubai
  let dubaiElement = document.querySelector("#dubai");
  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(".date");
    let dubaiTimeElement = dubaiElement.querySelector(".time");
    let dubaiTime = moment().tz("Asia/Dubai");
    dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
    dubaiTimeElement.innerHTML = dubaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
