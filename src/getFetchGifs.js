// Peticion API y traer informacion // Retorna un promesa
export const getFetchGifs =  async ( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=ihej9JGDmJcz7yZhEj6KGMofgIh19YHe`;
  const resp =  await fetch( url );
  const { data } =  await resp.json();

  const gifs = data.map ( img => {

    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }

  });

  return gifs;
}