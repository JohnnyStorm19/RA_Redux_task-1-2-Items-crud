import { useAppSelector } from "../../hooks/hooks";
import Item from "../Item/Item";

const ItemsList = () => {
  const items = useAppSelector((state) => state.items.items);
  const filteredItems = useAppSelector((state) => state.items.filteredItems);
  const isFiltered = useAppSelector((state) => state.items.isFiltered);

  return (
    <div className="flex gap-y-3 flex-col rounded">
      {items.length > 0 && filteredItems.length === 0 && !isFiltered && (
        <>
          {items.map((item, key) => {
            return <Item key={key} itemData={item} />;
          })}
        </>
      )}
      {(filteredItems.length > 0 || isFiltered) && (
        <>
          {filteredItems.map((item, key) => {
            return <Item key={key} itemData={item} />;
          })}
        </>
      )}
    </div>
  );
};

export default ItemsList;
