// NavBar
const header = document.createElement('div')
header.className = 'navbar'
header.innerHTML += `
    <div class='header'>
      <h1 class='title'>The famous Rick and Morty Characters</h1>
      <p class='sub-title'>(The data is fetched from the rick and morty api)</p>
    </div> 
    `
document.body.appendChild(header)

// Card Container
const mainContainer = document.createElement('div')
mainContainer.className = 'character-container'
document.body.appendChild(mainContainer)

const loadCharacters = async () => {
  try {
      const res = await fetch("https://rickandmortyapi.com/api/character")
      const data = await res.json()
      displayCharacters(data.results)
  } catch(err) {
      console.log(err)
  }
}

loadCharacters()

const characterCard = document.querySelector('.character-container')

const displayCharacters = (characters) => {
  const htmlString = characters.map((character) => {
    return `
      <div class="card">
        <div>
          <img src=${character.image}>
        </div>
        <div>
          <h2>Name</h2>
          <p>${character.name}</p>
          <h2>Species</h2>
          <p>${character.species}</p>
          <h2>Gender</h2>
          <p>${character.gender}</p>
          <h2>Status</h2>
          <p>${character.status}</p>
        </div>
        <div>
          <h2>Origin</h2>
          <p>${character.origin.name}</p>
          <h2>Location</h2>
          <p>${character.location.name}</p>
        </div>
      </div>
    `
  })
  .join('')
  characterCard.innerHTML = htmlString
}

