import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.header`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuNav = styled.ul`
  font-size: 1.8rem;
  color: var(--color-grey-700);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Li = styled.li`
  transition: 0.2s all ease-in;
  cursor: pointer;

  &:hover {
    color: var(--Soft-orange);
  }
`;

const options = [" Home", "New", " Popular", " Trending", "Categories"];

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <MenuNav>
        {options.map((str, i) => (
          <Li key={i}>{str}</Li>
        ))}
      </MenuNav>
    </StyledHeader>
  );
}

export default Header;
