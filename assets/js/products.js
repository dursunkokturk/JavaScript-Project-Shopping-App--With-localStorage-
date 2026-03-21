const defaultProducts = [
  {
    name: "Elma",
    category: ["meyve", "yerli"],
    color: "kırmızı/yeşil",
    producer: "Ege Tarım",
    purchasePrice: 8,
    salePrice: 12,
    stock: 7
  },
  {
    name: "Muz",
    category: ["meyve", "tropikal"],
    color: "sarı",
    producer: "Tropikal Meyve Ltd.",
    purchasePrice: 15,
    salePrice: 22,
    stock: 9
  },
  {
    name: "Çilek",
    category: ["meyve", "yerli"],
    color: "kırmızı",
    producer: "Akdeniz Çiftliği",
    purchasePrice: 18,
    salePrice: 26,
    stock: 6
  },
  {
    name: "Portakal",
    category: ["meyve", "yerli"],
    color: "turuncu",
    producer: "Finike Tarım",
    purchasePrice: 7,
    salePrice: 11,
    stock: 10
  },
  {
    name: "Üzüm",
    category: ["meyve", "yerli"],
    color: "mor/yeşil",
    producer: "Manisa Bağları",
    purchasePrice: 14,
    salePrice: 20,
    stock: 8
  },
  {
    name: "Karpuz",
    category: ["meyve", "yerli"],
    color: "yeşil/kırmızı",
    producer: "Adana Tarım",
    purchasePrice: 5,
    salePrice: 9,
    stock: 5
  },
  {
    name: "Armut",
    category: ["meyve", "yerli"],
    color: "sarı/yeşil",
    producer: "Bursa Meyvecilik",
    purchasePrice: 9,
    salePrice: 14,
    stock: 7
  },
  {
    name: "Kiraz",
    category: ["meyve", "yerli"],
    color: "kırmızı",
    producer: "Isparta Bahçeleri",
    purchasePrice: 20,
    salePrice: 30,
    stock: 6
  },
  {
    name: "Şeftali",
    category: ["meyve", "yerli"],
    color: "turuncu/sarı",
    producer: "Mersin Tarım",
    purchasePrice: 13,
    salePrice: 19,
    stock: 9
  },
  {
    name: "Limon",
    category: ["meyve", "yerli"],
    color: "sarı",
    producer: "Antalya Narenciye",
    purchasePrice: 6,
    salePrice: 10,
    stock: 10
  },
  {
    name: "Havuç",
    category: ["sebze", "yerli"],
    color: "turuncu",
    producer: "Konya Tarım",
    purchasePrice: 4,
    salePrice: 7,
    stock: 8
  },
  {
    name: "Domates",
    category: ["sebze", "yerli"],
    color: "kırmızı",
    producer: "Çanakkale Tarım",
    purchasePrice: 6,
    salePrice: 10,
    stock: 5
  },
  {
    name: "Brokoli",
    category: ["sebze", "ithal"],
    color: "yeşil",
    producer: "Karadeniz Organik",
    purchasePrice: 10,
    salePrice: 16,
    stock: 7
  },
  {
    name: "Salatalık",
    category: ["sebze", "yerli"],
    color: "yeşil",
    producer: "Sera Üretim AŞ",
    purchasePrice: 5,
    salePrice: 8,
    stock: 9
  },
  {
    name: "Biber",
    category: ["sebze", "yerli"],
    color: "kırmızı/yeşil/sarı",
    producer: "Ege Sera",
    purchasePrice: 8,
    salePrice: 13,
    stock: 6
  },
  {
    name: "Patlıcan",
    category: ["sebze", "yerli"],
    color: "mor",
    producer: "Hatay Tarım",
    purchasePrice: 7,
    salePrice: 12,
    stock: 10
  },
  {
    name: "Ispanak",
    category: ["sebze", "yerli"],
    color: "yeşil",
    producer: "Trakya Organik",
    purchasePrice: 6,
    salePrice: 9,
    stock: 8
  },
  {
    name: "Patates",
    category: ["sebze", "yerli"],
    color: "sarı/kahverengi",
    producer: "Niğde Çiftliği",
    purchasePrice: 5,
    salePrice: 8,
    stock: 5
  },
  {
    name: "Soğan",
    category: ["sebze", "yerli"],
    color: "beyaz/mor",
    producer: "Amasya Tarım",
    purchasePrice: 4,
    salePrice: 7,
    stock: 7
  },
  {
    name: "Kabak",
    category: ["sebze", "yerli"],
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
  const fruitsSection = document.getElementById("fruitsSection");


  if (!allVegetables || !allFruits) {
    return;
  }

  allVegetables.innerHTML = "";
  allFruits.innerHTML = "";

  // Kategoriye Gore Filtreleme Yapiyoruz
  const filteredProducts = products.filter(product => {
    return activeCategory === "tümü" || product.category.includes(activeCategory);
  });

  // Tum Kategoriler Icin Goster / Gizle
  const hasVegetable = filteredProducts.some(p => p.category.includes("sebze"));
  const hasFruit = filteredProducts.some(p => p.category.includes("meyve"));

  vegetablesSection.style.display = hasVegetable ? "block" : "none";
  fruitsSection.style.display = hasFruit ? "block" : "none";

  if (filteredProducts.length === 0) {
    allVegetables.innerHTML = `<tr><td colspan="4">Ürün bulunamadı</td></tr>`;
    allFruits.innerHTML = "";
    return;
  }

  filteredProducts.forEach(product => {

    const row = `
      <tr>
        <td>${product.name}</td>
        <td>${product.producer}</td>
        <td>${product.salePrice} ₺</td>
        <td>${product.stock > 0 ? product.stock : "Tükendi"}</td>
      </tr>
    `;

    // Multi Category
    if (product.category.includes("sebze")) {
      allVegetables.innerHTML += row;
    }

    if (product.category.includes("meyve")) {
      allFruits.innerHTML += row;
    }

  });
}

function renderBasket() {

  let allUserBasket = document.getElementById("allUserBasket");
  let totalPriceHTML = document.getElementById("totalPrice");

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

  totalPriceHTML.innerHTML = `Toplam Tutar : ${totalPrice}`;

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
            category: products[productIndex].category,
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
if (clearBasketButton) {
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
    renderProductTable();
  });
}

renderBasket();

let categoryButtons = document.getElementById("categoryButtons");

function renderCategoryButtons() {
  const categoryButtonsDiv = document.getElementById("categoryButtons");
  if (!categoryButtonsDiv) return;

  // Tum Urunlerdeki Kategorileri Toplayip, Tekrar Edenleri Set ile Temizle
  const allCategories = new Set();
  allCategories.add("tümü");

  products.forEach(product => {
    product.category.forEach(cat => allCategories.add(cat));
  });

  categoryButtonsDiv.innerHTML = "";

  allCategories.forEach(category => {
    const btn = document.createElement("button");

    btn.className = "categoryBtn";

    if (category === activeCategory) {
      btn.classList.add("active");
    }

    btn.dataset.type = category;

    // Butonlardaki Isimlerin Ilk Harfini Buyuk Yaziyoruz
    btn.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    btn.addEventListener("click", () => {
      activeCategory = category;
      localStorage.setItem("activeCategory", activeCategory);

      renderCategoryButtons();
      renderProductTable();
    });

    categoryButtonsDiv.appendChild(btn);
  });
}

renderCategoryButtons();
renderProductTable();
renderBasket();