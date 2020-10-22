export default(state, action) => {
    switch(action.type) {
        case 'CREATE_ARTICLE':
        return {
            ...state,
            article: [...state.article, action.payload]
        };
        case 'DELETE_ARTICLE':
            return {
                ...state,
                article: state.article.filter(article => article.id !== action.payload)
            };
        case 'EDIT_ARTICLE':
            const updatedArticle = action.payload
            const updatedArticles = state.article.map(art => {
                if(art.id == updatedArticle.id) {
                    return updatedArticle
                }
                return art
            });
            return {
                ...state,
                article: updatedArticle
            }
        default: return state
    }
}