// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(20),
//     password VARCHAR(20),
//     profile_pic TEXT);

// CREATE TABLE posts (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(45),
//     img TEXT,
//     content TEXT,
//     author_id INTEGER REFERENCES users (id))

//Dummy Data

// -- INSERT INTO users (username, password, profile_pic)
// -- VALUES ('topdog', 'bosshog', 'https://pbs.twimg.com/profile_images/799072661670416384/IhTiEogQ_400x400.jpg'),
// -- ('tiny242','tweettweet', 'https://upload.wikimedia.org/wikipedia/commons/3/32/House_sparrow04.jpg')

// INSERT INTO posts (title, img, content, author_id)
// VALUES ('My days in Dallas', 'http://dallascityhall.com/SpotLight/Dallas-Bond-Program-Web.jpg', 'Today marks my last day in Dallas. It will be hard to say goodbye, but I do miss my own bed', 1),
// ('Lake Visit', 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350', 'Visited the lake this weekend. So many mosquitoes', 2)
