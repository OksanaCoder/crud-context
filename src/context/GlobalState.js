import React,  {createContext, useReducer} from 'react'
import Reducer from './Reducer'

const initialState ={
    article : [
        {
            id: 1, 
            heading: 'Hello world', 
            subHeading: 'subHeading', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea odio aliquam nisi cum, aliquid reprehenderit corporis facilis quisquam quae, nam porro obcaecati mollitia beatae sed modi rerum maiores doloremque!', 
            category: 'science', 
            author: 'Oksi'
        }
    ]
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    function createArticle(article) {
        dispatch({
            type: 'CREATE_ARTICLE',
            payload: article
        })

    }
    function deleteArticle(id) {
        dispatch({
            type: 'DELETE_ARTICLE',
            payload: id
        })

    }
    function editArticle(article) {
        dispatch({
            type: 'EDIT_ARTICLE',
            payload: article
        })

    }
    return  (
    <GlobalContext.Provider value={{
        article: state.article,
        createArticle,
        deleteArticle, 
        editArticle
        }}>
     {children}
    </GlobalContext.Provider>)
}