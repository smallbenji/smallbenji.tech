import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import { Engine } from "tsparticles-engine";

export const ParticleComponent = () => {
	const options = useMemo(() => {
		return {
			background: {
				color: {
					value: "#242424",
				},
			},
			fpsLimit: 60,
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.4,
					width: 1,
				},
				move: {
					attract: {
						rotate: {
							x: 600,
							y: 1200,
						},
					},
					enable: true,
					outModes: {
						default: "out",
					},
					speed: 1,
				},
				number: {
					density: {
						enable: true,
						value_area: 800,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					random: true,
					value: 5,
				},
			},
			zIndex: -1,
		};
	}, []);

	const ParticleInit = useCallback((engine: Engine) => {
		loadSlim(engine);
	}, []);
	//@ts-ignore
	return (
		<div
			style={{
				position: "relative",
				zIndex: "-1",
				width: "100%",
				height: "100%",
			}}
		>
			<Particles
				id="tsparticles"
				// @ts-ignore
				options={options}
				// @ts-ignore
				init={ParticleInit}
				style={{
					width: "100%",
					height: "100%",
				}}
			/>
		</div>
	);
};
