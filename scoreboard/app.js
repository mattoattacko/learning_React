const desc = 'React node rendered to the DOM';
const myTitleID = 'main-title';
const name = 'Matt';

const header = (
  <header>
    <h1 id={myTitleID}>{ name }'s First React Element</h1>
    <p>{ desc }</p>
  </header>
);

ReactDOM.app.render(
  header,
  document.getElementById('root')
);