'use strict';
class Product {
  //Valores por defecto
  constructor(description, price, stock) {
    this.description = description;
    this.price = price;
    this.stock = stock;
  }
  //Acciones
  showInfo() {
    alert(`Descripción: ${this.description}`);
    alert(`Precio: ${this.price}`);
    alert(`Stock: ${this.stock}`);
  }

  decrementStock(quantity) {
    if (this.stock >= quantity) {
      this.stock -= quantity;
      alert(`Se disminuyó el stock a ${this.stock} unidades`);
    } else {
      alert(`Insuficiente stock`);
    }
  }

  incrementStock(quantity) {
    this.stock += quantity;
    alert(`Se aumentó el stock a ${this.stock} unidades`);
  }

  updatePrices(newPrice) {
    this.price = newPrice;
    alert(`Precio actualizado de ${this.description} a ${newPrice}`);
  }
}

//Exportar la clase - creación de un objeto
let product = new Product('Audífonos Astro a50 x', 500 + '$', 10);
//Llamar a los métodos
product.showInfo();
product.decrementStock(4);
product.incrementStock(6);
product.updatePrices(550 + '$');
