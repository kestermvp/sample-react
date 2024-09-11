import React, { useState } from "react";

const SearchableList = () => {
  // Sample data
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  // State to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle input changes
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Traditional Function Expression
  // const add = function(a, b) {
  //   return a + b;
  // };

  // // Arrow Function
  // const add = (a, b) => a + b;

  const changeValue = () => {
    const var1 = {
      name: "John",
    };
    var1.age = 20;
    console.log(var1);
  };

  return (
    <div>
      <h1>Searchable List</h1>
      {/* <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul> */}
      <button onClick={() => changeValue()}>Test Me</button>
    </div>
  );
};

export default SearchableList;
