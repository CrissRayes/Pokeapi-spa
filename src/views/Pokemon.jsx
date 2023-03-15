import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const Pokemon = () => {
  const [character, setCharacter] = useState([])
  // se define el estado de abilites y types para no tener el error al momento del map
  const [abilites, setAbilities] = useState([])
  const [types, setTypes] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()

      // se hace el set de abilities y types con la data para que no de error al momento de hacer el map
      setAbilities(data.abilities)
      setTypes(data.types)

      const dataCharacter = {
        name: data.name,
        img: data.sprites.other.home.front_default,
        base_experience: data.base_experience,
        height: data.height,
        weight: data.weight,
      }
      setCharacter(dataCharacter)
      return dataCharacter
    }

    getCharacter()
  }, [id])

  return (
    <>
      <Container className='mt-5'>
        <div className='row'>
          <div className='col'>
            <img
              src={character.img}
              alt={character.name}
            />
          </div>
          <div className='col'>
            <h3 className='text-uppercase'>{character.name}</h3>
            <ul>
              <li>Experiencia: {character.base_experience}</li>
              <li>Peso: {character.weight}</li>
              <li>Altura: {character.height}</li>
              <li>Habilidades:</li>
              <ul>
                {abilites.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
              <li>Tipos:</li>
              <ul>
                {types.map((type, index) => (
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Pokemon
