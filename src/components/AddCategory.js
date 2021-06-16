import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const hundleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const hundleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((category) => [inputValue, ...category]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={hundleSubmit}>
      <input type="text" value={inputValue} onChange={hundleInputValue} />
    </form>
  );
};
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
