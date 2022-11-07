const User= require('../model/User');

exports.user = (req, res) => {
    console.log(User.userInfo()); //{회원정보가 담겨있다}
    res.render('user', {userInfo: User.userInfo()});
};



