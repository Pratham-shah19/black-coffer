const model = require('../model/data');



//visualize all the respective data...
const getdataall = async(req,res)=>{
    const resp = await model.find({});
    res.status(200).json({nits:resp.length,result:resp});
}
const getspecific = async(req,res)=>{
   
    const findEl = req.query.q
    const resp = await model.find({});
    var groupby = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
        
       
      };
    const result = groupby(resp,findEl);
    for(e in result)
    {
        result[e] = result[e].length;
    }
    
    res.status(200).json({result});
}


//filtering accoridng to useer's need...
const getfiltered = async(req,res)=>{
    const filters = {};
    const resp = req.query;
    for(obj in resp)
    {
        
        filters[obj] = obj==="end_year"?{$gte:resp[obj]}:{$regex:resp[obj],$options:'i'}  

    }
    const result = await model.find(filters);
    res.status(200).json({result});
}

module.exports = {getspecific,getfiltered,getdataall};