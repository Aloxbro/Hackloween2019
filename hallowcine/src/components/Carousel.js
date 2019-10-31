import React, {useState, useEffect} from "react"
import ItemsCarousel from "react-items-carousel"
import axios from "axios"
import ReactFitText from "react-fittext"

export default () => {
	const [activeItemIndex, setActiveItemIndex] = useState(0)
	const chevronWidth = 40
	const [getMovies, setGetMovies] = useState([])

	useEffect(() => {
		axios
			.get("https://hackathon-wild-hackoween.herokuapp.com/movies/")
			.then(response => setGetMovies({getMovies: response.data}))
			.then(() => {
				setTimeout(() => {
					console.log(getMovies)
				}, 1000)
			})
	}, [])

	return (
		<div style={{padding: `0 ${chevronWidth}px`}}>
			<ItemsCarousel
				infiniteLoop={true}
				requestToChangeActive={setActiveItemIndex}
				activeItemIndex={activeItemIndex}
				numberOfCards={3}
				gutter={20}
				leftChevron={<button>{"<"}</button>}
				rightChevron={<button>{">"}</button>}
				chevronWidth={chevronWidth}
				outsideChevron={true}
			>
				{getMovies.movies ? (
					getMovies.movies.map(movie => (
						<div className="MovieCard">
							<img
								src={movie.posterUrl}
								alt={movie.title}
								className="MovieCardImage"
							/>
							<ReactFitText compressor="0.1" maxFontSize="30px">
								<h2 className="MovieCardTitle">{movie.title}</h2>
							</ReactFitText>
							<p className="MovieCardDirector">
								Réalisateur: {movie.director}{" "}
							</p>
							<p className="MovieCardYear">Année: {movie.year} </p>
						</div>
					))
				) : (
					<p>Loading...</p>
				)}
			</ItemsCarousel>
		</div>
	)
}
