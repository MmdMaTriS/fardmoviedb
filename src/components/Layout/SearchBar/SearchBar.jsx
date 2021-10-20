import React, { useState } from "react";
import { Col, Input, AutoComplete } from "antd";
import { UserOutlined } from "@ant-design/icons";

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

const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

// const options = [
//   {
//     label: renderTitle("Libraries"),
//     options: [
//       renderItem("AntDesign", 10000),
//       renderItem("AntDesign UI", 10600),
//     ],
//   },
//   {
//     label: renderTitle("Solutions"),
//     options: [
//       renderItem("AntDesign UI FAQ", 60100),
//       renderItem("AntDesign FAQ", 30010),
//     ],
//   },
//   {
//     label: renderTitle("Articles"),
//     options: [renderItem("AntDesign design language", 100000)],
//   },
// ];

const SearchBar = () => {
  const [searchItems, setSearchItems] = useState([]);
  function handleSearch(query) {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=fda513da3da338ad49c9fb831abddb97&language=en-US&page=1&include_adult=false&query=${query}`
    )
      .then((r) => r.json())
      .then((data) => setSearchItems(data.results));
  }
  function makeOptions() {
    return searchItems && searchItems.length
      ? [
          {
            label: renderTitle("Movies"),
            options: searchItems
              .filter((item) => item.media_type === "movie")
              .map((i) => renderItem(i.title, 60100)),
          },
          {
            label: renderTitle("TV Shows"),
            options: searchItems
              .filter((item) => item.media_type === "tv")
              .map((i) => renderItem(i.name, 60100)),
          },
          {
            label: renderTitle("Persons"),
            options: searchItems
              .filter((item) => item.media_type === "person")
              .map((i) => renderItem(i.name, 60100)),
          },
        ]
      : [
          {
            label: renderTitle("Movies"),
            options: [],
          },
          {
            label: renderTitle("TV Shows"),
            options: [],
          },
          {
            label: renderTitle("Persons"),
            options: [],
          },
        ];
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
        onSearch={handleSearch}
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

{
  /* <Col xs={19} md={10}>
<div className="SearchBarHeader">
  <Input
    placeholder="Search Movie & Tv-Series..."
    type="text"
    style={{
      direction: "rtl",
      borderRadius: 25,
    }}
  ></Input>
</div>
</Col> */
}
