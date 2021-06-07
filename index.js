const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const ports = process.env.PORT || 3000;
const expressFileUpload = require('express-fileupload')
const errorHandler = require('./controllers/error');

// parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(expressFileUpload());
app.use(express.static('middleware'));  // to fetch data http://localhost:3000/uploads/200.png => http://localhost:3000/uploads/ + `filename`
// routes access
const usersRoutes = require('./routes/user.routes.js');
const gendersRoutes = require('./routes/gender.routes.js');
const rolesRoutes = require('./routes/role.routes.js');
const badgesRoutes = require('./routes/badge.routes.js')
const likesRoutes = require('./routes/like.routes.js')
const userRolesRoutes = require('./routes/role.user.routes.js');
const groupeRoutes = require('./routes/groupe.routes.js');
const userLikesRoutes = require('./routes/like.user.routes.js');
const userBadgesRoutes = require('./routes/badge.user.routes.js');
const groupUsersRoutes = require('./routes/groupe.user.routes.js');
const postRoutes = require('./routes/post.routes.js');

app.use('/users', usersRoutes);
app.use('/genders', gendersRoutes);
app.use('/roles', rolesRoutes);
app.use('/badges', badgesRoutes);
app.use('/likes', likesRoutes);
app.use('/user-roles', userRolesRoutes);
app.use('/groups', groupeRoutes);
app.use('/user-likes', userLikesRoutes);
app.use('/user-badges', userBadgesRoutes);
app.use('/user-groups', groupUsersRoutes);
app.use('/posts', postRoutes);


// error management
app.use(errorHandler.errorAuthorisation);
app.use('*', errorHandler.errorRouteHandler);


app.listen(ports, () => console.log(`Listening on port ${ports}`));

//sudo kill -9 $(sudo lsof -t -i:3000)
