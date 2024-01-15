import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../models";


interface IInitialState {
  items: IItem[];
  filteredItems: IItem[];
  isEdited: boolean;
  editedId: string;
  editedItem: IItem;
  isFiltered: boolean;
}

const initialState: IInitialState = {
  items: [
    { name: "first", quantity: "1", id: "111aaa" },
    { name: "second", quantity: "2", id: "222bbb" },
  ],
  filteredItems: [
    { name: "first", quantity: "1", id: "111aaa" },
    { name: "second", quantity: "2", id: "222bbb" },
  ],
  isEdited: false,
  editedId: "",
  editedItem: { name: "", quantity: "", id: "" },
  isFiltered: false,
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.isEdited) {
        const indexOfEdited = state.items.findIndex(
          (item) => item.id === state.editedItem.id
        );
        const indexOfEditedInFiltered = state.filteredItems.findIndex(
          (item) => item.id === state.editedItem.id
        );
        if (indexOfEdited > -1) {
          state.items.splice(indexOfEdited, 1, {
            ...action.payload.item,
            id: state.editedId,
          });
        }
        if (indexOfEditedInFiltered > -1) {
          state.filteredItems.splice(indexOfEdited, 1, {
            ...action.payload.item,
            id: state.editedId,
          });
        }
      } else {
        state.items.push(action.payload.item);
      }

      state.isEdited = false;
      state.editedId = "";
      state.editedItem = { name: "", quantity: "", id: "" };
    },
    editItem(state, action) {
      state.editedId = action.payload.id;
      state.isEdited = true;
      const editedItem = state.items.find((item) => item.id === state.editedId);
      if (editedItem) {
        state.editedItem = editedItem;
      }
    },
    removeItem(state, action) {
      if (state.isEdited) {
        return;
      }
      state.items = state.items.filter((item) => item.id != action.payload.id);
      state.filteredItems = state.filteredItems.filter(
        (item) => item.id != action.payload.id
      );
    },
    cancelEditing(state) {
      state.isEdited = false;
      state.editedId = "";
      state.editedItem = { name: "", quantity: "", id: "" };
    },
    filterItems(state, action) {
      state.filteredItems = state.items.filter((item) =>
        item.name.includes(action.payload.text)
      );
    },
    changeIsFiltered(state, action) {
      state.isFiltered = action.payload.isFiltered;
      if (!state.isFiltered) {
        state.filteredItems = [];
      }
    },
  },
});

export const {
  addItem,
  editItem,
  removeItem,
  cancelEditing,
  filterItems,
  changeIsFiltered,
} = itemSlice.actions;

export default itemSlice.reducer;
