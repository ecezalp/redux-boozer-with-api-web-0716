import React from 'react'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
import {connect} from 'react-redux'

class CocktailsNew extends React.Component {

    constructor(props){
        super(props)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onSubmitHandler(event){        
        event.preventDefault()
        const neueCocktail = {cocktail: {name: this.refs.name.value, description: this.refs.desc.value, instructions: this.refs.inst.value}}
        this.props.actions.createCocktail(neueCocktail)
    }

    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
                <label> Name </label>
                <input type="text" ref="name" />
                <label> Description </label>
                <input type="text" ref="desc"  />
                <label> Instructions </label>
                <input type="text" ref="inst" />
                <input type="submit" value="submit" />
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
 }
 
 const componentCreator = connect(null, mapDispatchToProps)
 export default componentCreator(CocktailsNew)
