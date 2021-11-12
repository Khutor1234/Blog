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
        newItem: {}
      };
    }

    switch (type) {
      case 'REQUESTED':
        return{
            ...state.newsList,
            loading: true,
            error: null
        };

      case 'ERROR':
        return {
          ...state.newsList,
          loading: false,
          error: payload
        };

      case 'LOADED_USERS':
        return {
          ...state.newsList,
          users: payload,
          loading: false,
          error: null,
        };

      case 'LOADED_NEWS':
          const updateNews = payload.map(item => {
             const user = state.newsList.users.find(el => el.id === item.userId)
              return{
                  ...item,
                  title: updateText(item.title),
                  body: updateText(item.body),
                  user: user,
              }
          })
         
          return {
            ...state.newsList,
            news:  updateNews.sort((a, b) => a.id - b.id),
            loading: false,
            error: null,
          };

      case 'LOADED_ALL_COMMENTS':
        return {
          ...state.newsList,
          allComments: payload,
          loading: false,
          error: null,
        };

      case 'LOADED_NEWS_BY_ID':
        const newsById = state.newsList.news.find(element => {
          return element.id == payload
        })

        return {
          ...state.newsList,
          newsById: newsById,
          loading: false,
          error: null,
        };

      case 'LOADED_COMENTS':
        return {
          ...state.newsList,
          comments: payload,
          loading: false,
          error: null,
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

      case 'NEW_TITLE_CHANGE':
        return {
          ...state.newsList,
          newItem: {
            ...state.newsList.newItem,
            title: payload
          }
      }

      case 'NEW_BODY_CHANGE':
        return {
          ...state.newsList,
          newItem: {
            ...state.newsList.newItem,
            body: payload
          }
      }

      case 'ADD_NEW_ITEM':
        const newItem = {
          id: Date.now(),
          userId: 333,
          title: payload.title,
          body: payload.body
        }

        return {
          ...state.newsList,
          news: [
            ...state.newsList.news,
            newItem
          ]
        }

      case 'FILTER':
        let filteredNews = []
        if(payload.type === 'comments'){
          const comments = state.newsList.news.map(item => {
            return{
              ...item,
              comments:  state.newsList.allComments.filter(el => el.postId == item.id).length
            }
          })
          filteredNews = comments.sort((a,b) => a.comments - b.comments)
        }
        if(payload.type === 'userId'){
          filteredNews = state.newsList.news.filter(item => item.userId == payload.value)
        }
        if(payload.type === 'resent'){
          const filtered = state.newsList.news.sort((a, b) => b.id - a.id)
          filteredNews = filtered.slice(0, payload.value)
        }
        if(payload.type === 'views'){
          const view = JSON.parse(localStorage.getItem('views'));
          let filteredView = []
          for(let i = 0; i < view.length; i++){
            const arrView = state.newsList.news.filter((item) => item.id == view[i])
            filteredView.push(...arrView)
          }
          filteredNews = filteredView.filter((set => item => !set.has(item.id) && set.add(item.id))(new Set()));    
        }
        
        return {
          ...state.newsList,
          filteredNews: filteredNews
        }

      case 'RESET_FILTER':
        return {
          ...state.newsList,
          filteredNews: null,
          news: state.newsList.news.sort((a, b) => a.id - b.id)
        }

      case 'CHANGE_ITEM':
        return {
          ...state.newsList,
          changedItem: payload
        }

      case 'TITLE_CHANGE':
        return {
          ...state.newsList,
          changedItem: {
            ...state.newsList.changedItem,
            title: payload
          }
        }

      case 'BODY_CHANGE':
        return {
          ...state.newsList,
          changedItem: {
            ...state.newsList.changedItem,
            body: payload
          }
        }

      case 'SAVE_CHANGE':
        const indexNews = state.newsList.news.findIndex(item => item.id === payload.id);
        return {
          ...state.newsList,
          filteredNews: null,
          news: [
              ...state.newsList.news.slice(0, indexNews),
              payload,
              ...state.newsList.news.slice(indexNews + 1)
          ]
        }

      default:
        return state.newsList;
    }
  };
  
  export default updateNewsList
  