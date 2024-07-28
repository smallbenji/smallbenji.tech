import "./App.scss";
import { Timeline, TimelineComponent } from "./Components/Timeline/Timeline";

function App() {
	document.title = "smallbenji✨";

	return (
		<>
			<div className="Frame">
				<div className="left">
					<div className="TitleBox">
						<h1>smallbenji✨</h1>
						<h3>{"<Code is life />"}</h3>
						<p>A simple guy with a big passion for programming🚀</p>
					</div>

					<h2 className="ProjectTitle">Check out the archive</h2>
					<div className="Projects">
						<div
							className="Project"
							onClick={() => {
								document.location.href = "/archive";
							}}
						>
							<h2>Archive</h2>
						</div>
						{/* <div className="Project">
							<h2>Fynsdistrikt.dk</h2>
						</div>
						<div className="Project">
							<h2>CV</h2>
						</div>
						<div className="Project">
							<h2>Portfolio</h2>
						</div>
						<div className="Project">
							<h2>QuoteBitch</h2>
						</div> */}
					</div>
					<a href="https://www.github.com/smallbenji">
						<h2>Checkout my github</h2>
					</a>
				</div>
				<div className="right">
					<img src="./smallbenji.jpg" alt="" />
				</div>
			</div>
			<div className="Languages">
				<h2>My preferred technologies</h2>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
					alt="JavaScript"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
					alt="TypeScript"
				/>

				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
					alt="Python"
				/>

				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
					alt="C#"
				/>

				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
					alt="C++"
				/>

				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
					alt="React"
				/>

				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
					alt="Sass"
				/>

				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
					alt="Firebase"
				/>

				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
					alt="Git"
				/>

				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
					alt="MaterialUI"
				/>

				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
					alt="cloudflare"
				/>
			</div>
			<div className="MyTimeline">
				<h1 className="TimelineTitle">My Timeline</h1>
				<hr />
			</div>
			<Timeline>
				<TimelineComponent
					title="Birth"
					desc="I was born in 20. Oktober 2005"
				/>
				<TimelineComponent
					title="First computer"
					desc="I got my first computer at the age of 2, and began fixing them with the help of my dad"
				/>
				<TimelineComponent
					title="Started programming"
					desc="I started programming at the age of 10, I started programming simple Batch scripts"
				/>
				<TimelineComponent
					title="Created first prod app"
					desc="In 2023 i started my first application which is getting used today, the name of the app is fynsdistrikt.dk"
				/>
			</Timeline>
		</>
	);
}

export default App;
