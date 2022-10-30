import axios from "axios";
import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";

function BeersPage() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
       axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(resp => {
        setBeers(resp.data);
    }) 
    }, [])
    
    return (
      <div className="container">
        <h1>Beers list</h1>
        <div className="row justify-content-center">
          {beers.map((beer => {
            return <BeerCard beer={beer} key={beer._id} />}
          ))}
        </div>
      </div>
    );
}

export default BeersPage;