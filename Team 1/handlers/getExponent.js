module.export = function getExponent(req, res) {
    try {
        var int = parseInt(req.params.integer, 10)
        var exponent = int * int
        res.status(200)
        res.send({"integer": int, "exponent": exponent})
    } catch (error) {
        res.status(500);
        res.send({"error" : "eRroR ErroR ErROr"})
    }
}