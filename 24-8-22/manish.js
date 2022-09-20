function coll(){
    a=function(){
        console.log('a')
        return this
    }
    b=function(){
        console.log('b')
    }
    // return this
}


coll().a()