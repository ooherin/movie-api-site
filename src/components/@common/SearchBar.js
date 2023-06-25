import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import MovieApi from "../../apis/movie.api";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const keywordInput = useRef();
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onClickMoveSearch = () => {
    searchParams.set("keyword", keyword);
    navigate(`/search?keyword=${keyword}`);
    keywordInput.current = "";
  };

  return (
    <Wrapper>
      <SearchInput onChange={onChange} value={keyword} ref={keywordInput} />
      <CiSearch style={iconStyles} onClick={onClickMoveSearch} />
    </Wrapper>
  );
};
export default SearchBar;

const Wrapper = styled.div`
  width: 150px;
  height: 25px;
  z-index: 1000;
  border: 0.1rem solid white;
  border-radius: 10px;
  position: relative;
  color: white;
`;

const iconStyles = {
  position: "absolute",
  left: 3,
  top: 3,
};

const SearchInput = styled.input`
  width: 120px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  left: 20px;
  outline: none;
  border: none;
  display: relative;
`;
