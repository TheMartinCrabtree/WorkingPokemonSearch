import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
	state={
		allpokemon: []
	}

	componentDidMount(){
		fetch("http://localhost:3000/pokemon")
			.then(response=>response.json())
			.then((alldata)=>{
				console.log("populating allpokemon")
				this.setState({ allpokemon: alldata })
			})
	}

	render() {
		return (
			<div>
			<h1>Pokemon Searcher</h1>
			<br />
			<Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
			<br />
			<PokemonCollection 
				key="pokemoncollection" 
				allpokemon={this.state.allpokemon} />
			<br />
			<PokemonForm />
			</div>
		)
	}
}

export default PokemonPage
