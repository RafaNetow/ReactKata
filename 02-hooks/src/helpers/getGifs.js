
    export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=tz9KwRiJM49VPVrRGsB3PPNbDeE7NA9X&q=${ category}`;
        const res = await fetch ( url );
        const { data } = await res.json();
        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        return gifs;
    }

    