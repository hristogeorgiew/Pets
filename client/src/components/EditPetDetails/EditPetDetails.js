import React, {useEffect, useState} from 'react'
import * as petServices from '../../services/petServices'


const EditPetDetails = ({
    match
}) => {

    const [pet, setPet] = useState({});
    useEffect(() => {
        //резултата го получаваме от response
        petServices.getOne(match.params.petId)
            .then(res => setPet(res));
    }, [])

    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.description.value);
        
    }

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img"><img src={pet.imageURL} /></p>
                <form onSubmit={onDescriptionSaveSubmit}>
                    <textarea type="text" name="description" defaultValue={pet.description}></textarea>
                    <button className="button"> Save</button>
                </form>
        </section>
        )
}

export default EditPetDetails;
