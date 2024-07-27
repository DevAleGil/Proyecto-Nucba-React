import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextoProvaider } from "./MiContexto/Contexto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextoProvaider>
      <App />
    </ContextoProvaider>
  </React.StrictMode>
);
