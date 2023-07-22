const bt = document.getElementById("btn");
const inputf = document.getElementById("inputField");
const tm = document.getElementById("temp");
const minmax = document.getElementById("tempmin-max");
const cloud = document.getElementById("cld");

const loc = document.getElementById("location");
const lon = document.getElementById("lon");
const lat = document.getElementById("lat");
const press = document.getElementById("pressure");
const hum = document.getElementById("humidity");
const desci = document.getElementById("desc");
const sp = document.getElementById("speed");
const deg = document.getElementById("deg");
const sunr = document.getElementById("sunrise");
const suns = document.getElementById("sunset");
const details = document.getElementById("detail");
bt.addEventListener("click", () => {
  const h = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputf.value}&appid=3a9bcf5b3e8bba86f468b3ebe7e1722c`
  );
  const g = h.then((response) => response.json());
   inputf.value='';
  const m = g.then((d) => {
    tm.innerHTML = (d.main.temp - 273.15).toFixed(1) + "℃";
     loc.innerHTML = d.name;
    minmax.innerHTML =
      d.sys.country +
      " | Min:" +
      (d.main.temp_max - 273.15).toFixed(1) +
      " | Max:" +
      (d.main.temp_min - 273.15).toFixed(1);
    cloud.innerHTML = "Clouds: " + d.clouds.all;
    lon.innerHTML = "Longitude: " + d.coord.lon.toFixed(2) + "°";
    lat.innerHTML = "Latitude: " + d.coord.lat.toFixed(2) + "°";
    press.innerHTML = "Pressure: " + d.main.pressure + "pa";
    hum.innerHTML = "Humidity: " + d.main.humidity + "%rh";
    const kk = d.weather[0].description.toUpperCase();
    const dl = kk.slice(0, 1) + d.weather[0].description.slice(1);
    desci.innerHTML = "Condition: " + dl;
    sp.innerHTML = "Wind Speed: " + d.wind.speed + "metre/sec";
    deg.innerHTML = "Wind Degree: " + d.wind.deg + "°";
    sunr.innerHTML = "Sunrise: " + d.sys.sunrise;
    // suns.innerHTML = "Sunset: " + d.sys.sunset;
    details.innerHTML = "Detail Information Chart";
    console.log(d);
    const dba = document.getElementById("cont");
    dba.style.borderRadius = "4px";
    dba.style.boxShadow = "1px 1px 14px black";
      dba.style.backgroundImage="url('bg2.avif')"
  });
});
