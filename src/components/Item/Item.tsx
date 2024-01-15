import { editItem, removeItem } from "../../store/itemSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IItem } from "../../models";
import EditIcon from "../UI/Icons/EditIcon";
import RemoveIcon from "../UI/Icons/RemoveIcon";

const Item = ({ itemData }: { itemData: IItem }) => {
  const dispatch = useAppDispatch();
  const isEdited = useAppSelector((state) => {
    return state.items.isEdited;
  });

  return (
    <div className="flex justify-between py-2 px-3 text-left border-collapse border border-blue-600 rounded-lg">
      <p>
        {itemData.name}: {itemData.quantity}
      </p>
      <div className="flex">
        <span
          className="active:scale-90"
          onClick={() => {
            console.log("clicked edit!");
            dispatch(editItem({ id: itemData.id }));
          }}
        >
          <EditIcon />
        </span>
        <span
          className={`${isEdited ? "active:scale-1" : "active:scale-90"}`}
          onClick={() => {
            console.log("clicked deleted!");
            dispatch(removeItem({ id: itemData.id }));
          }}
        >
          <RemoveIcon isEdited={isEdited} />
        </span>
      </div>
    </div>
  );
};

export default Item;
