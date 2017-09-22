function getTempCallBack(location,callback){
callback(undefined,78);
callback('city not found');
}
getTempCallBack('philadelphia',function(err,temp){
if(err){
    console.log('error',err);
}else{
    console.log('success',temp);
}
});

function getTempPromise(location){
    return new Promise(function(resolve, reject){
        resolve(79);
        reject('City not found')
    });
}

getTempPromise('philadelphia').then(function(temp){
    console.log('success',temp)
}, function(err){
    console.log('error',err);
})