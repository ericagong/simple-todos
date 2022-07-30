import styled from "styled-components";

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledDiv>My Todo List</StyledDiv>
      <StyledDiv>React</StyledDiv>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100vw;
  height: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
`;

const StyledDiv = styled.div`
  padding: 0px 30px;
`;
