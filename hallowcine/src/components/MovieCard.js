import React from "react"
import axios from "axios"

export default class MovieCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			getMovies: {},
		}
		// this.fetchingMovieListFromAPI.bind = this.fetchingMovieListFromAPI.bind(this)
	}

	fetchingMovieListFromAPI = () => {
		axios
			.get("https://hackathon-wild-hackoween.herokuapp.com/movies/")
			.then(movieList => movieList.data)
			.then(data => this.setState({getMovies: data}))
	}

	render() {
		return (
			<div>
				<button onClick={this.fetchingMovieListFromAPI}>
					Movie Button Test
				</button>
				{this.state.getMovies.movies ? (
					this.state.getMovies.movies.map(
						<div>
							<img
								src={this.state.getMovies.movies.posterUrl}
								alt={this.state.getMovies.movies.title}
							/>
							<h2>{this.state.getMovies.movies.title}</h2>
							<p>Réalisateur: {this.state.getMovies.movies.director} </p>
							<p>Année: {this.state.getMovies.movies.year} </p>
						</div>,
					)
				) : (
					<p>Loading...</p>
				)}
			</div>
		)
	}
}
