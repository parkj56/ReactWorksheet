import React, { Component } from 'react';
import Title from './Title/title';
import ListOfNames from './ListOfNames/listOfNames';
import AlertUser from './AlertUser/alertUser';
import SuperHeroTable from './SuperHeroTable.jsx/superHeroTable';
import CreateASuperhero from './CreateASuperhero/createASuperhero';
import JokesGenerator from './JokesGenerator/jokesGenerator';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '', 
            lastName: '', 
            listOfNames: ['Bmo', 'Finn', 'Jake', 'Marceline', 'Princess Bubblegum'], 
            alertUser: this.alertingTheUser,
            superheroes: [
                {
                    superheroId: 1,
                    name: 'SpiderMan',
                    Ability: 'Webs',
                    
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    Ability: 'Flight'
                    
                },
                {
                    superheroId: 3,
                    name: 'Flash',
                    Ability: 'Speed'
                   
                }
            ],
            theJokes: []
        }
    }
    
    alertingTheUser = () => {
        alert('devCodeCamp');
    }
    

    componentDidMount = () => {
        this.setName();
        this.setJoke();
    }

    setName = () => {
        this.setState({
            firstName: 'Parker',
            lastName: 'Nieves'
        });
    }


    settingTheHeroArray = (newHero) => {
        let tempHeroArray = this.state.superheroes;
        newHero.superheroId = this.state.superheroes.length + 1;
        tempHeroArray.push(newHero);
        this.setState({
            superHeroes: tempHeroArray
        })
    }

    render = () => {
        return ( 
            <div className="container-fluid">
                <Title firstName={this.state.firstName} lastName={this.state.lastName} />
                <hr/>
                <ListOfNames names={this.state.listOfNames} />
                <hr/>
                <JokesGenerator theJokes={this.state.theJokes} />
                <hr/>
                <AlertUser onClick={this.state.alertUser} />
                <hr/>
                <SuperHeroTable heroes={this.state.superheroes}/>
                <hr/>
                <CreateASuperhero settingTheHeroArray={this.settingTheHeroArray}/>
            </div>
        );
    }
}
 
export default App;