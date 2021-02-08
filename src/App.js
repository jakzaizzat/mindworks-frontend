import { BrowserRouter } from "react-router-dom";
import Routes from "./router/routes";

import "./App.css";
import "./assets/output.css";

function App() {
  return (
    <div className="bg-blue-500">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
