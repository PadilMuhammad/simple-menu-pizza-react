import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, beff, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <div className="header footer">
      <h1 style={style}>Fast React Pizza co.</h1>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaobj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu, Please come back later :)</p>
      )}

      {/* <Pizza name="Pizza Prosciutto" photoName="pizzas/prosciutto.jpg" ingredients="Tomato, mozarella, beff, aragula, and burrata cheese" price={12} />

      <Pizza name="Pizza Funghi" photoName="pizzas/funghi.jpg" ingredients="Tomato, mozarella, mushrooms, and onion" price={18} /> */}
    </main>
  );
}

function Pizza({ pizzaobj }) {
  console.log(pizzaobj);

  // return if pizza sold out change value null(hide objek)
  // hide pizza after soldout
  // if (pizzaobj.soldOut) return null;
  // const discount = 0.15;
  // const discountedPrice = props.price - props.price * discount;
  return (
    /* Off item, if condition item sold out... */
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>

        {/* create status soldout if pizza sold.*/}
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>

        {/* <span>{discountedPrice}</span>
        <p>Discount 15%</p> */}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently Open!");
  // else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {/* This is ternary operation */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

// Extract new component from footer
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p className="status-working">
        We're open from {openHour}:00 to {closeHour}:00. Come visit our order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React V.18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
