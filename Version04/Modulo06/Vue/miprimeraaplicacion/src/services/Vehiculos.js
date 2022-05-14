export function getVehicles() {
  return fetch("https://apimocha.com/vehicles/all").then((response) =>
    response.json()
  );
}