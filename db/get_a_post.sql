SELECT p.img, p.title, p.content, u.username, u.profile_pic FROM posts p
JOIN users u ON p.author_id=u.id 
WHERE p.id=$1;