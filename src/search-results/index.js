import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";

const SearchResults = ({ allHouses }) => {
  const { country } = useParams();
  const filteredHouses = allHouses.filter((h) => h.country === country);
  let myComponent = "";

  console.log("COUNTRY: ", country);

  if (country !== "NA") {
    myComponent = (
      <>
        <h4>Results for {country}:</h4>
        <table className="table table-hover">
          <tbody>
            {filteredHouses.map((h) => (
              <SearchResultsRow key={h.id} house={h} />
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return <div className="mt-2">{myComponent}</div>;
};

export default SearchResults;
