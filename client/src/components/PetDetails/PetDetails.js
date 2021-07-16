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
    }, [match])
    return (
        <section className="detailsOtherPet">
                <h3>{pet.name}</h3>
                <p>Pet counter: {pet.likes} <a href="#"><button class="button"><i class="fas fa-heart"></i>
                            Pet</button></a>
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