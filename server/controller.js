module.exports = {
  registerUser: (req, res, next) => {
    const { username, password } = req.body;
    const dbInstance = req.app.get("db");
    // console.log(username, password);

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
        // console.log(response);
        res.status(200).json(response[0]);
      })
      .catch(e => console.log(e));
  },
  getPosts: (req, res) => {
    const dbInstance = req.app.get("db");

    const { title } = req.body;
    const { id } = req.params;
    console.log("id, title:", id, title);
    dbInstance
      .get_posts([id, title])
      .then(posts => {
        console.log(posts);
        res.status(200).json(posts);
        // if (posts && search) res.status(200).json(posts);
      })
      .catch(e => console.log(e));
  }
};
