import uuid from 'uuid/v1';
import superagent from 'superagent';

export const categorySet = (categorys) => ({
  type: 'CATEGORY_SET',
  payload: categorys,
});

export const categoryCreate = (category) => {
  category.id = uuid();
  category.timestamp = new Date();
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const categoryUpdate = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};


export const categoryDelete = (category) => ({
  type: 'CATEGORY_DELETE',
  payload: category,
});

export const categoryReset = () => ({
  type: 'CATEGORY_RESET',
});

export const categorysFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/categorys`)
    .then(res => {
      dispatch(categorySet(res.body));
      return res;
    });
};

export const categoryCreateRequest = (category) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/categorys`)
    .send(category)
    .then(res => {
      dispatch(categoryCreate(res.body));
      return res;
    });
};

export const categoryDeleteRequest = (category) => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/categorys/${category._id}`)
    .then(res => {
      dispatch(categoryDelete(res.body));
      return res;
    });
};
