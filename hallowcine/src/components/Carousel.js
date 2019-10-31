import React/* , {useState, useEffect} */ from "react"
import ItemsCarousel from "react-items-carousel"
import axios from "axios"
import ReactFitText from "react-fittext"

// export default () => {

export default class Carousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeItemIndex: 0,
			getMovies: "",
			chevronWidth: 40,
		}
	}
	// const [activeItemIndex, setActiveItemIndex] = useState(0)
	// const chevronWidth = 40
	// const [getMovies, setGetMovies] = useState([])

	componentDidMount() {
		axios
			.get("https://hackathon-wild-hackoween.herokuapp.com/movies/")
			.then(response => this.setState({getMovies: response.data}))
	}

	// useEffect(() => {
	// 	axios
	// 		.get("https://hackathon-wild-hackoween.herokuapp.com/movies/")
	// 		.then(response => setGetMovies({getMovies: response.data}))
	// 		)
	// }, [])

	render() {
		return (
			<div style={{padding: `0 ${this.state.chevronWidth}px`}}>
				<ItemsCarousel
					infiniteLoop={true}
					requestToChangeActive={this.state.activeItemIndex/*this.setState({activeItemIndex: 0})*/}
					activeItemIndex={this.state.activeItemIndex}
					numberOfCards={4}
					gutter={20}
					leftChevron={<button>{"<"}</button>}
					rightChevron={<button>{">"}</button>}
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
}
