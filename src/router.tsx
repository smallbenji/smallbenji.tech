import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ParticleComponent } from "./Components/Particles/Particles";
import App from "./App";
import Archive from "./Archive";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<ParticleComponent />
							<App />
						</>
					}
				/>
				<Route path="/Archive" element={<Archive />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
