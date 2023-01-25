function msToTime(duration) {
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours + 1;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes;
}

fetch("https://tickethack-backend-dusky.vercel.app/bookings")
  .then((response) => response.json())
  .then((data) => {
    const { result, allBookings } = data;
    if (result) {
      const currentDate = new Date().getTime();
      document.getElementById("selection").innerHTML = "";
      document.getElementById("selection").innerHTML += `
        <h1>My Bookings</h1>
        <div id="allBookings"></div>
      `;
      for (const trains of allBookings) {
        const { departure, arrival, date, price } = trains;
        const departureDate = new Date(date).getTime();
        const timeRemaining = departureDate - currentDate;

        document.getElementById("allBookings").innerHTML += `
        <div class="booking">
          <div class="trip">${departure} > ${arrival}</div>
          <div class="departureTime">${msToTime(departureDate)}</div>
          <div class="price">${price}€</div>
          <div class="timeRemaining">Departure in ${msToTime(timeRemaining)} hours</div>
          <img src="../images/calendrier.png" height="50px" width="50px"/>
        </div>
        `;
      }
    } else {
      return;
    }
  });
