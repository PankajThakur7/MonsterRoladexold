import React,{Component} from 'react';
import {CardList} from './Components/card-list/card-list.component'
import {SearchBox} from './Components/search-list/Search-list.component'
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      monsters:[

      ],
      searchfield:''

    };
  }
 handleChange=(e)=>{
this.setState({searchfield:e.target.value});
 }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(user=>this.setState({monsters:user}));
  }
  render() {
    const {monsters,searchfield}=this.state;
    const filteredMosters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    return (
      <div className="App">
      <h1>Monsters Roladex</h1>
      <SearchBox placeholder='Search Monsters ...' handleChange={this.handleChange}/>
        <CardList monsters={filteredMosters}></CardList>      
    </div>
    );
  }
  
}

export default App;
