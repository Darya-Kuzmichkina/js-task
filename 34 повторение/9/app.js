// Создай класс PrimeGenerator, метод get(n) возвращает первые n простых чисел.
// Пример: get(4) → [2, 3, 5, 7].
// Создай наследника PrimeSquares, метод get(n) возвращает квадраты этих чисел.
// Пример: get(4) → [4, 9, 25, 49].
class PrimeGenerator {
    get(n) {
        const primes = [];
        let num = 2; 

        while (primes.length < n) {
            let isPrime = true;

          
            for (let i = 2; i * i <= num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break; 
                }
            }

            if (isPrime) {
                primes.push(num); 
            }
            num++;
        }
        return primes;
    }
}

class PrimeSquares extends PrimeGenerator {
    get(n) {
        const primes = super.get(n);
        return primes.map(prime => prime * prime); 
    }
}

const primeSquares = new PrimeSquares();
console.log(primeSquares.get(4)); 