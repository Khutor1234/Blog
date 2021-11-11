import updateNewsList from './news'

const reducer = (state, action) => {
  return {
    newsList: updateNewsList(state, action),
  };
};

export default reducer;
