import {useState, useEffect} from 'react';
import {Link, Outlet} from 'react-router-dom';

export default function SharedLayout({buttons}){
    return (
        <div className="App">
            <header>
                <h1>Welcome to the color factory</h1>
                <div>
                    <nav>
                        {buttons}
                    </nav>
                </div>
            </header>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}