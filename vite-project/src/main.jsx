import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "../src/components/normalize.css";
import CardComponent from "./components/cards.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
      <CardComponent />
    </React.StrictMode>
  </ChakraProvider>
);
