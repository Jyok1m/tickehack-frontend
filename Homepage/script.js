document.getElementById("register").addEventListener("click", () => {
  document.getElementById("result").innerHTML = ""; // removes the logo + text
  // Determines the different values for the users' inputs
  const inputData = {
    departure: document.getElementById("departure").value,
    arrival: document.getElementById("arrival").value,
    date: document.getElementById("date").value,
  };
  fetch("http://localhost:3000/home", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputData),
  })
    .then((response) => response.json())
    .then((availableTrains) => {
      console.log("availableTrains", availableTrains);
      const result = availableTrains.result;
      const trainList = availableTrains.trainList;
      const errorMessage = availableTrains.error;
      //Condition IF the result is True
      if (result) {
        for (const trains of trainList) {
          const { departure, arrival, date, price, _id } = trains;
          const departureTime = date.slice(11, 16);
          // Appends the new Divs with all the trips for the date + time
          document.getElementById("result").innerHTML += `
          <div class="trainList">
            <div class="trip">${departure} > ${arrival}</div>
            <div class="departureTime">${departureTime}</div>
            <div class="price">${price}€</div>
            <button class="book-button" id=${_id}>Book</button>
          </div>
          `;
        }
        for (
          let i = 0;
          i < document.querySelectorAll(".book-button").length;
          i++
        ) {
          console.log(
            'document.querySelectorAll(".book-button")',
            document.querySelectorAll(".book-button")[i]
          );
          document
            .querySelectorAll(".book-button")
            [i].addEventListener("click", function () {
              const id = this.id;
              fetch(`http://localhost:3000/home/book/${id}`, {
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
      } else {
        // Appends the error message that resulted from the route
        document.getElementById("result").innerHTML += `
          <img src="../images/train.png" />
          <h3>${errorMessage}</h3>
        `;
      }
    });
});
