import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';

function App() {
  let cards = data.map((card, idx)=>{
      if(idx != data.length-1){
      return (
      <>
      <Card item={card}/>
      <hr/>
      </>
      );
    }
    else
      return (<Card item={card}/>);

});
  console.log(cards);
  return (
   <>
    <Header/>
    {cards}
   </>
  );
}

export default App;
