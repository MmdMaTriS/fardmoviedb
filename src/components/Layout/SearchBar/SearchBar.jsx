import React, { useEffect, useState } from "react";
import { Col, Input, AutoComplete, Rate, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import useDebounce from "../../../hooks/useDebounce";
import { useHistory } from "react-router";

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: "right",
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title, id, label) => ({
  value: `${id}`,
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {title}
      <span>{label}</span>
    </div>
  ),
});

const SearchBar = () => {
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  // const debounceQuery = useDebounce(query, 300);

  function handleShowMovie(id) {
    const data = searchItems.find((d) => d.id == id);
    setInputValue("");
    switch (data.media_type) {
      case "movie":
        return history.push(`/movie/${id}`);
      case "tv":
        return history.push(`/tv/${id}`);
      default:
        break;
    }
  }

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=fda513da3da338ad49c9fb831abddb97&language=en-US&page=1&include_adult=false&query=${query}`
      )
        .then((r) => r.json())
        .then((data) => setSearchItems(data.results));
    }
  }, [query]);

  function makeOptions() {
    return searchItems && searchItems.length
      ? [
          {
            label: renderTitle("Movies"),
            options: searchItems
              .filter((item) => item.media_type === "movie")
              .map((i) =>
                renderItem(
                  i.title,
                  i.id,
                  <Rate
                    disabled
                    style={{ fontSize: "14px" }}
                    defaultValue={i.vote_average / 2}
                  />
                )
              ),
          },
          {
            label: renderTitle("TV Shows"),
            options: searchItems
              .filter((item) => item.media_type === "tv")
              .map((i) => renderItem(i.name, i.id)),
          },
          {
            label: renderTitle("Persons"),
            options: searchItems
              .filter((item) => item.media_type === "person")
              .map((i) =>
                renderItem(
                  i.name,
                  i.id,
                  <Avatar
                    {...(i.profile_path
                      ? {
                          src: `https://image.tmdb.org/t/p/w45/${i.profile_path}`,
                        }
                      : { icon: <UserOutlined /> })}
                  />
                )
              ),
          },
        ].filter((type) => type.options.length)
      : [];
  }
  return (
    <Col xs={19} md={10}>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{
          width: 250,
        }}
        options={makeOptions()}
        onSearch={(e) => setQuery(e)}
        onSelect={handleShowMovie}
        onChange={setInputValue}
        value={inputValue}
      >
        <Input
          placeholder="Search Movie & Tv-Series..."
          type="text"
          style={{
            direction: "rtl",
            borderRadius: 25,
          }}
        ></Input>
      </AutoComplete>
    </Col>
  );
};

export default SearchBar;
