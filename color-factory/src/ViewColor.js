import { useParams } from "react-router-dom";

export default function ViewColors({colors}){
    const {colorName} = useParams();

    function getColor(name){
        let selected = {name: "No color found with that name", hex: null};
        colors.forEach(color => {
            console.log("This color: ", color);
            console.log("Name: ", color.name);
            if (color.name === name){
                selected = color;
            }
        });
        return selected;
    }

    const color = getColor(colorName);
    console.log("Color: ", color);

    return (
        <div className="color_display" style={{backgroundColor : color.hex, height: '100vh'}}>
            This is {color.name}!  Enjoy.
        </div>
    );
}