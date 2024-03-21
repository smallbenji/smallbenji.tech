import { JSX } from "react";
import "./Timeline.scss";

type Props = {
	children: string | JSX.Element | JSX.Element[];
};

export const Timeline = ({ children }: Props) => {
	return (
		<div className="timeline">
			{children}
			{/* Add more timeline items as needed */}
		</div>
	);
};

type TimelineComponentProps = {
	title: string;
	desc: string;
};

export const TimelineComponent = ({ title, desc }: TimelineComponentProps) => {
	return (
		<div className="timeline-item">
			<div className="timeline-content">
				<h2>{title}</h2>
				<p>{desc}</p>
			</div>
		</div>
	);
};
