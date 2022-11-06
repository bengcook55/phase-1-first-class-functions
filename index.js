function receivesAFunction(callBack){
    return callBack();
}

function returnsANamedFunction(){
   return returnsANamedFunction;
}

function returnsAnAnonymousFunction(){
   return () => {
    console.log('unnamed fn');
   }
}
