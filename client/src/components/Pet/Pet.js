
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
                <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                <a href="#"><button class="button">Details</button></a>
                <i class="fas fa-heart"></i> <span> {likes}</span>
            </div>
        </li>
    )
}

export default Pet;