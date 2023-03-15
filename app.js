const artistas = document.getElementById('artistas')
const artista = document.getElementById('artista').content
const fragment = document.createDocumentFragment()

let datos = []

document.addEventListener('DOMContentLoaded', () =>{
    artist()
})

const artist = () => {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '967d463a9emsh1fffa570eef77f8p1e2db8jsn2fe8294de157',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

fetch('https://spotify81.p.rapidapi.com/top_20_by_followers', options)
.then(response => response.json())
.then(response => {
    datos = response
    drawArtist()
    console.log(response)
})
.catch(err => console.error(err));
}
const drawArtist = () => {
    /*
    datos.forEach((item) => {

        artista.getElementById('nombre').textContent = "Nombre: "+item.artist
        artista.getElementById('lugar').textContent = "Lugar: "+item.rank
        artista.getElementById('seguidores').textContent = "Seguidores: "+item.followers

        const clone = artista.cloneNode(true)
        fragment.appendChild(clone)

    })
    */
    for(i = 0; i<20; i++){
        artista.getElementById('nombre').textContent = datos[i].artist
        artista.getElementById('lugar').textContent = "TOP "+datos[i].rank
        artista.getElementById('seguidores').textContent = "Seguidores: "+datos[i].followers

        const clone = artista.cloneNode(true)
        fragment.appendChild(clone)
    }
    artistas.appendChild(fragment)
    cargaCanciones()
}