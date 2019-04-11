const Header = (props) => {
    return(
        <header>
            <h1> {props.title}</h1>
            <span classname="stats"> Players :{props.totalPlayers + 10}</span>
        </header>
    );
}
const Player =(props) => {
    return(
        <div className="player">
        <span className="player-name"> {props.name} </span>
        <Counter
            score={props.score}
        />
        </div>
    );
}
const Counter =(props)=>{
    return(
      <div className="counter">
         <button className="counter-action decrement"> - </button>
         <span className="counter-score">{props.score}</span>
         <button className="counter-action increment"> + </button>
      </div>
    );
}
const App =()=>{
    return(
      <div className="scoreboard">
         <Header 
            title="scoreboard" 
            totalPlayers={1}
         />

         {/*  Player List */}
         <Player name="Moh" score={50}/>
         <Player name="Jul" score={510}/>

         <Player name="Joh" score={0}/>

         <Player name="MMegan" score={250}

         />
      </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);