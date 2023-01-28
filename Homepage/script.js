document.getElementById("register").addEventListener("click", () => {
  document.getElementById("result").innerHTML = ""; // removes the logo + text
  // Determines the different values for the users' inputs
  const inputData = {
    departure: document.getElementById("departure").value,
    arrival: document.getElementById("arrival").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    itineraryType: "best",
  };

  fetch("https://tickethack-backend-dusky.vercel.app/home/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  })
    .then((response) => response.json())
    .then((availableTrains) => {
      const { result, allTrips, error } = availableTrains;
      if (!result) {
        // Appends the error message that resulted from the route
        document.getElementById("result").innerHTML += `
        <img src="../images/train.png" />
        <h3>${error}</h3>
        `;
        return;
      }

      for (const trains of allTrips) {
        const { departureStation, arrivalStation, departureDate, departureTime, fare, id } = trains;
        document.getElementById("result").innerHTML += `
          <div class="trainList">
            <div class="trip">${departureStation} > ${arrivalStation}</div>
            <div class="departureDate">${departureDate}</div>
            <div class="departureTime">${departureTime}</div>
            <div class="price">${fare}€</div>
            <button class="book-button" id=${id}>Book</button>
          </div>
          `;
      }
      for (let i = 0; i < document.querySelectorAll(".book-button").length; i++) {
        console.log(
          'document.querySelectorAll(".book-button")',
          document.querySelectorAll(".book-button")[i]
        );
        document.querySelectorAll(".book-button")[i].addEventListener("click", function () {
          const id = this.id;
          fetch(`https://tickethack-backend-dusky.vercel.app/home/book/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          })
            .then((response) => response.json())
            .then((data) => {
              window.location.assign("../Cart/cart.html");
            })
            .catch((error) => console.log(error));
        });
      }
    });
});
