fetch("http://localhost:3000/cart/")
  .then((response) => response.json())
  .then((data) => {
    const { result, cartData } = data;
    if (result) {
      document.getElementById("selection").innerHTML = "";
      let cartTotal = 0;
      document.getElementById("selection").innerHTML += `
        <h1>My Cart</h1>
        <div id="cartContent"></div>
      `;
      for (const trains of cartData) {
        const { departure, arrival, date, price, _id } = trains;
        const departureTime = date.slice(11, 16);
        cartTotal += price;
        document.getElementById("cartContent").innerHTML += `
        <div class="cartList">
          <div class="trip">${departure} > ${arrival}</div>
          <div class="departureTime">${departureTime}</div>
          <div class="price">${price}€</div>
          <button class="xButton" id=${_id}>Delete</button>
        </div>
        `;
      }
      document.getElementById("selection").innerHTML += `
      <div id="cartFooter">
        <div class">Total: ${cartTotal}€</div>
        <button id="purchaseButton">Purchase</button>
      </div>
      `;
      document.getElementById("purchaseButton").addEventListener("click", function () {
        fetch("http://localhost:3000/cart/purchase", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then(() => alert("Trips successfully purchased !"));
        window.location.assign("../Bookings/bookings.html");
      });
      for (let i = 0; i < document.querySelectorAll(".xButton").length; i++) {
        document.querySelectorAll(".xButton")[i].addEventListener("click", function () {
          const id = this.id;
          fetch(`http://localhost:3000/cart/delete/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          })
            .then((response) => response.json())
            .then(() => alert("Trip sucessfully deleted !"))
            .then(() => window.location.reload());
            
        });
      }
    } else {
      return;
    }
  });
