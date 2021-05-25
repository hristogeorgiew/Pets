import {Link} from 'react-router-dom';

const Pet = ({
    id,
    name,
    description,
    imageURL,
    category,
    likes
}) => {
    return (
        <li class="otherPet">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p class="img"><img src={imageURL} />
            </p>
            <p class="description">{description}</p>
            <div class="pet-info">
                <Link to="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></Link>
                <Link to={`/pets/details/${id}`}><button class="button">Details</button></Link>
                <i class="fas fa-heart"></i> <span> {likes}</span>
            </div>
        </li>
    )
}

export default Pet;