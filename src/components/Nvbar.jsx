import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import iconEevee from '../assets/img/iconEevee.png'
import iconJigglypuff from '../assets/img/iconJigglypuff.png'
import iconMapa from '../assets/img/iconMapa.png'
import iconPikachu from '../assets/img/iconPikachu.png'
import iconPokebola from '../assets/img/iconPokebola.png'

const Nvbar = () => {
  const setActiveClass = ({ isActive }) => {
    return isActive ? 'active' : undefined
  }
  return (
    <>
      {/* ejemplo navbar bootstarp fija y transparente */}
      {/* <Navbar
        bg='transparent'
        variant='dark'
        fixed='top'
        className='navbar'
      > */}

      <Navbar
        bg='transparent'
        variant='dark'
        fixed='top'
      >
        <Container className='justify-content-between'>
          <Navbar.Brand href='/'>
            <div className='nav-icons-imgs'>
              <img
                src={iconEevee}
                alt='iconEevee'
              />
              <img
                src={iconJigglypuff}
                alt='iconJigglypuff'
              />
              <img
                src={iconPikachu}
                alt='iconPikachu'
              />
              <img
                src={iconPokebola}
                alt='iconPokebola'
              />
              <img
                src={iconMapa}
                alt='iconMapa'
              />
            </div>
          </Navbar.Brand>
          <div>
            <NavLink
              to='/'
              className={`${setActiveClass} ms-3`}
            >
              Inicio
            </NavLink>
            <NavLink
              to='/pokemones'
              className={`${setActiveClass} ms-3`}
            >
              Pokémones
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Nvbar
