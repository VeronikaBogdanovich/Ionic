var AuthenticationController = require('./controllers/authentication'),
    PostController = require('./controllers/posts'),
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});


module.exports = function(app){

    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        postRoutes = express.Router(),
        todoRoutes = express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);
    authRoutes.get('/users', AuthenticationController.getUsers);
    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });

    //Post Routes
    apiRoutes.use('/posts',postRoutes);

    postRoutes.get('/:username', PostController.getPostsByUsername);
    postRoutes.get('/', PostController.getPosts);
    postRoutes.post('/', PostController.createPost);
    postRoutes.get('/delete/:post_id', PostController.deletePost);
    // Set up routes
    app.use('/api', apiRoutes);

};
