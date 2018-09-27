export default ({method='get', data={} }) =>{

  fetch(this.getUrls.login, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then( res => res.json())
  .then(data => {
    console.log(data)
  })
}