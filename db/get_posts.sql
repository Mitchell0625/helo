SELECT p.id, p.title, p.content, u.username, u.id, u.profile_pic FROM posts p JOIN users u ON p.author_id=u.id 
WHERE u.id=$1;