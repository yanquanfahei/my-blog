import type { NextComponentType } from 'next';
import NavBar from '../NavBar';

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className='flex-1 pt-14'>
        {children}
      </main>
    </>
  )
}

export default Layout;