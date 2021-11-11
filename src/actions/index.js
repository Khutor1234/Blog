export const fetchRequested = () => {
  return{
      type: 'REQUESTED'
  }
};

export const fetchLoaded = (items) => {
  return {
      type: 'LOADED',
      payload: items
  }
};

export const fetchError = (error) => {
  return{
      type: 'ERROR',
      payload: error
  }
};

export const loadedNewsById = (item) => {
  return {
      type: 'LOADED_NEWS_BY_ID',
      payload: item
  }
};

const loadedComents = (data, id) => {
  return {
      type: 'LOADED_COMENTS',
      payload: {
        data,
        id
      }
  }
};

export const onDeleteItem = (id) => {
    return {
      type: 'NEWS_REMOVED_FROM_CART',
      payload: id
    };
};


export const onChangeItem = (item) => {
  return{
      type: 'ITEM_CHANGE',
      payload: item
  }
}

export const onTitleChange = (title) => {
  return{
      type: 'TITLE_CHANGE',
      payload: title
  }
}

export const onBodyChange = (body) => {
  return{
      type: 'BODY_CHANGE',
      payload: body
  }
}

export const onSaveChange = (changedItem) => {
  return{
      type: 'SAVE_CHANGE',
      payload: changedItem
  }
}

export const fetchNews = (service, dispatch) => () => {
    const data =JSON.parse(localStorage.getItem('news-store'));

    if(!data || data.newsList.news.length < 1){
      dispatch(fetchRequested())
      service.getNews()
          .then((data) => dispatch(fetchLoaded(data)))
          .catch((error) => dispatch(fetchError(error)))
    } else {
      dispatch(fetchLoaded(data.newsList.news))
      console.log(data.newsList.news.length)
    }  
}

export const fetchNewsById = (service, dispatch) => (id) => {
    dispatch(fetchRequested())
    service.getNewsById(id)
        .then((data) => dispatch(loadedNewsById(data)))
        .catch((error) => dispatch(fetchError(error))) 
    service.getComments()
        .then((data) =>  dispatch(loadedComents(data, id)))
}

