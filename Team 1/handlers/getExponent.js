function getExponent(req, res) {
    ;
    var integer = req.params.integer('integer');
    var exponent = integer * integer;

    if (exponent != null) {
        res.status(200);
    } else {
        res.status(500);
    }
    res.send({"integer": integer, "exponent": exponent});
}
module.export = {getExponent}