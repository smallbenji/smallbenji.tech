import "./Archive.scss";

const Archive = () => {
	document.title = "Archive";

	return (
		<div className="Archive">
			<a href="/">Go back</a>
			<div className="Box">
				<div className="left">
					<h1>Fynsdistrikt.dk</h1>
					<p>
						I've created a website for a scout camp i worked on,{" "}
						<br /> it handled all sorts of things such as
						registrations and patrol creation. <br />
						It also handled an activity system for different
						activities happening on the camp.
						<br />
						<br />
						<hr />
						<a href="https://fynsdistrikt.smallbenji.tech">
							Product
						</a>{" "}
						| <a href="https://smallbenji.tech">Link to project</a>
					</p>
				</div>
				<img src="./fynsdistrikt.png" className="screenshot" />
			</div>
			<div className="Box">
				<div className="left">
					<h1>CV website</h1>
					<p>
						When i studied at Syddansk Erhvervsskole i was tasked
						with creating a website, <br /> which would be a copy of
						my CV, the purpose of this was so i could show of my
						skills <br />
						and it could be used for job applications.
						<br />
						<br />
						<hr />
						<a href="https://cv.smallbenji.tech">Product</a> |{" "}
						<a href="https://github.com/smallbenji/cv">
							Link to project
						</a>
					</p>
				</div>
				<img src="./cv.png" className="screenshot" />
			</div>
			<div className="Box">
				<div className="left">
					<h1>GatBot</h1>
					<p>
						When i studied at Syddansk Erhvervsskole i was tasked
						with creating a website, <br /> which would be a copy of
						my CV, the purpose of this was so i could show of my
						skills <br />
						and it could be used for job applications.
						<br />
						<br />
						<hr />
						<a href="https://cv.smallbenji.tech">Product</a> |{" "}
						<a href="https://github.com/smallbenji/cv">
							Link to project
						</a>
					</p>
				</div>
				<img src="./cv.png" className="screenshot" />
			</div>
		</div>
	);
};

export default Archive;
