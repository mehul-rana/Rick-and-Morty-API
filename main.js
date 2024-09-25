document.querySelector('#getChar').addEventListener('click', getChar)

function getChar(){
  let choice = Number(document.querySelector('input').value)
  let url = `https://rickandmortyapi.com/api/character/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name
        document.querySelector('img').src = data.image
        document.querySelector('#gender').innerText = data.gender
        document.querySelector('#species').innerText = data.species
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

