import {createContext, useContext, useEffect, useState} from "react";


const AppContext = createContext({
    items: [],
    createItem: (item) => {},
    getItem: (id) => {},
    updateItem: (item) => {} 
});


function Store({children}) {

    const [items, setItems] = useState([]);


    function createItem(item) {
        const temp = [...items];
        temp.push(item);

        setItems(temp);
    }

    function getItem(id) {
        const item = items.find(item => item.id === id);

        return item;
    }

    function updateItem(item) {
        const index = items.find(item => item.id === id);

        return item;
    }

    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );
}

export default Store;