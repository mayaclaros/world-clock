function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = moment().format("MMMM D, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss"
  )} <small>${losAngelesTime.format("A")}</small> `;

  let sanSalvadorElement = document.querySelector("#san-salvador");
  let sanSalvadorDateElement = sanSalvadorElement.querySelector(".date");
  let sanSalvadorTimeElement = sanSalvadorElement.querySelector(".time");
  let sanSalvadorTime = moment().tz("America/El_Salvador");
  sanSalvadorDateElement.innerHTML = moment().format("MMMM D, YYYY");
  sanSalvadorTimeElement.innerHTML = `${sanSalvadorTime.format(
    "h:mm:ss"
  )} <small>${sanSalvadorTime.format("A")}</small> `;

  let lagosElement = document.querySelector("#lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");
  let lagosTime = moment().tz("Africa/Lagos");
  lagosDateElement.innerHTML = moment().format("MMMM D, YYYY");
  lagosTimeElement.innerHTML = `${lagosTime.format(
    "h:mm:ss"
  )} <small>${lagosTime.format("A")}</small> `;

  let manilaElement = document.querySelector("#manila");
  let manilaDateElement = manilaElement.querySelector(".date");
  let manilaTimeElement = manilaElement.querySelector(".time");
  let manilaTime = moment().tz("Asia/Manila");
  manilaDateElement.innerHTML = moment().format("MMMM D, YYYY");
  manilaTimeElement.innerHTML = `${manilaTime.format(
    "h:mm:ss"
  )} <small>${manilaTime.format("A")}</small>`;
}
setInterval(updateTime, 1000);
