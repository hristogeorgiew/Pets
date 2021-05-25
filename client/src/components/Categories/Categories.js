import { Component } from 'react';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Pet from '../Pet/Pet';

class Categories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/pets')
            .then(res => res.json())
            .then(res => this.setState({pets: res}))
            .catch(error => console.log(error));
    }

    render() {
    return (
        <div class="dashboard">
                <h1>Dashboard</h1>

                    <CategoryNavigation />

                <ul class="other-pets-list">
                    {this.state.pets.map(x => 
                        <Pet 
                            key={x.id}
                            id={x.id} 
                            name={x.name} 
                            description={x.description}
                            imageURL={x.imageURL}
                            category={x.category}
                            likes={x.likes}
                        />
                    )}
                </ul>
            </div>
        );
    }
}
export default Categories;