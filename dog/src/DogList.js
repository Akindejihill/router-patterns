export default function DogList({dogs}){

    const list = dogs.map(dog => (
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
            ))

    return list;
}
