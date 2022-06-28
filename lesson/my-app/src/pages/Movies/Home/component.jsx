import {useEffect, useState} from "react";
import {connect} from 'react-redux';

import {selectPopularMovies} from '../../../store/movies/selectors';
import {setPopularMovies} from '../../../store/movies/actions';

import {generateUrl} from '../utils';

const Home = ({popularMovies, setPopularMovies}) => {
  // const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(generateUrl('/movie/popular'))
      .then(res => res.json())
      .then(data => {
        setPopularMovies(data.results);
        console.log(data, 'data')
      })
  }, [])

  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        consectetur, consequatur dolores doloribus, esse, illum minus molestias
        quaerat quas repellat suscipit tenetur veniam? Ab accusamus, aliquid
        animi aut autem culpa, deleniti deserunt distinctio dolore doloremque
        doloribus ea eum ex exercitationem id inventore iusto labore magnam
        magni mollitia natus neque nesciunt nobis non numquam odio optio quae
        quam quasi quisquam ratione saepe sed soluta ullam veritatis voluptate
        voluptatum? Alias dolore ea facilis impedit nam nesciunt, nostrum odit
        quidem tempore temporibus. Ab beatae culpa cupiditate enim error esse
        eveniet explicabo ipsam, iste iure libero, minus molestias nihil odio
        quo, sunt voluptatibus.
      </p>
      <div>search</div>
      <div>
        <h2>popular movies</h2>
        {popularMovies.length === 0 && (
          <div>Empty list</div>
        )}
        {popularMovies.map(popularMovie => (
          <div key={popularMovie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${popularMovie.backdrop_path}`} alt=""/>
            <div>{popularMovie.original_title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  popularMovies: selectPopularMovies(state)
})

const mapDispatchToProps = {
  setPopularMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
