const User = require('../models/user')

module.exports.proofile = function(req,res){
   return res.render('user',{
        taitle : "Proofile"
    });
    
};

// render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        taitle: "codeial | sign Up"
    })
};

// render the sign In page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        taitle: "codeial | sign In"
    })
};

// sign up and create a session for the user
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    };
    User.findOne({email: req.body.email}).then(function(err,user){
        if(err){console.log('error in finding user in signing up'); return}
       
       else if (!user){User.create(req.body).then(function(user){
            console.log(user);

            // if(err){console.log('error in creating user while signing up'); return};

            return res.redirect('/users/sign_in')
            });
       }else{
            return res.redirect('back');
        };
    });

;
}

// sign in and create a session for the user
module.exports.createSession = function(req,res){
    // steps to authenticate
    // find the user
    User.findOne({email: req.body.email}).then(function(user){


        // if(err){console.log('error in finding user in signing in'); return}



        // handle user found
        if (user){
            // handle password which doesn't match
            if (user.password != req.body.password){
                return res.redirect('back');
            }

            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/proofile');

        }
        else{
            // handle user not found

            return res.redirect('back');
        }


    });
    
}