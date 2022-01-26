export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Na2n7V0KhG6a7li7178j7WRXeq30HCWu&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    //console.log(gifs);
    return gifs;
}