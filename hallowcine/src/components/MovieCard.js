import React from "react"
import axios from "axios"
import "./MovieCard.css"
import ReactFitText from "react-fittext"

export default class MovieCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			getMovies: {},
		}
	}

	componentDidMount = () => {
		axios
			.get("https://hackathon-wild-hackoween.herokuapp.com/movies/")
			.then(response => this.setState({getMovies: response.data}))
	}

	render() {
		return (
			<div>
				{this.state.getMovies.movies ? (
					this.state.getMovies.movies.map(movie => (
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
			</div>
		)
	}
}
