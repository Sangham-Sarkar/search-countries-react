import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };
  return (
    <form
      onSubmit={submitHandler}
      style={{ position: "relative", display: "inline-block" }}
    >
      <input
        type="text"
        placeholder="Search a country..."
        value={input}
        onChange={handleChange}
      />
      )
    </form>
  );
};

export default SearchInput;
