import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigateList = styled.ul`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 30px;
`;

export const HeaderNavLink = styled(NavLink)`
  font-size: 20px;
  line-height: 1.2em;
  font-weight: 700;
  color: black;

  &.active {
    color: red;
  }
`;
