//Creamos la clase Product donde estructuramos lo que va a contener cada producto.

class Product {
  constructor(id, title, photo, category, price, stock) {
    this.id = id;
    this.title = title;
    this.photo = photo;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
}

// Creamos el ProductManager para gestionar la creación, lectura, acutalización y eliminación con sus respectivos metodos.

class ProductManager {
    #products = [] 
    productIdCounter = 1;
  
  // Crear nuevo producto
  create(data) {
    const newProduct = new Product(
      this.productIdCounter++,
      data.title,
      data.photo,
      data.category,
      data.price,
      data.stock
    );
    this.#products.push(newProduct);
    return newProduct;
  }

  // Leer los productos creados
  read() {
    return this.#products;
  }

  // Buscar / Leer un producto por id
  readOne(id) {
    return this.#products.find((product) => product.id === id);
  }

  // Actualizar un producto
  update(id, newData) {
    const productToUpdate = this.#products.find((product) => product.id === id);
    if (productToUpdate) {
      Object.assign(productToUpdate, newData);
      return productToUpdate;
    }
    return null;
  }

  // Eliminar un producto.
  destroy(id) {
    this.#products = this.#products.filter((product) => product.id !== id);
  }
}

//Creamos la clase User donde estructuramos la información que vamos a tener de cada usuario.

class User {
  constructor(id, photo, email, password, role) {
    this.id = id;
    this.photo = photo;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}

// Creamos el UserManager para gestionar la creación, lectura, acutalización y eliminación con sus respectivos metodos.

class UserManager {
  constructor() {
    this.users = [];
    this.userIdCounter = 1;
  }

  //Nuevo Usuario
  create(data) {
    const newUser = new User(
      this.userIdCounter++,
      data.photo,
      data.email,
      data.password,
      data.role
    );
    this.users.push(newUser);
    return newUser;
  }

  //Leer los usuarios creados
  read() {
    return this.users;
  }

  // Buscar / Leer un usuario por id
  readOne(id) {
    return this.users.find((user) => user.id === id);
  }

  // Actualizar usuario con nueva información

  update(id, newData) {
    const userToUpdate = this.users.find((user) => user.id === id);
    if (userToUpdate) {
      Object.assign(userToUpdate, newData);
      return userToUpdate;
    }
    return null;
  }

  // Eliminar Usuario

  destroy(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

// Definimos dos usuarios y cinco productos

const productManager = new ProductManager();
const userManager = new UserManager();

const usersData = [
  {
    photo: "ruta_imagen_usuario_1.jpg",
    email: "usuario1@example.com",
    password: "contraseña123",
    role: "cliente",
  },
  {
    photo: "ruta_imagen_usuario_2.jpg",
    email: "usuario2@example.com",
    password: "contraseña456",
    role: "admin",
  },
];

const productsData = [
  {
    title: "Producto 1",
    photo: "ruta_imagen_1.jpg",
    category: "Categoria 1",
    price: 10.99,
    stock: 100,
  },
  {
    title: "Producto 2",
    photo: "ruta_imagen_2.jpg",
    category: "Categoria 2",
    price: 20.99,
    stock: 50,
  },
  {
    title: "Producto 3",
    photo: "ruta_imagen_3.jpg",
    category: "Categoria 1",
    price: 15.99,
    stock: 80,
  },
  {
    title: "Producto 4",
    photo: "ruta_imagen_4.jpg",
    category: "Categoria 2",
    price: 25.99,
    stock: 30,
  },
  {
    title: "Producto 5",
    photo: "ruta_imagen_5.jpg",
    category: "Categoria 1",
    price: 12.99,
    stock: 120,
  },
];

usersData.forEach((userData) => userManager.create(userData));
productsData.forEach((productData) => productManager.create(productData));

// Mostrar productos y usuarios

console.log("Productos:");
productManager.read().forEach((product) => {
  console.log(
    `ID: ${product.id}, Título: ${product.title}, Precio: ${product.price}, Stock: ${product.stock}`
  );
});

console.log("\nUsuarios:");
userManager.read().forEach((user) => {
  console.log(`ID: ${user.id}, Email: ${user.email}, Rol: ${user.role}`);
});

// Acá eliminamos el usuaruio con id "2" y mostramos nuevamentame en consola que fué eliminado del Array.
userManager.destroy(2);

console.log("\nUsuarios actualizados luego de eliminar el usuario con id 2:");
userManager.read().forEach((user) => {
  console.log(`ID: ${user.id}, Email: ${user.email}, Rol: ${user.role}`);
});

// Aquí actualizamos la información del producto con id 3 con un valor de precio nuevo.

productManager.update(3, {
  title: "Producto 3",
  photo: "ruta_imagen_3.jpg",
  category: "Categoria 1",
  price: 28.99,
  stock: 80,
});

console.log("\nProducto id 3 con precio actualizado:");
productManager.read().forEach((product) => {
  console.log(
    `ID: ${product.id}, Título: ${product.title}, Precio: ${product.price}, Stock: ${product.stock}`
  );
});
