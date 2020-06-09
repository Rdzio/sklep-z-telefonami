import { storeProducts } from "../../data";
// import { REHYDRATE } from "redux-persist";
// import { act } from "react-dom/test-utils";

const initState = {
  items: storeProducts,
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  // if (action.type === REHYDRATE) {
  //   console.log("ACTION: REHYDRATE");
  //   console.log(action.payload);
  //   return {
  //     ...state,
  //     addedItems: action.payload.addedItems,
  //   };
  // }

  //console.log("STATE VALUES");
  //console.log(state);

  //INSIDE HOME COMPONENT
  if (action.type === "ADD_TO_CART") {
    //console.log("ACTION: ADD_TO_CART");
    let addedItem = state.items.find((item) => item.id === action.id);

    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem = state.addedItems.find((item) => item.id === action.id);
      //console.log("Adding quantity to item");
      //console.log(addedItem);

      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      //console.log("Setting quantity to 1 to item:");
      //console.log(addedItem);

      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    //console.log("ACTION: REMOVE_ITEM");
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    //console.log("Item to remove");
    //console.log(itemToRemove);

    let new_items = state.addedItems.filter((item) => action.id !== item.id);
    //console.log("New items");
    //console.log(new_items);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === "ADD_QUANTITY") {
    //console.log("ACTION: ADD_QUANTITY");
    let addedItem = state.addedItems.find((item) => item.id === action.id);
    //console.log("Adding quantity to:");
    //console.log(addedItem);

    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === "SUB_QUANTITY") {
    //console.log("ACTION: SUB_QUANTITY");

    let addedItem = state.addedItems.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === "ADD_SHIPPING") {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
