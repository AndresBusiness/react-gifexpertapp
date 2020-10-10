const getGif =  async (categoria)=>{
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=YKoJF1O841WrNMcACFCN85Wuw1Ux8iTz`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map(img=>{
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,

    }
  })
  return gifs;
}
export default getGif;
