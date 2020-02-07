module.export = function getExponent(req, res) {
    var integer = req.params.integer('integer');
    var exponent = integer * integer;

    if (error) {
        res.status(500);
    } else {
        res.status(200);
    }
    res.send({"integer": integer, "exponent": exponent});
}