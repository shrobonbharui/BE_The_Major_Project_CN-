module.exports.home = function(req,res){
    console.log(req.cookies);
    res.cookie('hi', 34);
    return res.render('home',{
        taitle : "Home"
    });
}