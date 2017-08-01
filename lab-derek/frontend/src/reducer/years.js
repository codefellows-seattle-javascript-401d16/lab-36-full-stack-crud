let validateYear = (payload) => {
  if(!payload._id)
    throw new Error('VALIDATION ERROR: Year must have ._id');
  if(!payload.name || !payload.days || !payload.dayJan1)
    throw new Error('VALIDATION ERROR: Year requires name, days, and dayJan1 properties');
};

export default (state=[], action) => {
  let {type, payload} = action;
  switch(type){
  default:
    return state;
  }
};
