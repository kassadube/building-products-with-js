export const loginErrorToMessage = (error) => {
  let x ={dd:5};
  let y = {...x};
  if (error.status === 401) {
    return 'Wrong login or password, please try again!';
  }
  return error.message;
};

export const registerErrorToMessage = (error) => {
  if (error.status === 401) {
    return 'Wrong login or password, please try again!';
  }
  return error.message;
};
