import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as petServices from '../../services/petServices'


const PetDetails = ({
    match
}) => {

    let [pet, setPet] = useState({});

    useEffect(() => {
        petServices.getOne(match.params.petId)
            .then(res => setPet(res));
    }, [])

    const onPetButtonClickHandler = () => {
        let incrementedLikes = pet.likes + 1;
        petServices.pet(match.params.petId, incrementedLikes)
            .then((responseLikes) => {
                setPet(state => ({...state, likes: Number(responseLikes.likes)}));
            })
    }

    return (
        <section className="detailsOtherPet">
                <h3>{pet.name}</h3>
                <p>Pet counter: {pet.likes} 
                    <button onClick={onPetButtonClickHandler} class="button"><i class="fas fa-heart"></i> Pet</button>
                </p>
                <p className="img"><img src={pet.imageURL} /></p>
				<p className="description">{pet.description}</p>
                <div className="pet-info">
                    <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
                    <Link href="#"><button className="button">Delete</button></Link>
                </div>
        </section>
    );
}

export default PetDetails;