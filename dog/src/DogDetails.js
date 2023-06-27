import {useParams} from "react-router-dom";
export default function DogDetails({dogs}){
    const {dogName} = useParams();

    function getDog(name){
        let selected = {name: "No dog found with that name", age: null, src: null, facts: []};
        dogs.forEach(dog => {
            console.log("This dog: ", dog);
            console.log("Name: ", dog.name);
            if (dog.name === name){
                selected = dog;
            }
        });
        return selected;
    }

    const dog = getDog(dogName);
    console.log("Dog: ", dog);

    const content = (
        <div>
            <h1>{dog.name}</h1>
            <p>Age: {dog.age}</p>
            <img src={dog.src} alt={`Image of ${dog.name}`} />
            <ol>
                {
                    dog.facts.map(fact => <li>{fact}</li>)
                }
            </ol>
        </div>
    )

    return content;
}
