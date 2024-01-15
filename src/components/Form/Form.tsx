import { useEffect, useState } from "react";
import { addItem, cancelEditing } from "../../store/itemSlice";
import Button from "../UI/Button";
import MyInput from "../UI/Input";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Form = () => {
  const [formData, setFormData] = useState<{ name: string; quantity: string }>({
    name: "",
    quantity: "",
  });
  const dispatch = useAppDispatch();
  const isEdited = useAppSelector((state) => {
    return state.items.isEdited;
  });
  const editedItem = useAppSelector((state) => {
    return state.items.editedItem;
  });

  useEffect(() => {
    if (isEdited) {
      setFormData({
        name: editedItem.name,
        quantity: editedItem.quantity,
      });
    }
  }, [editedItem.name, editedItem.quantity, isEdited]);

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEdited) {
      dispatch(addItem({ item: formData }));
    } else {
      dispatch(
        addItem({ item: { ...formData, id: new Date().toISOString() } })
      );
    }
    setFormData({
      ...formData,
      name: "",
      quantity: "",
    });
  };

  const onReset = () => {
    setFormData({
      ...formData,
      name: "",
      quantity: "",
    });

    dispatch(cancelEditing());
  };

  const onNameChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      name: e.currentTarget.value,
    });
  };
  const onQuantityChange = (e: React.SyntheticEvent<HTMLInputElement>) => {

    setFormData({
      ...formData,
      quantity: Number(e.currentTarget.value) < 0 ? '0' : e.currentTarget.value,
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-stretch justify-center gap-x-2 w-full mx-auto mb-4"
    >
      <MyInput
        onChange={(e: React.SyntheticEvent<HTMLInputElement>) => onNameChange(e)}
        type="text"
        name="item-name"
        value={formData.name}
        placeholder="Type name..."
        required={true}
      />
      <MyInput
        onChange={(e: React.SyntheticEvent<HTMLInputElement>) => onQuantityChange(e)}
        type="number"
        name="item-quantity"
        value={formData.quantity}
        placeholder="Add quantity"
        required={true}
      />
      <Button type="submit" btnText="Save" />
      <Button type="button" btnText="Cancel" onClick={onReset} />
    </form>
  );
};

export default Form;
