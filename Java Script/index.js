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

  //New York
  let new_yorkElement = document.querySelector("#new_york");
  if (new_yorkElement) {
    let new_yorkDateElement = new_yorkElement.querySelector(".date");
    let new_yorkTimeElement = new_yorkElement.querySelector(".time");
    let new_yorkTime = moment().tz("America/New York");
    new_yorkDateElement.innerHTML = new_yorkTime.format("MMMM Do YYYY");
    new_yorkTimeElement.innerHTML = new_yorkTime.format(
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
