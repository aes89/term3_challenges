function primeNumber(number) {
    const is_prime = new Array(number+1);

    for(let i=2; i<=number; i++)
    {
        is_prime[i]=true;
    }

    for(let i=2; i<=number; i++)
    {
        if(is_prime[i])
        {
            for(let j=i*2; j<=number; j+=i){
                is_prime[j]=false;
            }
        }
    }
    return is_prime.lastIndexOf(true);
}


test1 = 5
test2 = 1
test3 = 100

console.log(primeNumber(test1))
console.log(primeNumber(test2))
console.log(primeNumber(test3))


module.exports = primeNumber