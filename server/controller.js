module.exports = {
  registerUser: (req, res, next) => {
    const { username, password } = req.body;
    const { dbInstance } = req.app.get("db");

    dbInstance
      .create_new_user([userName, password])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(console.log);
  }
};
