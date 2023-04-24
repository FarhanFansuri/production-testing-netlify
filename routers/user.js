const express = require('express')
const router = express.Router()


router.route('/user')
.get(function(req,res){
     res.json({
        name:"user",
        status:"user"

     })
})
// .post()

// router.put('/user', (req, res) => {

// });


// router.get('/user-form', (req, res) => {
// res.render('pages/form',
// {
//     layout:'layouts/layout'
// }
// )
// });
module.exports = router