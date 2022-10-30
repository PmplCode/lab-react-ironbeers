import { Link } from 'react-router-dom';
import Beers from '../assets/beers.png'
import NewBeer from '../assets/new-beer.png'
import RandomBeer from '../assets/random-beer.png'

function HomePage() {
    return (
      <div className="container">
        <div className="card align-items-center">
          <img src={Beers} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">All Beers</h5>
            <p className="card-text">
            Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/beers" className="btn btn-primary">
              Go!
            </Link>
          </div>
        </div>
        <div className="card align-items-center">
          <img src={NewBeer} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Random Beer</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/beers/random-beer" className="btn btn-primary">
              Go!
            </Link>
          </div>
        </div>
        <div className="card align-items-center">
          <img src={RandomBeer} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">New Beer</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/new-beer" className="btn btn-primary">
              Go!
            </Link>
          </div>
        </div>
      </div>
    );
}

export default HomePage;