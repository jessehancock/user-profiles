var users = [
  {
    name: 'P',
    password: 'p',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login : function(req, res, next){
    for(var i = 0; i < users.length; i++){
      if(req.body.userName === users[i].name && req.body.password === users[i].password){
        req.session.currentUser = users[i];
        return res.send({ userFound: true });
      }
    }
    return res.send({ userFound: false });
  }
}
