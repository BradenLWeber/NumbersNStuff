export const parseTitleToUrl = (title) => {
  return title
    .toLowerCase()
    .replaceAll(',', '')
    .replaceAll("'", '')
    .split(' ')
    .join('-');
};

export const getChildNodeNames = (level, text, nodes) => {
  if (level === 3) {
    return [text.split(': ')[1]];
  } else if (level === 2) {
    return nodes.map((n) => n.text.split(': ')[1]);
  } else if (level === 1) {
    const childNodes = [];
    nodes.forEach((n) => {
      childNodes.push(...n.nodes.map((n) => n.text.split(': ')[1]));
    });
    return childNodes;
  }
};

export const validateEmail = (email) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export const toBaseX = (num, base) => {
  if (num === 0) {
    return [0];
  }

  const result = [];

  while (num > 0) {
    const digit = num % base;
    result.unshift(digit); // Add digit to the beginning of the array
    num = Math.floor(num / base);
  }

  return result;
};

export const baseToString = (nums) => {
  const digits =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (Math.max(...nums) > digits.length) {
    return nums.map((num) => `(${num})`).join('');
  }
  return nums.map((num) => digits[num]).join('');
};

export function findDivisors(number) {
  const divisors = [];
  const sqrt = Math.sqrt(number);

  for (let i = 1; i <= sqrt; i++) {
    if (number % i === 0) {
      divisors.push(i);

      // If the divisor is not the square root, add the corresponding divisor on the other side.
      if (i !== sqrt) {
        divisors.push(number / i);
      }
    }
  }

  return divisors.sort((a, b) => {
    return a - b;
  });
}

export function isNullish(o) {
  return o === null || o === undefined || o !== o;
}

export const sieveOfAtkin = (start, limit, getAllNums = false) => {
  // Adjust the sieve size to cover the specified range
  const sqrtLimit = Math.sqrt(limit);

  // Initialize the sieve array with false values
  const sieve = Array(limit + 1).fill(false);

  // Part 1: Mark sieve values for specific quadratic forms
  for (let x = 1; x <= sqrtLimit; x++) {
    for (let y = 1; y <= sqrtLimit; y++) {
      const n = 4 * x * x + y * y;
      if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
        sieve[n] = !sieve[n];
      }

      const m = 3 * x * x + y * y;
      if (m <= limit && m % 12 === 7) {
        sieve[m] = !sieve[m];
      }

      const o = 3 * x * x - y * y;
      if (x > y && o <= limit && o % 12 === 11) {
        sieve[o] = !sieve[o];
      }
    }
  }

  // Part 2: Mark sieve values for multiples of squares
  for (let i = 5; i <= sqrtLimit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i * i) {
        sieve[j] = false;
      }
    }
  }

  // Mark 2 and 3 as prime
  sieve[2] = sieve[3] = true;

  if (getAllNums) {
    const allNums = [];
    for (let i = Math.max(1, start); i <= limit; i++) {
      allNums.push({ num: i, isPrime: sieve[i] });
    }
    return allNums;
  } else {
    // Collect the prime numbers within the specified range
    const primes = [];
    for (let i = Math.max(2, start); i <= limit; i++) {
      if (sieve[i]) {
        primes.push(i);
      }
    }
    return primes;
  }
};

export const sumArray = (arr) => {
  return arr.reduce((partialSum, a) => partialSum + a, 0);
};

export const strCount = (str, chars) => {
  return (str.match(new RegExp(chars, 'g')) || []).length;
};
