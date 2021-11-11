const updateText  = (str) => {
  if(str){
      return str[0].toUpperCase() + str.substring(1).toLowerCase()
  }
}

const updateNewsList = (state, action) => {
  const {type, payload} = action;

    if (state === undefined) {
      return {
        news: [],
        loading: true,
        error: null,
        // modal: null,
        // errorModal: false
      };
    }

    console.log(state, type)

    switch (type) {
      case 'REQUESTED':
            return{
                ...state.newsList,
                loading: true,
                error: null
            };

      case 'LOADED':
          const updateNews = payload.map(item => {
              return{
                  ...item,
                  title: updateText(item.title),
                  body: updateText(item.body)
              }
          })
         
          return {
            ...state.newsList,
            news: updateNews,
            loading: false,
            error: null,
          };

      case 'LOADED_NEWS_BY_ID':
        return {
          ...state.newsList,
          newsById: payload,
          loading: false,
          error: null,
        };

      case 'LOADED_COMENTS':
        const updateComents = payload.data.filter(element => {
          return element.postId == payload.id
        })
     
        return {
          ...state.newsList,
          comments: updateComents,
          loading: false,
          error: null,
        };
      
      case 'ERROR':
          return {
            ...state.newsList,
            news: [],
            loading: false,
            error: payload
          };

      case 'NEWS_REMOVED_FROM_CART':
        const itemIndex = state.newsList.news.findIndex(item => item.id === payload);
        return {
            ...state.newsList,
            news: [
                ...state.newsList.news.slice(0, itemIndex),
                ...state.newsList.news.slice(itemIndex + 1)
            ]
        }
  
      default:
        return state.newsList;
    }
  };
  
  export default updateNewsList
  