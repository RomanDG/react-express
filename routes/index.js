'use strict'

let result = require('../components').default;

exports.index = (req, res)=>{
    res.send(result);
}
