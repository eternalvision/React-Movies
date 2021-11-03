import '../../App.css';

const MoviePreview = ({ poster_path, title }) => {
  return (    
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
          width="250"
        />
        <p className="title">{title}</p>
      </div>
    
  );
};

export default MoviePreview;
