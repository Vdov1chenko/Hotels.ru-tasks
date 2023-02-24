class Product {
    constructor(name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
    }
  }
  
const products = [
  new Product("Product 1", 10, 1, "Pen"),
  new Product("Product 2", 20, 5, "Sneakers"),
  new Product("Product 3", 30, 8, "Glasses"),
  new Product("Product 4", 40, 15, "Something abc"),
];
  
export function filterProducts(query) {
  const parts = query.split("&");
  return products.filter((product) => {
    return parts.every((part) => {
      const [field, operator, value] = part.split("-");
      switch (operator) {
        case "contains":
          return product[field].includes(value);
        case "starts":
          return product[field].startsWith(value);
        case "ends":
          return product[field].endsWith(value);
        case "<":
          return product[field] < Number(value);
        case "=":
           return product[field] === Number(value);
        case ">":
          return product[field] > Number(value);
        case "<=":
          return product[field] <= Number(value);
        case ">=":
          return product[field] >= Number(value);
        default:
          return false;
        }
      });
    });
  }