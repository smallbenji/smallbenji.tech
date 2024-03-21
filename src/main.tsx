import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ParticleComponent } from "./Components/Particles/Particles.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ParticleComponent />
		<App />
	</React.StrictMode>
);
