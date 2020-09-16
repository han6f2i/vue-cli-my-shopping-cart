/**
 * Mocking client-server processing
 */
// const _products = [
//   {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
//   {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
//   {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
// ]

export const apple = [
  {id: "APL0001", title: "iPhone 11 Pro (64G)", price: 35000, inventory: 2, spec: {capacity: "64G", chip: "A13 Bionic chip", display: "5.8-inch (diagonal) all-screen OLED"}},
  {id: "APL0002", title: "iPhone 11 Pro (256G)", price: 40000, inventory: 2, spec: {capacity: "256G", chip: "A13 Bionic chip", display: "5.8-inch (diagonal) all-screen OLED"}},
  {id: "APL0003", title: "iPhone 11 Pro (512G)", price: 45000, inventory: 2, spec: {capacity: "512G", chip: "A13 Bionic chip", display: "5.8-inch (diagonal) all-screen OLED"}},
  {id: "APL0004", title: "iPhone 11 Pro Max(64G)", price: 38000, inventory: 5, spec: {capacity: "64G", chip: "A13 Bionic chip", display: "6.5-inch (diagonal) all-screen OLED"}},
  {id: "APL0005", title: "iPhone 11 Pro Max(256G)", price: 43000, inventory: 5, spec: {capacity: "256G", chip: "A13 Bionic chip", display: "6.5-inch (diagonal) all-screen OLED"}},
  {id: "APL0006", title: "iPhone 11 Pro Max(512G)", price: 48000, inventory: 5, spec: {capacity: "512G", chip: "A13 Bionic chip", display: "6.5-inch (diagonal) all-screen OLED"}}
];

export const samsung = [
  {id: "SAMS0001", title: "Galaxy A31", price: 8000, inventory: 2, spec: {capacity: "64G", chip: "MediaTek Helio P65", display: "5.8-inch (diagonal) all-screen Super AMOLED"}},
  {id: "SAMS0002", title: "Galaxy A80", price: 9000, inventory: 2, spec: {capacity: "64G", chip: "MediaTek Helio P68", display: "5.8-inch (diagonal) all-screen Super AMOLED"}},
  {id: "SAMS0003", title: "Galaxy A71", price: 10000, inventory: 2, spec: {capacity: "128G", chip: "MediaTek Helio P70", display: "6.0-inch (diagonal) all-screen Super AMOLED"}},
  {id: "SAMS0004", title: "Galaxy A70", price: 11000, inventory: 5, spec: {capacity: "128G", chip: "MediaTek Helio P72", display: "6.0-inch (diagonal) all-screen Super AMOLED"}},
  {id: "SAMS0005", title: "Galaxy A60", price: 12000, inventory: 5, spec: {capacity: "256G", chip: "MediaTek Helio P75", display: "6.4-inch (diagonal) all-screen Super AMOLED"}},
  {id: "SAMS0006", title: "Galaxy A51", price: 13000, inventory: 5, spec: {capacity: "512G", chip: "MediaTek Helio P80", display: "6.4-inch (diagonal) all-screen Super AMOLED"}}
];


export const asus = [
  {id: "ASUS0001", title: "ROG Phone", price: 20000, inventory: 2, spec: {capacity: "64G", chip: "Qualcomm Snapdragon 850", display: "5.5-inch AMOLED"}},
  {id: "ASUS0002", title: "ROG Phone II", price: 30000, inventory: 2, spec: {capacity: "64G", chip: "Qualcomm Snapdragon 855+", display: "5.5-inch AMOLED"}},
  {id: "ASUS0003", title: "ZenFone 6 (6G/128G)", price: 10500, inventory: 2, spec: {capacity: "128G", chip: "Qualcomm Snapdragon 650", display: "6.0-inch AMOLED"}},
  {id: "ASUS0004", title: "ZenFone 6 (8G/256G)", price: 13500, inventory: 5, spec: {capacity: "256", chip: "Qualcomm Snapdragon 650", display: "6.0-inch AMOLED"}},
  {id: "ASUS0005", title: "ZenFone 6 (8G/512G)", price: 15500, inventory: 5, spec: {capacity: "512G", chip: "Qualcomm Snapdragon 650", display: "6.4-inch AMOLED"}},
  {id: "ASUS0006", title: "ZenFone 6 (12G/512G)", price: 17500, inventory: 5, spec: {capacity: "512G", chip: "Qualcomm Snapdragon 650", display: "6.4-inch AMOLED"}}
];

export const products = new Map([
  ["Apple", apple],
  ["Samsung", samsung],
  ["Asus", asus],
]);

// export default {
//   data() {
//  return {
//       apple: apple
//  }
//   }
// };


export default {
  // getProducts (cb) {
    // setTimeout(() => cb(products), 100);
  // }
  getProducts () {
    return products;
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  }
}

/*
export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  }
}
*/
