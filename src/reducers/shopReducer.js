import Item1 from '../images/items/Item1.png'
import Item2 from '../images/items/Item5.jpg'
import Item3 from '../images/items/Item3.png'
import Item4 from '../images/items/Item4.jpg'
import Item5 from '../images/items/Item2.png'
import Item6 from '../images/items/Item6.jpg'

const initialState = {
    products : [
        {id:1, title:'MG GUNDAM KYRIOS', description:'Gundam 00 (Double O)', price:631394, img: Item1},
        {id:2, title:'MG STRIKE ROUGE OOTORI VER.RM', description:'Gundam Seed', price:530371, img: Item2},
        {id:3, title:'MG GUNDAM AGEII MAGNUM', description:'Gundam Build Fighters', price:694534, img: Item3},
        {id:4, title:'MG ZZ GUNDAM VER. KA', description:'Gundam ZZ', price:757673, img: Item4},
        {id:5, title:'MG G GUNDAM', description:'G Gundam', price:315697, img: Item5},
        {id:6, title:'GU-04 ASW-G-08 GUNDAM BARBATOS', description:'Mobile Suit Gundam', price:356552, img: Item6}
    ],
    cart: []
  }


  const shopReducer = (state = initialState, action) => {
      // buat variabel penampung untuk cart dan index item yang terupdate
    let updatedCart;
    let updatedItemIndex;
    switch(action.type){
        // jika case ADD_PRODUCT
        case "ADD_PRODUCT_TO_CART":
            // update cartnya mengambil data dari state/initialstate nya si cart, berarti []
            updatedCart = [...state.cart];
            // findIndex mengembalikan index elemen pertama dalam array yang lolos 1 2 3, jika tidak ada, mka findIndex akan return -1
            // console.log(updatedCart);
            updatedItemIndex = updatedCart.findIndex(s => s.id === action.payload.id);
            // jika jumlah 0 / [], push item, ditambah props quantity + 1
            if(updatedItemIndex < 0){
                updatedCart.push({...action.payload, quantity:1});
            } else {
                // jika item yang sama di tambahkan ke cart, maka jumlah quantity nya ++ (per click)
                let updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                // console.log(updatedItemIndex);
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
                console.log(updatedCart[updatedItemIndex] = updatedItem);
            }
            return {...state, cart: updatedCart};
        case "REMOVE_CART_PRODUCT":
            updatedCart = [...state.cart];

            updatedItemIndex = updatedCart.findIndex(s => s.id === action.payload.id);

            let updatedItem = {
                ...updatedCart[updatedItemIndex]
            };
            // console.log(updatedItemIndex);
            updatedItem.quantity--;
            if(updatedItem.quantity <= 0) {
                updatedCart.splice(updatedItemIndex, 1);
                console.log(updatedCart[updatedItemIndex]);
                // console.log(updatedCart);
            }else {
                updatedCart[updatedItemIndex] = updatedItem;

            }
            // console.log(updatedCart[updatedItemIndex] = updatedItem);
            return {...state, cart: updatedCart};
            
        case "REMOVE_ALL_CART_PRODUCT": 
            return {...state, cart: []};
        default : 
            return state
    }
  }

  export default shopReducer;