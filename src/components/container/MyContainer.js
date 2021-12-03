import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "./MyCard";

const MyContainer = ({ value }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getGames = async () => {
    try {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key":
              "e3e72a906bmshaf3b0535207fd50p197a61jsn1f124151d645",
          },
        }
      );

      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        /* All Games */
        const games = await response.json();
        /* Assign fetch games to data */
        setData(games);
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  console.log(value);
  console.log(data.length);
  return (
    <Container>
      {data !== [] &&
        data.map((game, indx) => {
          if (game.title.includes(value)) {
            const id = game.id;
            const title = game.title;
            const img = game.thumbnail;
            const releaseDate = game.release_date;
            const developer = game.developer;
            const description = game.short_description

            console.log(img, description);
            return (
              <MyCard
                key={indx}
                id={id}
                title={title}
                img={img}
                releaseDate={releaseDate}
                developer={developer}
                description={description}
              />
            );
          }
        })}
    </Container>
  );
};

export default MyContainer;
