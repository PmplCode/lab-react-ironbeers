import { Link } from "react-router-dom";

function BeerCard({beer}){
    return (
      <div className="card col-3 m-auto">
        <img
          src={beer.image_url}
          className="card-img-top"
          alt={beer.name}
        />
        <div className="card-body">
          <h5 className="card-title">{beer.name}</h5>
          <p className="card-text">{beer.tagline}</p>
          <p className="card-text"><strong>Contributed by: </strong>{beer.contributed_by}</p>
          <Link to={"/beers/" + beer._id}>View details</Link>
        </div>
      </div>
    );
}

export default BeerCard;