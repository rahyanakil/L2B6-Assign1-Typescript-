type CheckValue = string | number | boolean;
const formatValue = (value: CheckValue): CheckValue => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
};
type GetValue = string | any[];
const getLength = (getValue: GetValue): number => {
  if (typeof getValue === "string") {
    return getValue.length;
  } else {
    return getValue.length;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Books = {
  title: string;
  rating: number;
};

const filterByRating = (books: Books[]): Books[] => {
  return books.filter((book) => book.rating >= 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (user: User[]): User[] => {
  return user.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (myBook: Book): void => {
  console.log(
    `Title: ${myBook.title}, Author: ${myBook.author}, Published: ${
      myBook.publishedYear
    }, Available: ${myBook.isAvailable ? "Yes" : "No"}`
  );
};

type ArrayType = (number | string)[];

const getUniqueValues = (array1: ArrayType, array2: ArrayType): ArrayType => {
  const result: ArrayType = [];
  const exists = (value: number | string, arr: ArrayType): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  };
  for (let i = 0; i < array1.length; i++) {
    const value = array1[i];
    if (value !== undefined && !exists(value, result)) {
      result[result.length] = value;
    }
  }
  for (let i = 0; i < array2.length; i++) {
    const value = array2[i];
    if (value !== undefined && !exists(value, result)) {
      result[result.length] = value;
    }
  }

  return result;
};
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    let productTotal = product.price * product.quantity;
    if (product.discount) {
      productTotal *= 1 - product.discount / 100;
    }
    return total + productTotal;
  }, 0);
};
