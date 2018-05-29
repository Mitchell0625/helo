module.exports = {
  registerUser: (req, res, next) => {
    const { username, password } = req.body;
    const dbInstance = req.app.get("db");
    // console.log(username, password);

    if (!req.session.user) {
      dbInstance
        .create_new_user([
          username,
          password,
          `https://robohash.org/${username}`
        ])
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
    console.log(req.body);
    const { search } = req.query;
    const { id } = req.params;
    console.log("id, title:", id, search);
    dbInstance
      .get_posts([id])
      .then(posts => {
        res.status(200).json(posts);
        // if (posts && search) res.status(200).json(posts);
      })
      .catch(e => console.log(e));
  },
  getAPost: (req, res) => {
    const dbInstance = req.app.get("db");
    const { postid } = req.params;

    dbInstance
      .get_a_post([postid])
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(e => console.log(e));
  },
  makePost: (req, res) => {
    const dbInstance = req.app.get("db");
    const { userid } = req.params;
    const { title, img, content } = req.body;
    dbInstance
      .make_post([title, img, content, userid])
      .then(() => res.status(200).json())
      .catch(e => console.log(e));
  }
};
