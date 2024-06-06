import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/output.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import Background from "./components/backgorund/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Background />
    <App />
  </Provider>,
);
