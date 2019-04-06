
const localhost = '192.168.1.48';


export function getUsers () {
    const url = 'http://'+localhost+':3000/users';
    return fetch(url)
        .then((response) => response.json())
        .catch(((error) => console.error(error)))

}



export function createUser (user) {
    const url = 'http://'+localhost+':3000/users';
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then((response) => response.json())
        .catch(((error) => console.error(error)))
}



export function getSingleUser (pseudo) {
    const url = 'http://'+localhost+':3000/users/'+pseudo;
    return fetch(url)
        .then((response) => response.json())
        .catch(((error) => console.error(error)))
}



export function updateUser (user) {
    const url = 'http://'+localhost+':3000/users/'+user.pseudo;
    return fetch(url, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    })
        .then((response) => response.json())
        .catch(((error) => console.error(error)))
}


/*export function deleteUser (user) {
    const url = 'localhost:3000/users/'+user.id;
    return fetch(url, {
        method: 'DELETE',
        body: JSON.stringify({
            User: user
        }),
    })
        .then((response) => response.json())
        .catch(((error) => console.error(error)))

}*/