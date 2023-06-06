import Navigate from 'components/Navigate/Navigate';
import { Outlet } from 'react-router-dom';
import { Header, Main } from './Layout.styles';

function Layout() {
  return (
    <>
      <Header>
        <Navigate />
      </Header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
