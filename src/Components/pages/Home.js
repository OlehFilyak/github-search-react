import { Search } from "../Search/Search";
import { Card } from "../Card/Card";
export const Home = () => {
  const cards = new Array(15).fill("").map((_, i) => i);
  console.log(cards);
  return (
    <>
      <Search />
      <div className="row">
        {cards.map((card) => {
          return (
            <div className="col-sm-4 mb4" key={card}>
              <Card />
            </div>
          );
        })}
      </div>
    </>
  );
};
