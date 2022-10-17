import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './Data';

function App() {

  const cards = Data.map(data => {
    return ( 
      <Card
        key={data.id}
        img={data.coverImg}
        title={data.title}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        price={data.price}
        openSpots={data.openSpots}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
