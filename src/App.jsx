import { useState } from "react";
import Product from "./Product";

function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? "hide" : "show"}
      </button>
      {isShown && <Product />}
    </>
  );
}

export default App;
