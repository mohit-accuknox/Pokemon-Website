import ReactDOM from "react-dom/client";
import App from "./App";
import SearchContext from "./components/SearchContext/SearchContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <SearchContext>
      <App />
    </SearchContext>
);
