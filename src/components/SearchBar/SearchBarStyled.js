import React from 'react';
import styled from 'styled-components/macro';
import './searchBar.css';

const SearchBar = styled.form`
  position: relative;
  background-color: #5d6f7b;
  font-size: 16px;
  border-radius: 35px;
  border-width: 1px;
  border-style: solid;
  border-color: #5d6f7b;
  width: 500px;
  height: 35px;
  padding: 10px;
  margin: 100px auto 50px;
  overflow: hidden;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 5px 9px;
  height: 35px;
  width: 380px;
  border: none;
  border-radius: 50px 3px 3px 50px;
`;

const SpanHidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

// const InputStyled = styled.input`
//   & InputStyled::placeholder {
//     text-align: center;
//   }
// `;

const Button = styled.button`
  all: unset;
  background-color: #5d6f7b;
  color: #ffff;
  cursor: pointer;
  position: absolute;
  right: 10%;
  display: inline-block;
  vertical-align: middle;
`;

// const SpanButton = styled.span`
//   text-color: #ffff;
// `;

export const SearchBarStyled = ({ primaryColor, secondaryColor }) => {
  return (
    <SearchBar action="/" method="get">
      <label htmlFor="search-bar">
        <SpanHidden className="search-bar-hidden">Search</SpanHidden>
      </label>
      <Input
        backgroundColor={primaryColor}
        type="text"
        id="search-bar"
        placeholder="type something..."
        name="s"
      />
      <Button type="submit" backgroundColor={secondaryColor}>
        <span>find</span>
      </Button>
    </SearchBar>
  );
};
