import { Component } from 'react';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Pet from '../Pet/Pet';
import * as petServices from '../../services/petServices';

class Categories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all'
        }
    }

    componentDidMount() {
       petServices.getAll()
        .then(res => this.setState({pets: res}));
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