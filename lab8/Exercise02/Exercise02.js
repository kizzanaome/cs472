/** 
 * const isPrime = (n) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return false;
    return n > 1;
};
  **/


const isPrime =(n) =>{
    return new Promise((resolve, reject)=>{
        if(n <= 1) return reject({prime:false})
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) reject({prime: false});
        }
        resolve({ prime:true});
    });
};



/**
     * console.log('start');
    isPrime1(7)
        .then(console.log)
        .catch(console.error);
    isPrime(7)
    await(console.log)
    console.log('end');
 **/

console.log("start")

const testPrime = async () =>{
    try{
        const result = await isPrime(7);
        console.log(result);
    } catch (error){
        console.log(error);
    }
}

testPrime();
console.log('end');