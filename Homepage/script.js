document.getElementById("register").addEventListener("click", () => {
  document.getElementById("result").innerHTML = ""; // removes the logo + text
  const inputData = {
    departure: document.getElementById("departure").value,
    arrival: document.getElementById("arrival").value,
    date: document.getElementById("date").value,
  };
  fetch("http://localhost:3000/home/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  })
    .then((response) => response.json())
    .then((availaibleTrains) => {
      const trainList = availaibleTrains.trainList;
      for (const trains of trainList) {
        const { departure, arrival, date, price } = trains;
        const departureTime = date.slice(11, 16);
        document.getElementById("result").innerHTML += `
        <div class="trainList">
          <div class="trip">${departure} > ${arrival}</div>
          <div class="departureTime">${departureTime}</div>
          <div class="price">${price}€</div>
          <button class="book-button">Book</button>
        </div>
        `;
        console.log(departureTime);
      }
    });
});
