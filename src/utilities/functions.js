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
