import React from "react";
import ReactDOM from "react-dom";

/*
  *Header
    -Logo
    -Navlinks
 *body
 *footer


*/
const Header = () => {
  return (
    <div className="head">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9lF7BWo1N83Uuan9InJ8HLzqclm93sL9dw&usqp=CAU"></img>
      </div>
      <div className="links">
        <h3>Home</h3>
        <h3>Login</h3>
        <h3>Address</h3>
        <h3>Home</h3>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <h1>Hello from React JSX Here</h1>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
