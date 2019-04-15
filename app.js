
const Header = (props) => {
    return(
        <header>
            <h1> {props.title}</h1>
            <span className="stats"> Players :{props.totalPlayers}</span>
        </header>
    );
}
const Player =(props) => {
    return(
        <div className="player">
        <span className="player-name"> {props.name} 
        <button className="remove-player" onClick ={() => props.removePlayer(props.id)}>✖</button>
        </span>
        

        
        <Counter/>
        </div>
    );
}
class Counter extends React.Component {
    state = {
        score :0
    };

    incrementScore =() =>{
        this.setState( prevState => ({
      
                score: prevState.score +1
           
        }));
    }
    decrementScore =() =>{
        this.setState( prevState => ({
                score: prevState.score -1
        }));
    }


    render(){
        return(
            <div className="counter">
               <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
               <span className="counter-score">{this.state.score}</span>
               <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
          );

    }
  
}
class App extends React.Component{
    state ={
        players :[
            {
                name: "Mohammed",
                
                id:1
              },
              {
                name: "Reda",
                id:2
              },
              {
                name: "Wassila",
                id:3
              },
              {
                name: "Fatiha",
                id:4
              }
        ]
    }
    handelRmovePlayer =(id) => {
        this.setState(  prevState => {
            return{
                players: prevState.players.filter( p => p.id !== id)
            };
           
        });

    }
    render(){
        return(
            <div className="scoreboard">
               <Header 
                  title="scoreboard" 
                  totalPlayers={this.state.length}
               />
      
               {/*  Player List */}
               {this.state.players.map( player => 
                  <Player 
                  name={player.name} 
                  id ={player.id}
                  key ={player.id.toString()}
                  removePlayer = {this.handelRmovePlayer}

                  />
      
               )}
              
            </div>
          );
    }
   
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);