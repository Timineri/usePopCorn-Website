import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating
      defaultRating={2}
      maxRating={10}
      color="teal"
      size={40}
      className="test"
    />
    <Test />

    {/* <App /> */}
  </React.StrictMode>
);
