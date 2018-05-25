SELECT p.id, p.title, p.img, content, u.username, u.id, u.profile_pic FROM posts p JOIN users u ON p.author_id=u.id 
WHERE u.id=$1 AND p.title LIKE '%$2%';