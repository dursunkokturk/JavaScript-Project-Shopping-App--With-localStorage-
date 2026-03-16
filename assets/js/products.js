const defaultProducts = [
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

// const defaultProducts = [products];

let products = JSON.parse(localStorage.getItem("productList")) || defaultProducts;
let userBasket = JSON.parse(localStorage.getItem("userBasket")) || [];

// Kullanici Tumu Butonuna Tiklandiginda 
// localStorage Uzerinden Alinacak Data'lari Belirliyoruz
let activeCategory = localStorage.getItem("activeCategory") || "tümü";

function saveProducts() {
  localStorage.setItem("productList", JSON.stringify(products));
}

function saveBasket() {
  localStorage.setItem("userBasket", JSON.stringify(userBasket));
}


function renderProductTable() {

  const allVegetables = document.getElementById("allVegetables");
  const allFruits = document.getElementById("allFruits");
  const vegetablesSection = document.getElementById("vegetablesSection");
  const fruitsSection    = document.getElementById("fruitsSection");

  if (!allVegetables || !allFruits) return;

  allVegetables.innerHTML = "";
  allFruits.innerHTML = "";

  if (activeCategory === "sebze") {
    vegetablesSection.style.display = "block";
    fruitsSection.style.display     = "none";
  } else if (activeCategory === "meyve") {
    vegetablesSection.style.display = "none";
    fruitsSection.style.display     = "block";
  } else {
    // "tümü" seçiliyse ikisi de görünür
    vegetablesSection.style.display = "block";
    fruitsSection.style.display     = "block";
  }

  for (let i = 0; i < products.length; i++) {
    if (products[i].type === "sebze") {
      allVegetables.innerHTML += `
        <tr>
          <td>${products[i].name}</td>
          <td>${products[i].producer}</td>
          <td>${products[i].salePrice}</td>
          <td>${products[i].stock > 0 ? products[i].stock : "Tükendi"}</td>
        </tr>
        `;
    }
  }

  for (let i = 0; i < products.length; i++) {
    if (products[i].type === "meyve") {
      allFruits.innerHTML += `
        <tr>
          <td>${products[i].name}</td>
          <td>${products[i].producer}</td>
          <td>${products[i].salePrice}</td>
          <td>${products[i].stock > 0 ? products[i].stock : "Tükendi"}</td>
        </tr>
        `;
    }
    // if (products[i].type === "sebze") {
    //   allVegetables.innerHTML += row;
    // } else if (products[i].type === "meyve") {
    //   allFruits.innerHTML += row;
    // }
  }
}

function renderBasket() {

  let allUserBasket = document.getElementById("allUserBasket");

  if (!allUserBasket) return;

  allUserBasket.innerHTML = "";

  if (userBasket.length === 0) {
    allUserBasket.innerHTML = `<tr><td colspan="4">Sepetiniz boş.</td></tr>`;
    document.getElementById("totalPrice").innerHTML = "";
    return;
  }

  let totalPrice = 0;

  for (let i = 0; i < userBasket.length; i++) {

    // Sepete Eklenen Urunun Alinan Adet Miktarina Gore Satis Fiyatini Hesapliyoruz
    const itemTotal = userBasket[i].salePrice * userBasket[i].quantity;
    totalPrice += itemTotal;

    // userBasket Array Icindeki Urunlerin index Numarasini Buluyoruz
    const originalProduct = products.find(product => product.name === userBasket[i].name);

    const stockInfo = originalProduct ? (originalProduct.stock > 0 ? originalProduct.stock : "Tükendi") : "Tükendi";

    allUserBasket.innerHTML += `
      <tr>
        <td>${userBasket[i].name}</td>
        <td>${userBasket[i].producer}</td>
        <td>${userBasket[i].salePrice}</td>
        <td>${stockInfo > 0 ? stockInfo : "Tükendi"}</td>
      </tr>
      `;
  }
  document.getElementById("totalPrice").innerHTML = `Toplam: ${totalPrice} ₺`;

  console.log("Sepetteki Sebze ve Meyveler");
  for (let i = 0; i < userBasket.length; i++) {
    document.getElementById("totalPrice").innerHTML = userBasket.length > 0 ? `Toplam Tutar: ${totalPrice} ₺` : "";
  }
}

const addToBasketButton = document.getElementById("addToBasket");
if (addToBasketButton) {
  addToBasketButton.addEventListener("click", function () {
    const userInputValue = document.getElementById("userInput").value.trim();

    if (!userInputValue) {
      alert("Lütfen bir ürün adı giriniz.");
      return;
    }

    // Arama Islemi Bittiginde Bulunan Sonuclara index Numarasi Vermek Gerekiyor
    // Baslangic Degeri Olarak Urun Yok Durumunu Veriyoruz 
    let productIndex = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase() === userInputValue.toLowerCase()) {

        // Arama Isleminden Sonra Bulunan Data'lar Icin Index Numarasi Veriyoruz
        productIndex = i;
        break;
      }
    }

    // products Array Icinde Urun Var Ise
    if (productIndex !== -1) {

      // productStock Array Icinde Urunun Stock Var Ise
      if (products[productIndex].stock > 0) {

        // Urunu Obje Olarak, quantity ile Sepete Ekliyoruz
        const existingItem = userBasket.find(
          item => item.name === products[productIndex].name
        );

        if (existingItem) {
          existingItem.quantity++;
        } else {
          userBasket.push({
            name: products[productIndex].name,
            producer: products[productIndex].producer,
            salePrice: products[productIndex].salePrice,
            quantity: 1
          });
        }

        // Kullanici Urunu Sepete Ekledikten Sonra 
        // Products Array Icindeki Urunun index Numarasi Uzerinden 
        // productStock Array Icinde Stock Sayisini Azaltiyoruz
        products[productIndex].stock--;

        saveBasket();
        saveProducts();

        alert(`${products[productIndex].name} Ürün Sepete Eklendi!`);

        renderProductTable();


        // Products Array Icindeki Urunun index Numarasi Uzerinden 
        // productStock Array Icinde Stock Sayisini Kontrol Ediyoruz
      } else if (products[productIndex].stock === 0) {
        alert(`${products[productIndex].name} Stokta Yok Sepete Eklenemez`);
      }
    } else {
      alert(`${userInputValue} Ürün Bulunamadı!`);
    }
    document.getElementById("userInput").value = "";

  })
}
renderProductTable();


