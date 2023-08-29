module.exports.proofile = function(req,res){
   return res.render('user',{
        taitle : "Proofile"
    });
    
};
const user = require('../models/user')

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

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_passwor){
        return res.redirect('back');
    };
    user.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){user.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign_in');
            });
        }else{
            return res.redirect('back');
        };

    });
}
// module.exports.create = function(req, res){
//     if (req.body.password != req.body.confirm_password){
//         return res.redirect('back');
//     }

//     user.findOne({email: req.body.email}, function(err, user){
//         if(err){console.log('error in finding user in signing up'); return}

//         if (!user){
//             user.create(req.body, function(err, user){
//                 if(err){console.log('error in creating user while signing up'); return}

//                 return res.redirect('/users/sign-in');
//             })
//         }else{
//             return res.redirect('back');
//         }

//     });
// }

module.exports.createSession = function(req,res){
    
}