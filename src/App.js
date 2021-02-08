import { BrowserRouter } from "react-router-dom";
import Routes from "./router/routes";

import "./App.css";
import "./assets/output.css";

function App() {
  return (
    <div className="antialiased min-h-screen">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
