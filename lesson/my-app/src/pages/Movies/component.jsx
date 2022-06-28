import {Route, Routes} from "react-router-dom";

import Home from './Home';

const Movies = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route
        path="*"
        element={
          <main style={{padding: "1rem"}}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  )
}

export default Movies;
