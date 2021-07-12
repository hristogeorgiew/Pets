const url = 'http://localhost:5000/pets'

export const getAll = (category = '') => {
    let PetsUrl = url + ((category && category !== 'all') ? `?category=${category}` : '');

    return fetch(PetsUrl)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getOne = (petId) => {
    return fetch(`${url}/${petId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const create = (petName, description, imageURL, category) => {
    let pet = {
        name: petName,
        description,
        imageURL,
        category
    }
    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    })
};