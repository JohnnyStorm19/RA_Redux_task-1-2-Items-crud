import "./App.css";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import ItemsList from "./components/ItemsList/ItemsList";

function App() {
  return (
    <div className="max-w-xl mx-auto">
      <Filter />
      <Form />
      <ItemsList />
    </div>
  );
}

export default App;
