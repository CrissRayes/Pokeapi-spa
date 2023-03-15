import { Container } from 'react-bootstrap'

const Inicio = () => {
  return (
    <>
      <Container className='mt-3'>
        <div className='row'>
          <div className='col-6 bg-image'></div>
          <div className='col-6 d-flex flex-column justify-content-center'>
            <h1>Bienvenido Maestro Pokémon</h1>
            <h2 className='sub-title'>
              Descubre tu Pokémon favorito y conoce sus poderes
            </h2>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Inicio
