const disc = 'I just Learned how to create a Reactnode and render it in to the dom';
const myTitleID ='main-title';
const name = 'Moh';
const header = (
    <header>
    <h1 id={myTitleID}> {name}'s First react Element </h1>
    <p> {disc}</p>
    </header>
);


ReactDOM.render(
    header,
    document.getElementById('root')
);