import * as t from '../types';


const initialState = {
  loading: false,
  products: [],
  error: ''
}

const productsReducer = (state = initialState ,  action) => {
  
    switch(action.type) {
        
        case t.FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: false
        }
        case t.FETCH_PRODUCTS_SUCCESS:
        return {
          loading: true,
          products: action.payload,
          error: ''
          }
        case t.FETCH_PRODUCTS_ERROR:
        return {
          loading: true,
          products: [],
          error: action.payload
        }
        case t.PRODUCTS_SORTED_HIGHEST:
        return {
          loading: true,
          products: action.payload,
          error: []
        }
        case t.PRODUCTS_SORTED_LOWEST:
        return {
          loading: true,
          products: action.payload,
          error: []
        }
       case t.PRODUCTS_SORTED_PREDEFINED:
        return {
          loading: true,
          products: action.payload,
          error: []
        }
        case t.AFFORDABLE_ARRAY:
        return {
          loading: true,
          products: action.payload,
          error: []
        }
        case t.UNAFFORDABLE_ARRAY:
        return {
          loading: true,
          products: action.payload,
          error: []
        }
        default: return state;
       }
  };

  export default productsReducer;


  // case 'sortHighest':
  //       console.log(products)
  //     state = request(req, (error, response) => {
  //       if(error){
  //        throw new Error(error.message)
  //       }
  //       const productsData = JSON.parse(response.body)
  //       return productsData;
  //     }).then(productsData.sort((a, b) => (a.cost - b.cost)))
  //     case 'sortLowest':
  //       console.log(products)
  //       request(req, (error, response) => {
  //         if(error){
  //          throw new Error(error.message)
  //         }
  //         const productsData = JSON.parse(response.body)
  //         return productsData;
  //       }).then(productsData.sort((a, b) => (b.cost - a.cost)))
  //     case 'predefined':
  //       return request(req, (error, response) => {
  //         if(error){
  //          throw new Error(error.message)
  //         }
  //         const productsData = JSON.parse(response.body)
  //         return productsData;
  //       }).then(productsData.sort((a, b) => (a.id - b.id)))
  //     default:
  //       return 'error: This value dont belong here'
   