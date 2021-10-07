import React, { Component } from 'react';

class CreateASuperhero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.name);
    }

    handleSubmit = (event) => {
        console.log(event.target.value);
        event.preventDefault();
        this.props.settingTheHeroArray(this.state); 
        console.log('Hero Name: ', this.state.heroName);
    }
    

    render() { 
        return ( 
            <React.Fragment>
                    <div className="col text-center">
                        <h1 className="display-5">Creating a hero</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label>Hero Name</label>
                            <input name='name' onChange={this.handleChange} value={this.onChange}></input>
                            <label>Ability</label>
                            <input name='Ability' onChange={this.handleChange} value={this.onChange}></input>               
                            <button type="submit">Create A Hero</button>
                        </form>
                </div>
            </React.Fragment>
        );
    }
}
 
export default CreateASuperhero;