import { Component } from 'react';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import PetCard from '../PetCart/PetCart';
import * as petServices from '../../services/petServices';

class Categories extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all'
        }
    }

    //тук взимам всички петове
    componentDidMount() {
       petServices.getAll()
        .then(res => this.setState({pets: res}));

    }

    //тук ако променим нещо в Url
    componentDidUpdate(prevProps) {
        //взимам от Url категорията 
       const category = this.props.match.params.category;

       //PrevProps с него ако на предните пропс, които са преди ъпдейта
       //е било равно на текущото категори за да не се пререндерира 
        if(prevProps.match.params.category == category){
            return;
        }

        petServices.getAll(category)
        .then(res => this.setState({pets: res, currentCategory: category}));
    }

    render() {
    return (
        <div className="dashboard">
                <h1>Dashboard</h1>

                    <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(x => 
                        <PetCard 
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