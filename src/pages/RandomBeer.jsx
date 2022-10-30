import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeer() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
       axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(resp => {
        setBeers(resp.data);
    }) 
    }, [])

    
    return (
      <div className="container">
        <div className="card col-10 m-auto">
          <img
            src={beers.image_url}
            className="card-img-top"
            alt={beers.name}
          />
          <div className="card-body">
            <h5 className="card-title">{beers.name}</h5>
            <p className="card-text">{beers.tagline}</p>
            <p className="card-text">
              <strong>First Brewed: </strong>
              {beers.first_brewed}
            </p>
            <p className="card-text">
              <strong>Attenuation: </strong>
              {beers.attenuation_level}
            </p>
            <p className="card-text">{beers.description}</p>
            <p className="card-text">
              <strong>Contributor: </strong>
              {beers.contributed_by}
            </p>
          </div>
        </div>
      </div>
    );
}

export default RandomBeer;