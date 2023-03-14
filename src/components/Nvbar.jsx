import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Nvbar = () => {
  const setActiveClass = ({ isActive }) => {
    return isActive ? 'active' : undefined
  }

  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
      >
        <Container className='justify-content-between'>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <div>
            <NavLink
              to='/'
              className={`${setActiveClass} ms-3`}
            >
              Home
            </NavLink>
            <NavLink
              to='/pokemones'
              className={`${setActiveClass} ms-3`}
            >
              Pokemones
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Nvbar
