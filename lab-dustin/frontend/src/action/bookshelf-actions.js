import superagent from 'superagent';

export const bookshelfSet = (bookshelves) => ({
  type: 'BOOKSHELF_SET',
  payload: bookshelves,
});

export const bookshelfCreate = (bookshelf) => ({
  type: 'BOOKSHELF_CREATE',
  payload: bookshelf,
});

export const bookshelfUpdate = (bookshelf) => ({
  type: 'BOOKSHELF_UPDATE',
  payload: bookshelf,
});

export const bookshelfDelete = (bookshelf) => ({
  type: 'BOOKSHELF_DELETE',
  payload: 'bookshelf',
});

export const bookshelfFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/bookshelves`)
    .then(res => {
      dispatch(bookshelfSet(res.body));
      return res;
    });
};

export const bookshelfCreateRequest = (bookshelf) => (dispatch) =>{
  return superagent.post(`${__API_URL__}/api/bookshelves`)
    .send(bookshelf)
    .then(res => {
      dispatch(bookshelfCreate(res.body));
      return res;
    });
};

export const bookshelfDeleteRequest = (bookshelf) => (dispatch) =>{
  return superagent.delete(`${__API_URL__}/api/bookshelves/${bookshelf._id}`)
    .then(res => {
      dispatch(bookshelfDelete(bookshelf));
      return res;
    });
};
