import React from "react"
import ItemsCarousel from "react-items-carousel"
import axios from "axios"
import ReactFitText from "react-fittext"
import "./Carousel.css"

export default class Carousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeItemIndex: 0,
			getMovies: "",
			chevronWidth: 40,
		}
		this.nextCard = this.nextCard.bind(this)
		this.previousCard = this.previousCard.bind(this)
		this.randomFilm = this.randomFilm.bind(this)
	}

	componentDidMount() {
		axios
			.get("https://hackathon-wild-hackoween.herokuapp.com/movies/")
			.then(response => this.setState({getMovies: response.data}))
	}

	nextCard() {
		this.setState({activeItemIndex: this.state.activeItemIndex + 1})
	}

	previousCard() {
		this.setState({activeItemIndex: this.state.activeItemIndex - 1})
	}

	randomFilm () {
		let randomized = Math.floor((Math.random() * 82) + 1)
		this.setState({activeItemIndex: randomized})
	}

	render() {
		return (
			<section>
			<button className="random-button" onClick={this.randomFilm}>Scare me</button>
			<div classname="body-carousel"style={{padding: `0 ${this.state.chevronWidth}px`}}>
				<ItemsCarousel
					infiniteLoop={true}
					activeItemIndex={this.state.activeItemIndex}
					numberOfCards={3}
					gutter={20}
					leftChevron={<button onClick={this.previousCard}>{"<"}</button>}
					rightChevron={<button onClick={this.nextCard}>{">"}</button>}
					chevronWidth={this.state.chevronWidth}
					outsideChevron={true}
				>
					{this.state.getMovies.movies ? (
						this.state.getMovies.movies.map(movie => (
							<div className="MovieCard">
								<img
									src={movie.posterUrl}
									alt={movie.title}
									className="MovieCardImage"
								/>
								<ReactFitText compressor="0.1" maxFontSize="30px">
									<h2 className="MovieCardTitle">{movie.title.replace(/_/g, " ")}</h2>
								</ReactFitText>
								<p className="MovieCardDirector">
									Réalisateur: {movie.director.replace(/_/g, " ")}
								</p>
								<p className="MovieCardYear">Année: {movie.year} </p>
							</div>
						))
					) : (
						<p>Loading...</p>
					)}
				</ItemsCarousel>
			</div>
			</section>
		)
	}
}
