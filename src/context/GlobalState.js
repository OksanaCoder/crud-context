import React,  {createContext, useReducer} from 'react'
import Reducer from './Reducer'

const initialState ={
    article : [
        {id: 1, heading: 'Hello world', subHeading: 'mew', description: 'bla bla bla', category: 'science', author: 'Serg'}
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