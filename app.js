const artistas = document.getElementById('artistas')
const artista = document.getElementById('artista').content
const fragment = document.createDocumentFragment()

let news = []

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
    news = response
    drawArtist()
    console.log(response)
})
.catch(err => console.error(err));
}
const drawArtist = () => {
    news.forEach((item) => {

        artista.querySelector('p').textContent = item.artist

        const clone = artista.cloneNode(true)
        fragment.appendChild(clone)

    })
    artistas.appendChild(fragment)
}