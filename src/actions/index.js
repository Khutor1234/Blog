export const fetchRequested = () => {
  return{
      type: 'REQUESTED'
  }
};

export const fetchError = (error) => {
  return{
      type: 'ERROR',
      payload: error
  }
};

export const fetchLoadedNews = (items) => {
  return {
      type: 'LOADED_NEWS',
      payload: items
  }
};

export const fetchLoadedComents = (item) => {
  return {
      type: 'LOADED_ALL_COMMENTS',
      payload: item
  }
};

export const fetchLoadedUsers = (items) => {
  return {
      type: 'LOADED_USERS',
      payload: items
  }
};

export const loadedNewsById = (item) => {
  return {
      type: 'LOADED_NEWS_BY_ID',
      payload: item
  }
};

const loadedComents = (comments) => {
  return {
      type: 'LOADED_COMENTS',
      payload: comments
  }
};

export const onDeleteItem = (id) => {
    return {
      type: 'NEWS_REMOVED_FROM_CART',
      payload: id
    };
};

export const newTitleChange = (title) => {
  return{
      type: 'NEW_TITLE_CHANGE',
      payload: title
  }
}

export const newBodyChange = (body) => {
  return{
      type: 'NEW_BODY_CHANGE',
      payload: body
  }
}

export const onAddNewItem = (newItem) => {
  return{
      type: 'ADD_NEW_ITEM',
      payload: newItem
  }
}

export const itemChange = (item) => {
  return{
    type: 'CHANGE_ITEM',
    payload: item
  }
}

export const saveChange = (item) => {
  return{
    type: 'SAVE_CHANGE',
    payload: item
  }
}

export const titleChange = (text) => {
  return{
      type: 'TITLE_CHANGE',
      payload: text
  }
}


export const bodyChange= (text) => {
  return{
      type: 'BODY_CHANGE',
      payload:  text
  }
}

export const filter  = (type, value) => {
  return{
      type: 'FILTER',
      payload:{ 
        type,
        value
      }
  }
}

export const resetFilter = () => {
  return{
      type: 'RESET_FILTER'
  }
}

export const fetchNews = (service, dispatch) => () => {
    const data = JSON.parse(localStorage.getItem('news-store'));

    if (data === null){
      dispatch(fetchRequested())
      service.getUsers()
        .then((data) => dispatch(fetchLoadedUsers(data)))
        .catch((error) => dispatch(fetchError(error)))
      service.getComments()
        .then((data) => dispatch(fetchLoadedComents(data)))
        .catch((error) => dispatch(fetchError(error)))
      service.getNews()
          .then((data) => dispatch(fetchLoadedNews(data)))
          .catch((error) => dispatch(fetchError(error)))
    } else {
      dispatch(fetchLoadedComents(data.newsList.allComments))
      dispatch(fetchLoadedUsers(data.newsList.users))
      dispatch(fetchLoadedNews(data.newsList.news))
    }  
}

export const fetchNewsById = (service, dispatch) => (id) => {
    const data = JSON.parse(localStorage.getItem('views'));
    data ? localStorage.setItem('views',JSON.stringify([...data,id])):
    localStorage.setItem('views',JSON.stringify([id]))
    dispatch(fetchRequested())
    dispatch(loadedNewsById(id))
    service.getComments()
        .then((data) =>  {
          const comments = data.filter(element => {
            return element.postId == id
          })
          dispatch(loadedComents(comments))  
        })
}

