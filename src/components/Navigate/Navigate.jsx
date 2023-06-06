import { NavigateList, HeaderNavLink } from './Navigate.styles';

function Navigate() {
  return (
    <nav>
      <NavigateList>
        <li>
          <HeaderNavLink to="/">Home</HeaderNavLink>
        </li>
        <li>
          <HeaderNavLink to="/movies">Movies</HeaderNavLink>
        </li>
      </NavigateList>
    </nav>
  );
}

export default Navigate;
