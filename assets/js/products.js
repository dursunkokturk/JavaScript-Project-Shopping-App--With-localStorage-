const products = [
  {
    name: "Elma",
    type: "meyve",
    color: "kırmızı/yeşil",
    producer: "Ege Tarım",
    purchasePrice: 8,
    salePrice: 12,
    stock: 7
  },
  {
    name: "Muz",
    type: "meyve",
    color: "sarı",
    producer: "Tropikal Meyve Ltd.",
    purchasePrice: 15,
    salePrice: 22,
    stock: 9
  },
  {
    name: "Çilek",
    type: "meyve",
    color: "kırmızı",
    producer: "Akdeniz Çiftliği",
    purchasePrice: 18,
    salePrice: 26,
    stock: 6
  },
  {
    name: "Portakal",
    type: "meyve",
    color: "turuncu",
    producer: "Finike Tarım",
    purchasePrice: 7,
    salePrice: 11,
    stock: 10
  },
  {
    name: "Üzüm",
    type: "meyve",
    color: "mor/yeşil",
    producer: "Manisa Bağları",
    purchasePrice: 14,
    salePrice: 20,
    stock: 8
  },
  {
    name: "Karpuz",
    type: "meyve",
    color: "yeşil/kırmızı",
    producer: "Adana Tarım",
    purchasePrice: 5,
    salePrice: 9,
    stock: 5
  },
  {
    name: "Armut",
    type: "meyve",
    color: "sarı/yeşil",
    producer: "Bursa Meyvecilik",
    purchasePrice: 9,
    salePrice: 14,
    stock: 7
  },
  {
    name: "Kiraz",
    type: "meyve",
    color: "kırmızı",
    producer: "Isparta Bahçeleri",
    purchasePrice: 20,
    salePrice: 30,
    stock: 6
  },
  {
    name: "Şeftali",
    type: "meyve",
    color: "turuncu/sarı",
    producer: "Mersin Tarım",
    purchasePrice: 13,
    salePrice: 19,
    stock: 9
  },
  {
    name: "Limon",
    type: "meyve",
    color: "sarı",
    producer: "Antalya Narenciye",
    purchasePrice: 6,
    salePrice: 10,
    stock: 10
  },
  {
    name: "Havuç",
    type: "sebze",
    color: "turuncu",
    producer: "Konya Tarım",
    purchasePrice: 4,
    salePrice: 7,
    stock: 8
  },
  {
    name: "Domates",
    type: "sebze",
    color: "kırmızı",
    producer: "Çanakkale Tarım",
    purchasePrice: 6,
    salePrice: 10,
    stock: 5
  },
  {
    name: "Brokoli",
    type: "sebze",
    color: "yeşil",
    producer: "Karadeniz Organik",
    purchasePrice: 10,
    salePrice: 16,
    stock: 7
  },
  {
    name: "Salatalık",
    type: "sebze",
    color: "yeşil",
    producer: "Sera Üretim AŞ",
    purchasePrice: 5,
    salePrice: 8,
    stock: 9
  },
  {
    name: "Biber",
    type: "sebze",
    color: "kırmızı/yeşil/sarı",
    producer: "Ege Sera",
    purchasePrice: 8,
    salePrice: 13,
    stock: 6
  },
  {
    name: "Patlıcan",
    type: "sebze",
    color: "mor",
    producer: "Hatay Tarım",
    purchasePrice: 7,
    salePrice: 12,
    stock: 10
  },
  {
    name: "Ispanak",
    type: "sebze",
    color: "yeşil",
    producer: "Trakya Organik",
    purchasePrice: 6,
    salePrice: 9,
    stock: 8
  },
  {
    name: "Patates",
    type: "sebze",
    color: "sarı/kahverengi",
    producer: "Niğde Çiftliği",
    purchasePrice: 5,
    salePrice: 8,
    stock: 5
  },
  {
    name: "Soğan",
    type: "sebze",
    color: "beyaz/mor",
    producer: "Amasya Tarım",
    purchasePrice: 4,
    salePrice: 7,
    stock: 7
  },
  {
    name: "Kabak",
    type: "sebze",
    color: "yeşil/sarı",
    producer: "Antalya Sera",
    purchasePrice: 5,
    salePrice: 9,
    stock: 9
  }
];

localStorage.clear();

let userBasket = [];
let savedProducts;

// localStorage'dan Sepete Data'lari Aliyoruz
userBasket = JSON.parse(localStorage.getItem("userBasket")) || [];
savedProducts = JSON.parse(localStorage.getItem("productList"));

// localStorage'da Kayitli products Varsa Onu Kullaniyoruz
if (savedProducts) {
  products.forEach((product, index) => {
    const saved = savedProducts.find(saveProduct => saveProduct.name === product.name);
    if (saved) products[index].stock = saved.stock;
  });
}

