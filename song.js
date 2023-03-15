const contenedor = document.getElementById('contenedor')
const btnLoad = document.getElementById('btnLoad')
const cardsong = document.getElementById('cardsong').content
const fragment_song = document.createDocumentFragment()
let canciones = []

const cargaCanciones = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '967d463a9emsh1fffa570eef77f8p1e2db8jsn2fe8294de157',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            canciones = response
            console.log(canciones)
            crearTarjetas()
        })
        .catch(e => console.log(e));
}


const crearTarjetas = () => {
    for(let i = 0; i<20; i++){
            cardsong.querySelector('img').setAttribute('src',canciones[i].trackMetadata.displayImageUri)
            cardsong.getElementById('nameSong').textContent = canciones[i].trackMetadata.trackName
            const clone = cardsong.cloneNode(true)
            fragment_song.appendChild(clone)
    }
contenedor.appendChild(fragment_song)
}
/*
btnLoad.addEventListener('click', () => {
    
    
}
*/