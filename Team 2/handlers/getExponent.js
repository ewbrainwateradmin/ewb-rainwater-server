function getExponent(req, res)
{
    var num = parseInt(req.params.integer);
    myObj = { "integer":num, "exponent":num*num,};
    try
    {
        res.status(200);
        res.json(myObj);
    }
    catch
    {
        res.status(500);
    }
}
module.exports = {getExponent}