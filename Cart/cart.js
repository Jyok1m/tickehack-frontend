fetch("http://localhost:3000/cart/")
  .then((response) => response.json())
  .then((data) => {
    const {result, cartData} = data;
    if (result) {
      document.getElementById("selection").innerHTML = "";
      for (const trains of cartData) {
        const { departure, arrival, date, price, _id } = trains;
        const departureTime = date.slice(11, 16);
        document.getElementById("selection").innerHTML += `
      <div class="cartList">
        <div class="trip">${departure} > ${arrival}</div>
        <div class="departureTime">${departureTime}</div>
        <div class="price">${price}€</div>
        <button class="xButton" id=${_id}>Delete</button>
      </div>
      `;
      }
      for (let i = 0; i < document.querySelectorAll("xButton").length; i++) {
        document.querySelectorAll("xButton")[i].addEventListener("click", function () {
          const id = this.id;
          fetch(`http://localhost:3000/home/book/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }).then((response) => response.json());
        });
      }
    } else {
      return;
    }
  });
