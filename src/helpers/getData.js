const getData = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100'
  const response = await fetch( url )
  const data = await response.json()
  const photos = data.photos
  const images = photos.map( photo => (
    {
      id: photo.id,
      alt: photo.alt,
      src: photo.src.large,
      liked: photo.liked
    } ) )

  return images
}

export default getData