import { Component } from 'react';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Pet from '../Pet/Pet';
import * as petServices from '../../services/petServices';

class Categories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            //currentCategory: 'all'
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/pets')
        .then(res => res.json())
        .then(res => this.setState({pets: res}))
        .catch(err => console.log(err));
       //petServices.getAll()
        //.then(res => this.setState({pets: res}));

    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;

        if(prevProps.match.params.category == category){
            return;
        }

        petServices.getAll(category)
        .then(res => this.setState({pets: res, currentCategory: category}));
    }

    render() {
        console.log(this.state.pets);
    return (
        <div className="dashboard">
                <h1>Dashboard</h1>

                    <CategoryNavigation />

                <ul className="other-pets-list">
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