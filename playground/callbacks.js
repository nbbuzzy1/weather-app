const getUser = (id, callback) => {
  const user = {
    id,
    name: 'Vikra'
  };
  setTimeout(() => {
    callback(user);
  }, 3000)
};

getUser(31, (userObject) => {
  console.log(userObject)
});

// kh0VX4AjrfPVGpCXwkEIJD8Lgq80XQly