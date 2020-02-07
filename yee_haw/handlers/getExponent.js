"use strict"

function getExponent(req, res) {
  try {

    var integer = parseInt(req.params.integer, 10)
    var exponent = integer*integer
    return res.status(200).send({integer: integer, exponent: exponent})

  } catch (err) {

    return res.status(500).send({error: 'something blew up'})

  }
}

module.exports = {getExponent}
