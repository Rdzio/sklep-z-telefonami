import { db } from "../../Firebase/Firebase";

// select database region to work with
let ref = db.ref("telefony");

// create empty array
const telefony = [];

// get data from database and fetch it into created array
let i = 0;
ref.on("value", (obiekt) => {
  const obj = obiekt.val();
  for (let prop in obj) {
    for (let key in obj[prop]) {
      telefony.push(obj[prop][key]);
      telefony[i].vendor = prop;
      i++;
    }
  }
});

// select database region to work with
const ref2 = db.ref("polecane");

// create empty array
const polecane = [];

// get data from database and fetch it into created array
ref2.on("value", (obiekt) => {
  const obj = obiekt.val();
  for (let prop in obj) {
    for (let key in obj[prop]) {
      polecane.push(obj[prop][key]);
    }
  }
});

// set initial state
const initState = {
  items: telefony,
  addedItems: [],
  total: 0,
  itemsAdded: 0,
  recommended: polecane,
};

const cartReducer = (state = initState, action) => {
  console.log(polecane);
  switch (action.type) {
    case "ADD_TO_CART":
      // find added item in items array
      let addedItem = state.items.find((item) => item.id === action.id);
      let existed_item = state.addedItems.find((item) => action.id === item.id);

      // update total value
      let addTotal = state.total + addedItem.price;
      if (!existed_item) {
        // if added item doesn't exist in cart set quantity to 1
        addedItem.quantity = 1;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: addTotal,

          // increase added item counter
          itemsAdded: state.itemsAdded + 1,
        };
      } else {
        return {
          // if added item exists in cart increase it quantity by 1
          ...state,
          addedItems: state.addedItems.map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: addTotal,

          // increase added item counter
          itemsAdded: state.itemsAdded + 1,
        };
      }

    case "REMOVE_ITEM":
      // create new array without removed item
      let new_items = state.addedItems.filter((item) => action.id !== item.id);

      // find removed item data
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);

      // update total
      let removeTotal =
        state.total - itemToRemove.price * itemToRemove.quantity;

      // update added item counter
      let removeTotalItems = state.itemsAdded - itemToRemove.quantity;
      return {
        ...state,
        addedItems: new_items,
        total: removeTotal,
        itemsAdded: removeTotalItems,
      };

    case "ADD_QUANTITY":
      // find added item data
      let addedItemQ = state.addedItems.filter((item) => action.id === item.id);

      // update total
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
      // find substracted item data
      let subItem = state.addedItems.find((item) => item.id === action.id);

      // update total
      let subTotal = state.total - subItem.price;

      // check if it is the last piece of item in cart
      if (subItem.quantity === 1) {
        // remove it from cart
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
          // substract quantity by 1
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
