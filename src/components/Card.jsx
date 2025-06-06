export default function Card({ data }) {
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
            {data.vote}
          </li>
        </ul>
      </div>
    </div>
  );
}
