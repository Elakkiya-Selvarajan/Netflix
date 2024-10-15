import { useEffect, useState } from "react";
import { getWishlist } from "../../API/Movies";
import Carousel from "../../Components/Carousel/Carousel";
import Card from "../../Components/Card/Card";

const Row = ({ title, data }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getWishlist().then((data) => setMovies(data.results));
  }, []);
  const movieId = movies?.map((item) => item.id);

  return (
    <section>
      {title && <h2 className="section-title">{title}</h2>}
      <Carousel
        data={data}
        render={(item) => <Card movie={item} favMovies={movieId} />}
      />
    </section>
  );
};

export default Row;