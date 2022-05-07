export function getVehicles() {
  return fetch("https://apimocha.com/vehicles/all")
    .then(response => response.json())
    .then(data => console.log(data));
}