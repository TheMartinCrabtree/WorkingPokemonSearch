import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
	state={ currentImg: this.props.pokemon.sprites.front }
  
	handleImgFlip=()=>{
		console.log("flipping image")
		const frontImg = this.props.pokemon.sprites.front
		const backImg = this.props.pokemon.sprites.back
		const updateCurrentImg =this.state.currentImg === frontImg ? backImg : frontImg
		return this.setState({
			currentImg: updateCurrentImg
		})
	}

	render() {
	

		return (
			<Card>
			<div>
				<div className="image" onClick={ this.handleImgFlip }>
				<img 
					alt="oh no!" 
					src={this.state.currentImg }  />
				</div>
				<div className="content">
				<div className="header"> { this.props.pokemon.name } </div>
				</div>
				<div className="extra content">
				<span>
					<i className="icon heartbeat red" />
					{ this.props.pokemon.stats[5].value}
				</span>
				</div>
			</div>
			</Card>
		)
	}
}

export default PokemonCard
