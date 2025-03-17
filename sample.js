fetch('http://0.0.0.0:8000/users/1')
  .then((res) => res.json())
  .then((result) => console.log(result));

async function fetchUser(params) {
  try {
    const response = await fetch('http://0.0.0.0:8000/users/1');
    const results = await response.json();
    console.log(results);
  } catch (err) {
    console.log('Error Occurred: ' + err);
  }
}

fetchUser();
