// import { storeProducts } from "../../data";

// use only on deployed version!
/*
import { db } from "../../Firebase/Firebase";
let ref = db.ref("telefony");
const telefony = [];
ref.on("value", (obiekt) => {
  const obj = obiekt.val();
  for (let prop in obj) {
    for (let key in obj[prop]) {
      telefony.push(obj[prop][key]);
    }
  }
});
const ref2 = db.ref("polecane");
let polecane = [];
ref2.on("value", (obiekt) => {
  polecane = obiekt.val();
});
*/

import { database } from "../../database.js";
import { polecane } from "../../polecane.js";

// for local testing
const telefony = [];
for (let prop in database) {
  for (let key in database[prop]) {
    telefony.push(database[prop][key]);
  }
}

const initState = {
  items: telefony,
  addedItems: [],
  total: 0,
  itemsAdded: 0,
  recommended: polecane,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let addedItem = state.items.find((item) => item.id === action.id);
      let existed_item = state.addedItems.find((item) => action.id === item.id);
      let addTotal = state.total + addedItem.price;
      if (!existed_item) {
        addedItem.quantity = 1;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: addTotal,
          itemsAdded: state.itemsAdded + 1,
        };
      } else {
        return {
          ...state,
          addedItems: state.addedItems.map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: addTotal,
          itemsAdded: state.itemsAdded + 1,
        };
      }

    case "REMOVE_ITEM":
      let new_items = state.addedItems.filter((item) => action.id !== item.id);
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      let removeTotal =
        state.total - itemToRemove.price * itemToRemove.quantity;
      let removeTotalItems = state.itemsAdded - itemToRemove.quantity;
      return {
        ...state,
        addedItems: new_items,
        total: removeTotal,
        itemsAdded: removeTotalItems,
      };

    case "ADD_QUANTITY":
      let addedItemQ = state.addedItems.filter((item) => action.id === item.id);
      let addTotalQ = state.total + addedItemQ[0].price;
      return {
        ...state,
        addedItems: state.addedItems.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total: addTotalQ,
        itemsAdded: state.itemsAdded + 1,
      };

    case "SUB_QUANTITY":
      let subItem = state.addedItems.find((item) => item.id === action.id);
      let subTotal = state.total - subItem.price;
      if (subItem.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item) => item.id !== action.id
        );
        return {
          ...state,
          addedItems: new_items,
          total: subTotal,
          itemsAdded: state.itemsAdded - 1,
        };
      } else {
        return {
          ...state,
          addedItems: state.addedItems.map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
                }
              : item
          ),
          total: subTotal,
          itemsAdded: state.itemsAdded - 1,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
