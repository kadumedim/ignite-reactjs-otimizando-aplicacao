import { MovieCard } from "./MovieCard";
import { List, ListRowRenderer, AutoSize } from 'react-virtualized'
interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface ContentProps {
  movies: MovieProps[],
  selectedGenre: GenreResponseProps
}

export function Content({ movies, selectedGenre }: ContentProps) {

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style} >
        <MovieCard
          title={movies[index].Title}
          poster={movies[index].Poster}
          runtime={movies[index].Runtime}
          rating={movies[index].Ratings[0].Value}
        />
      </div>
    )
  }



  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">

          {/* <List

            height={800}
            rowHeight={70}
            width={1220}
            overscanRowCount={10}
            rowCount={movies.length}
            rowRenderer={rowRenderer}
          /> */}


          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}