function isPrime(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 var m=Math.sqrt(n);
 for (var i=2;i<=m;i++) if (n%i==0) return false;
 return true;
}

function primeList(N) {
  var list = [];
   for (var i = 2; i != N; ++i)
     if (isPrime(i)) list.push(i);
  return list;
}


var LIMIT = Math.pow(10, 2);
console.log(LIMIT);

var primes = primeList(LIMIT);
var maxSum = 0;
var maxRun = -1;


for(var i = 0; i < primes.length; i++){
    var sum = 0;
    //console.log(primes[primes.length - 1]);
    for(var j = i; j < primes.length; j++){
        sum += primes[j];
        if (sum > LIMIT){
					break;
                }
        else if (j - i > maxRun && sum > maxSum && isPrime(sum)) {
					maxSum = sum;
					maxRun = j - i;
	    }
        
    }
}

console.log("MAX SUM: " + maxSum);