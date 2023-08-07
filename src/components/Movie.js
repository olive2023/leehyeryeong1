import React from 'react'
import '../styles/Movie.css'

function Movie({genres,id,poster,summary,title,year}) {
  console.log(title);
  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title} />
      <div className='movie_data'>
        <h3 className="movie_title">{title}</h3>
        <h4 className="movie_year">{year}</h4>
        <ul className='movie_genres'>
          {genres.map((genre,index) =>(
            <li className='movie_genre' key={index}>{genre}</li>
          ))
          }
        </ul>
        <p className="movie_summary">{summary.slice(0,180)}...</p>
      </div>
    </div>
  )
}

export default Movie

//title,movie_title 에는 title. image src 에는 medium_cover_image. movie_year에는 year. movie_genres는 선생님이랑.movie_summary에는 summary