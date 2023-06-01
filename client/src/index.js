import React from "react";
import reactDom from "react-dom/client";
import App from "./components/Pages/App/App";
import "./index.css";

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

export default root;
