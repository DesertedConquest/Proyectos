class Product {
  constructor(
    id,
    title,
    price,
    stock,
    images,
    onsale,
    supplier,
    colors,
    description
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    (this.stock = stock), (this.images = images);
    this.onsale = onsale;
    this._supplier = supplier;
    this.colors = colors;
    this.description = description;
  }
  get getSupplier() {
    return this._supplier;
  }
  set setSupplier(newName) {
    this._supplier = newName;
  }
  sellUnits(units) {
    if (this.stock < units) {
      console.log(
        "No hay stock suficiente: actual => " +
          this.stock +
          ", intento de venta => " +
          units
      );
    } else {
      this.stock = this.stock - units;
    }
  }
}

const prod1 = new Product(
  "0001",
  "cellphone",
  "5000",
  "100",
  "img1",
  "30%",
  "Samsumg",
  "red, black, gold",
  "descr1"
);
const prod2 = new Product(
  "0002",
  "computer",
  "7000",
  "20",
  "img2",
  "10%",
  "Asus",
  "black",
  "descr2"
);
const prod3 = new Product(
  "0003",
  "console",
  "2000",
  "200",
  "img3",
  "20%",
  "Xbox",
  "black, green",
  "descr3"
);
const prod4 = new Product(
  "0004",
  "scanner",
  "price",
  "stock",
  "img4",
  "50%",
  "Epson",
  "black, red, orange",
  "descr4"
);

const array = [prod1, prod2, prod3, prod4];

console.log(array);
console.log(array[2]);
console.log(array[array.length - 1].title);

const prod5 = new Product(
  "0005",
  "book",
  "250",
  "4000",
  "img5",
  "30%",
  "Snape",
  "red, blue, black, green",
  "descr5"
);
const prod6 = new Product(
  "0006",
  "pen",
  "1.2",
  "10000",
  "img6",
  "20%",
  "Faber",
  "red, blue, black",
  "descr6"
);

array.unshift(prod5);
array.push(prod6);

console.log("Se acaba de agregar el inicio==> " + array[0].title);
console.log(array[array.length - 1].title + " <== Se acaba agregar por detrás");

array.shift();
array.pop();

console.log(
  "Este vuelve a ser el primer producto ==>      " +
    array[1].title +
    "   -----   " +
    array[array.length - 1].title +
    "     <== Este vuevle a ser el último producto"
);

const imgArray = [
  (prod1.images = ["image1", "image2", "image3"]),
  (prod2.images = ["image1", "image2", "image3"]),
  (prod3.images = ["image1", "image2"]),
  (prod4.images = ["image1", "image2"]),
  (prod5.images = ["image1", "image2"]),
  (prod6.images = ["image1", "image2"]),
];

console.log(array[1].images) 