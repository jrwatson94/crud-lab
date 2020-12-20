import cuid from 'cuid';

export default function manageRestaurants(state={
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type){
        case "ADD_RESTAURANT":
            const restaurant = {
                id: cuid(),
                name: action.name
            }
            return {...state,
                restaurants: state.restaurants.concat(restaurant)};

        case "DELETE_RESTAURANT": 
            return {...state,
                restaurants: state.restaurants.filter(rest => rest.name !== action.name)}

        case "ADD_REVIEW":
            const review = {
                id: cuid(),
                restaurantId: action.id,
                text: action.text
            }
            return {...state,
                reviews: state.reviews.concat(review)};

        case "DELETE_REVIEW": 
            return {...state,
                reviews: state.reviews.filter(rest => rest.id !== action.id)}
        default:
            return state
    }

}
