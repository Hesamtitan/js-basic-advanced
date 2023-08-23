const callBack = ()=>{
    console.log('call Back running')
}


const myFunction= (cb)=>{
   cb()
}

myFunction(callBack)