import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

export default function Card({ data }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    i <= data.vote
      ? stars.push(
          <span>
            <FontAwesomeIcon icon={faSolidStar} key={i} />
          </span>
        )
      : stars.push(
          <span>
            <FontAwesomeIcon icon={faRegularStar} key={i} />
          </span>
        );
  }

  return (
    <div className="col-md-4">
      <div>
        {
          <img
            src={`https://image.tmdb.org/t/p/w342${data.poster}`}
            alt=""
          ></img>
        }
      </div>
      <div>
        <ul>
          <li>
            <strong>Titolo: </strong>
            {data.title},<strong>Titolo originale: </strong>
            {data.original_title}, <strong>Lingua originale: </strong>
            {data.language},<strong>Voto: </strong>
            {stars}
          </li>
        </ul>
      </div>
    </div>
  );
}
