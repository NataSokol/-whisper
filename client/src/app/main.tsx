import { createRoot } from "react-dom/client";
import App from "./App.tsx";


import "./styles/reset.css";
import "./styles/normalize.css";
import "./styles/style.css";
import "./styles/fonts.css";


createRoot(document.getElementById("root")!).render(<App />);
