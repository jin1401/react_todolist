import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Todolist from "./components/Todolist/Todolist";
import DarkModeProvider from "./components/Context/DarkModeProvider";

const filters = ["all", "active", "completed"];

function App() {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <DarkModeProvider>
            <Header
                filters={filters}
                filter={filter}
                onFilterChange={setFilter}
            />
            <Todolist filter={filter} />
        </DarkModeProvider>
    );
}

export default App;
