// 接口访问统计
module.exports = function(req,res,next){
    return function(){
        console.log(req.headers);
        next()
    }
}