import { BrowserRouter, Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Colors from "./Colors";
import SharedLayout from "./SharedLayout";
import NewColor from "./NewColor";
import ViewColor from "./ViewColor";
import "./App.css";

function App() {
    const [colors, setColors] = useState([
        {
            name: "Red",
            hex: "#FF0000",
        },
        {
            name: "Green",
            hex: "#00FF00",
        },
        {
            name: "Blue",
            hex: "#0000FF",
        },
    ]);

    const [buttons, setButtons] = useState([
        <li><Link to="/colors/Red"><button>Red</button></Link></li>,
        <li><Link to="/colors/Green"><button>Green</button></Link></li>,
        <li><Link to="/colors/Blue"><button>Blue</button></Link></li>,
        <li><Link to="/colors/new">Add a color</Link></li>
    ]);

    function addColor(newName, newHex) {
        setColors((list) => {
            list.push({
                name: newName,
                hex: newHex,
            });
            console.log("New color List: ", list);
            return list;
        });

        setButtons(() => {
            let newButtons = colors.map( color => 
                    <li><Link to={`/colors/${color.name}`}><button>{color.name}</button></Link></li>
            );

            newButtons.push(<li><Link to="/colors/new">Add a color</Link></li>);
            return newButtons;
        });
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/colors" />} />
                <Route path="/colors" element={<SharedLayout buttons={buttons} />}>
                    <Route index element={<Colors colors={colors} />} />
                    <Route path=":colorName" element={<ViewColor colors={colors} />} />
                    <Route
                        path="new"
                        element={<NewColor addColor={addColor} />}
                    />
                    <Route path="*" element={<Navigate to="/colors" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
