import { useEffect, useState } from "react";
import MyInput from "../UI/Input";
import { changeIsFiltered, filterItems } from "../../store/itemSlice";
import { useAppDispatch } from "../../hooks/hooks";

const Filter = () => {
  const [filterText, setFilterText] = useState("");
  const dispatch = useAppDispatch();

  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setFilterText(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(filterItems({ text: filterText }));
    if (filterText.length > 0) {
      dispatch(changeIsFiltered({ isFiltered: true }));
    } else {
      dispatch(changeIsFiltered({ isFiltered: false }));
    }
  }, [filterText, dispatch]);

  return (
    <div className="mb-4">
      <MyInput
        type="text"
        name="filter"
        value={filterText}
        placeholder="Filter items..."
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