function saveBasket() {
  localStorage.setItem("userBasket", JSON.stringify(userBasket));
}

function saveProducts() {
  localStorage.setItem("productList", JSON.stringify(products));
}

allVegetables = document.getElementById("allVegetables");

function productList() {

  // products localStorage'a kaydet
  localStorage.setItem("productList", JSON.stringify(products));

  allVegetables.innerHTML = "";

  console.log("===== Sebzeler Listesi =====");
  for (let i = 0; i < products.length; i++) {
    if (products[i].type === "sebze"){
      const rowVegetables = document.createElement("tr");
      rowVegetables.innerHTML += 
      `
        <tr>
          <td>${products[i].name}</td>
          <td>${products[i].producer}</td>
          <td>${products[i].salePrice}</td>
          <td>${products[i].stock}</td>
        </tr>
      `
      allVegetables.appendChild(rowVegetables);
    }
  }

  console.log("===== Meyveler Listesi =====");
  for (let i = 0; i < products.length; i++) {
    if (products[i].type === "meyve"){
      rowFruits = document.createElement("tr");
      rowFruits.innerHTML += 
      `
        <tr>
          <td>${products[i].name}</td>
          <td>${products[i].producer}</td>
          <td>${products[i].salePrice}</td>
          <td>${products[i].stock}</td>
        </tr>
      `
      allFruits.appendChild(rowFruits);
    }
  }
}

function userBasketList() {
  console.log("===== Sepetiniz =====");
  if (userBasket.length === 0) {
    console.log("Sepetiniz boş.");
    return;
  }

  for (let i = 0; i < userBasket.length; i++) {
    console.log(`${i + 1}. ${userBasket[i].name} Adet : ${userBasket[i].quantity} `);
  }
}

function addToBasket(productName) {

  let existingItem = null;

  for (let i = 0; i < userBasket.length; i++) {

    // Kullanicidan Alinan Urun Adi Sepette Var Mi Diye Bakiyoruz
    if (userBasket[i].name.toLowerCase() === productName.toLowerCase()) {
      existingItem = userBasket[i];
      break;
    }
  }

  if (existingItem) {
    // Kullanicidan Alinan Urun Adi Varsa 
    // Yeni Kayit Acmadan Miktari Artiriyoruz
    existingItem.quantity++;
    console.log(`"${productName}" Sepetteki Güncellendi. Yeni Adet: ${existingItem.quantity}`);
  } else {
    // Kullanicidan Alinan Urun Adi Yoksa 
    // Yeni Kayit Aciyoruz
    userBasket.push({ name: productName, quantity: 1 });
    console.log(`"${productName}" sepete ilk kez eklendi.`);
  }

  saveBasket();
}

productList();

while (true) {

  // let userConfirmation = confirm("Sepete Ürün Eklemek İster Misiniz?");

  if (userConfirmation) {
    let userInput = prompt("Ürün Adını Giriniz");

    // Kullanici Urun Adini Girme Asamasinda Islemi Iptal Ederse
    // Donguye Devam Ediyoruz 
    if (!userInput) {
      continue;
    }

    // Kullanicidan Alinan Urun Adinin products Array Icinde
    // Arama Islem Sonucunu Yonetiyoruz
    let found = false;

    for (let i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase() === userInput.toLowerCase()) {

        found = true;

        // productStock Array Icinde Urunun Stock Var Ise
        if (products[i].stock > 0) {

          // Kullanici Urunu Sepete Ekledikten Sonra 
          // Products Array Icindeki Urunun index Numarasi Uzerinden 
          // productStock Array Icinde Stock Sayisini Azaltiyoruz
          products[i].stock--;

          // Sepete Ekliyoruz veya Miktari Artiriyoruz
          addToBasket(products[i].name);

          // Kullanicidan Alinan Urun Ismini Sepete Ekledikten Sonra
          // products Array Icinde Kalan Miktari Yazdiriyoruz
          console.log(`${products[i].name} Ürün Sepete Eklendi! Kalan Stok Miktarı : ${products[i].stock}`);

          // Yapilan Islemi localStorage'a Kaydediyoruz
          saveBasket();

          // Products Array Icindeki Urunun index Numarasi Uzerinden 
          // productStock Array Icinde Stock Sayisini Kontrol Ediyoruz
          if (products[i].stock === 0) {
            console.log(`${products[i].name} Stokta Yok Sepete Eklenemez! Urun Listeden Çıkarıldı`);
            products.splice(i, 1);
          }
        }
        else {
          console.log(`"${userInput}" stokta yok!`);
        }
        
        break;
      }
    }

    if (!found) {
      console.log(`${userInput} bulunamadı.`);
    }
  } else {
    productList();
    userBasketList();
    break;
  }
} 