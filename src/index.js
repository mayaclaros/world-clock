function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM D, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //San Salvador
  let sanSalvadorElement = document.querySelector("#san-salvador");
  let sanSalvadorDateElement = sanSalvadorElement.querySelector(".date");
  let sanSalvadorTimeElement = sanSalvadorElement.querySelector(".time");
  let sanSalvadorTime = moment().tz("America/El_Salvador");

  sanSalvadorDateElement.innerHTML = sanSalvadorTime.format("MMMM D, YYYY");
  sanSalvadorTimeElement.innerHTML = sanSalvadorTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Lagos
  let lagosElement = document.querySelector("#lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");
  let lagosTime = moment().tz("Africa/Lagos");

  lagosDateElement.innerHTML = lagosTime.format("MMMM D, YYYY");
  lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");

  //Manila
  let manilaElement = document.querySelector("#manila");
  let manilaDateElement = manilaElement.querySelector(".date");
  let manilaTimeElement = manilaElement.querySelector(".time");
  let manilaTime = moment().tz("Asia/Manila");

  manilaDateElement.innerHTML = manilaTime.format("MMMM D, YYYY");
  manilaTimeElement.innerHTML = manilaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
          </div>

          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small>
           </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
