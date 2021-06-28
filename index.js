require('dotenv').config()
const express = require('express');
const app = express();
const ports = process.env.PORT || 3000;
const errorHandler = require('./controllers/error');
const extractToken = require('./middlewares/extractToken');
const requireAuth = require('./middlewares/requireAuth');

// parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(extractToken);

// routes access
const usersRoutes = require('./routes/user.routes.js');
const gendersRoutes = require('./routes/gender.routes.js');
const rolesRoutes = require('./routes/role.routes.js');
const badgesRoutes = require ('./routes/badge.routes.js')
const likesRoutes = require ('./routes/like.routes.js')
const userRolesRoutes = require('./routes/role.user.routes.js');
const groupeRoutes = require('./routes/groupe.routes.js');
const userLikesRoutes = require('./routes/like.user.routes.js');
const userBadgesRoutes = require('./routes/badge.user.routes.js');
const groupUsersRoutes = require('./routes/groupe.user.routes.js');
const postRoutes = require('./routes/post.routes.js');
const authRoutes = require('./routes/auth.routes.js');


app.use('/users', requireAuth, usersRoutes);
app.use('/auth', authRoutes);
app.use('/genders', requireAuth, gendersRoutes);
app.use('/roles', requireAuth, rolesRoutes);
app.use('/badges', requireAuth, badgesRoutes);
app.use('/likes', requireAuth, likesRoutes);
app.use('/user-roles', requireAuth, userRolesRoutes);
app.use('/groups', requireAuth, groupeRoutes);
app.use('/user-likes', requireAuth, userLikesRoutes);
app.use('/user-badges', requireAuth, userBadgesRoutes);
app.use('/user-groups', requireAuth, groupUsersRoutes);
app.use('/posts', requireAuth, postRoutes);

console.log(`${process.env.JWT_PRIVATE_KEY}`)

// error management
app.use(errorHandler.errorAuthorisation);
app.use('*', errorHandler.errorRouteHandler);

app.listen(ports, () => console.log(`Listening on port ${ports}`));

//sudo kill -9 $(sudo lsof -t -i:3000)
