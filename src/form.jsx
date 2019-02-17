import React, { Fragment } from "react";
import { data } from "./data";

console.log(data);

const normalizedData = data.reduce((acc, curr) => {
  return {
    ...acc,
    [curr.title]: curr
  };
}, {});

const TypeSelector = ({ options, onSelect }) => (
  <select onChange={onSelect}>
    {options.map(option => (
      <option>{option}</option>
    ))}
  </select>
);

// form will have a component selector

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = { activeType: "" };
  }

  handleTypeChange = ({ target }) => {
    this.setState({ activeType: target.value });
  };

  render() {
    return (
      <Fragment>
        <TypeSelector
          onSelect={this.handleTypeChange}
          options={Object.keys(normalizedData)}
        />
        <Fields />
      </Fragment>
    );
  }
}
