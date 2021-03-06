import React, { useEffect, useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import ViewModel from "../../models/ViewModel";
import Loader from "../Loader";
import useDebounce from "../UseDebounce";
import { Container, Searchbar } from "./styles";

function Search({ loading = true, onChange = () => {}, initilize = {} }) {
  const [query, setQuery] = useState(initilize.query || "");
  const [filter, setFilter] = useState(initilize.query || ViewModel.COMICS);

  const filters = { COMICS: "Comics", SUPER_HEROS: "Super Heros" };
  const placeholders = { COMICS: "Type a HQ's title or id...", SUPER_HEROS: "Type Super Hero name or id..." };

  let timer;

  useEffect(() => {
    setQuery(initilize.query || "");
    setFilter(initilize.filter || ViewModel.COMICS);
    return clearTimeout(timer);
    // eslint-disable-next-line
  }, [initilize]);

  const debouncedSearchTerm = useDebounce(query, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Fire off our API call
      onChange({
        query: debouncedSearchTerm,
        filter,
        queryIsId: verifyQueryIsId(debouncedSearchTerm),
      });
    }
    // eslint-disable-next-line
  }, [debouncedSearchTerm, filter]);

  const handleTextChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const verifyQueryIsId = (query) => {
    try {
      return !isNaN(Number(parseInt(query)));
    } catch (e) {
      return false;
    }
  };

  return (
    <Container>
      <Searchbar onSubmit={(e)=>e.preventDefault()}>
        <label className="dropdown">
          <div className="dd-button">{filters[filter]} </div> <div className="dd-button-after"> <FiChevronDown className="icon" size={24} color={"#dd4250"} /> </div>
          <input type="checkbox" className="dd-input" id="test" />
          <ul className="dd-menu">
            <li onClick={() => setFilter("COMICS")}>
              <em>{filters.COMICS}</em>
            </li>
            <li className="divider"></li>
            <li onClick={() => setFilter("SUPER_HEROS")}>
              <em>{filters.SUPER_HEROS}</em>
            </li>
          </ul>
        </label>

        <input
          data-testid="search-searchbar-input"
          onSubmit={(e) => e.preventDefault()}
          onChange={handleTextChange}
          placeholder={placeholders[filter]}
          value={query}
          autoComplete="off"
          spellCheck={false}
        />

        {loading ? (
          <Loader />
        ) : (
          <button onClick={() => {}}>
            <FiSearch className="icon" size={24} color={"#dd4250"} />
          </button>
        )}
      </Searchbar>
    </Container>
  );
}

export default Search;
