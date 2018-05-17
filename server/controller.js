module.exports = {
  registerUser: (req, res, next) => {
    const { username, password } = req.body;
    const dbInstance = req.app.get("db");
    console.log(username, password);

    if (!req.session.user) {
      dbInstance
        .create_new_user([username, password])
        .then(response => {
          res.status(200).json(response[0]);
        })
        .catch(console.log);
    }
  },
  loginUser: (req, res) => {
    const dbInstance = req.app.get("db");
    const { username, password } = req.body;
    dbInstance
      .get_user([username, password])
      .then(response => {
        console.log(response);
        res.status(200).json(response[0]);
      })
      .catch(e => console.log(e));
  }
};
