import {Link, Outlet} from 'react-router-dom';

export default function SharedLayout({dogs}){

    const links = dogs.map(dog => (
        <li key={dog.name}>
            <Link to={`/dogs/${dog.name}`}><button>{dog.name}</button></Link>
        </li>
    )
        
    );

    return (
        <div>
            <nav>
                <ul>{links}</ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}