// Sepeti Temizliyoruz
const clearBasketButton = document.getElementById("clearBasket")
if(clearBasketButton){
  clearBasketButton.addEventListener("click", function () {
    const userConfirm = confirm("Sepeti temizlemek istediğinize emin misiniz?");
    if (!userConfirm) {
      return;
    }
  
    // Sepeti Silerken Ayni Anda localStorage'i Temizliyoruz
    localStorage.removeItem("userBasket");
    userBasket = [];
  
    // Urun Listesini Siliyoruz
    localStorage.removeItem("productList");
  
    products = [...defaultProducts];
  
    alert("Sepetiniz temizlendi.");
    renderBasket();
  });
}

renderBasket();

const categoryButtons = document.querySelectorAll(".categoryBtn");
categoryButtons.forEach(function (btn) {

  // Sayfa Ilk Acildiginda activeCategory Gorunecek
  if (btn.dataset.type === activeCategory) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }

  btn.addEventListener("click", function () {
    // Aktif butonu güncelle
    categoryButtons.forEach(categoryButton => categoryButton.classList.remove("active"));
    btn.classList.add("active");

    // Secilen Kategoriye Gore Kaydetme ve Tabloyu Yenileme
    activeCategory = btn.dataset.type;
    localStorage.setItem("activeCategory", activeCategory);
    renderProductTable();
  });
});
