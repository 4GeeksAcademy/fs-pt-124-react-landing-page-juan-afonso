import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const cards = [
	{
		image: "https://storage.googleapis.com/pod_public/750/233612.jpg",
		title: "Junji Ito",
		description: "Tomie",
		web: "https://en.wikipedia.org/wiki/Junji_Ito",
	},
	{
		image: "https://birratrueno.com/wp-content/uploads/2023/10/Mieruko6.jpg",
		title: "Mieruko-chan",
		description: "Ghost",
		web: "https://en.wikipedia.org/wiki/Mieruko-chan",
	},
	{
		image: "https://static.wikia.nocookie.net/p__/images/c/c1/PochitaAnime.webp/revision/latest?cb=20250421032810&path-prefix=protagonist",
		title: "Chainsaw Man",
		description: "Always pochita",
		web: "https://en.wikipedia.org/wiki/Chainsaw_Man",
	},
	{
		image: "https://img1.hulu.com/user/v3/artwork/b4859a95-39ba-4051-a550-256c42e70a1d?base_image_bucket_name=image_manager&base_image=a6ee8b4f-be39-469d-920d-40410fc93008&size=458x687&format=webp",
		title: "My Hero Academy",
		description: "Deku",
		web: "https://en.wikipedia.org/wiki/My_Hero_Academia",
	},
	{
		image: "https://images8.alphacoders.com/669/thumb-1920-669047.png",
		title: "One punch man",
		description: "Saitama the bald man",
		web: "https://en.wikipedia.org/wiki/One-Punch_Man",
	},
];

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />

			<div className="container pb-5">
				<Jumbotron />
				<div className="row pb-5">
					{cards.map((item, index) => (
						<div className="col-sm-6 col-md-4 col-lg-3 mb-4 m-auto" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;