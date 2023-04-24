const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/home')
});

router.route('/home')
.get(function(req,res){
    res.json({
        name:"farhan",
        status:"user"
    })
})

module.exports = router