const fetchLignes = async () => {
  const linesList = document.querySelector("ul#lignes-list");
  document.querySelector("ul#arrets-list").innerHTML = "";
  document.querySelector("ul#horaires-list").innerHTML = "";

  linesList.innerHTML = "";

  const data = await fetch(
    "http://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb"
  );

  const { lines } = await data.json();

  for (const line of lines.line) {
    const listElement = document.createElement("li");
    listElement.innerHTML = `${line.shortName} - ${line.name}`;
    listElement.addEventListener("click", () => fetchArrets(line.id));
    linesList.appendChild(listElement);
  }
};

const fetchArrets = async (id) => {
  const arretsList = document.querySelector("ul#arrets-list");
  document.querySelector("ul#horaires-list").innerHTML = "";

  arretsList.innerHTML = "";

  const data = await fetch(
    `https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&lineId=${id}`
  );

  const { physicalStops } = await data.json();

  for (const physicalStop of physicalStops.physicalStop) {
    const arretElement = document.createElement("li");
    arretElement.innerHTML = `${physicalStop.name}`;
    arretElement.addEventListener("click", () =>
      fetchHoraires(physicalStop.id)
    );
    arretsList.appendChild(arretElement);
  }
};

const fetchHoraires = async (id) => {
  const horairesList = document.querySelector("ul#horaires-list");
  horairesList.innerHTML = "";

  const data = await fetch(
    `https://api.tisseo.fr/v1/stops_schedules.json?key=a3732a1074e2403ce364ad6e71eb998cb&stopPointId=${id}`
  );

  const { departures } = await data.json();

  for (const departure of departures.departure) {
    const horaireElement = document.createElement("li");
    horaireElement.innerHTML = `${departure.dateTime}`;
    horairesList.appendChild(horaireElement);
  }
};
