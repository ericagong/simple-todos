import styled from "styled-components";

const Layout = (props) => {
  return <StyledLayout>{props.children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;
