import Navigate from 'components/Navigate/Navigate';
import { Outlet } from 'react-router-dom';
import { Header, Main } from './Layout.styles';
import { Suspense } from 'react';

function Layout() {
  return (
    <>
      <Header>
        <Navigate />
      </Header>

      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}

export default Layout;
