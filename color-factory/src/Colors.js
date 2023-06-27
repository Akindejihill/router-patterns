export default function Colors({colors}){
 
    const display = colors.map( color => <div style={{backgroundColor: color.hex, height:"2vh"}}>{color.name}</div>

    )


    return (
        <div>
            <h1>Here are the colors we have so far.</h1>
            {display}
        </div>
    )
    
}