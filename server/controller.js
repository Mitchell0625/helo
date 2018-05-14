module.exports = {
  registerUser: (req, res, next) => {
    const { username, password } = req.body;
    const { dbInstance } = req.app.get("db");

    dbInstance.create_new_user([userName, password]).then(;
  }
};
