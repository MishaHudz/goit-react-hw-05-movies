import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalInfoLinksList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

export const AdditionalInfoLink = styled(NavLink)`
  font-size: 16px;
  color: black;
  font-weight: 700;

  &.active {
    color: red;
  }
`;

export const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  row-gap: 10px;
  height: 70px;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
`;

export const GoBackButton = styled.button`
  background-color: white;
  color: black;
  width: 50px;
  height: 30px;
  font-size: 30px;
  line-height: 0.5em;
  font-weight: 700;

  border-radius: 50%;

  cursor: pointer;
  border: 3px solid black;
  margin-bottom: 15px;

  &:hover {
    color: white;
    background-color: red;
  }
`;
