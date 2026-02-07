/* ------------------------- MAIN-NAVBAR ----------------------------------- */

  document.addEventListener("DOMContentLoaded", () => {

  const dropdown = document.querySelector(".mega-dropdown");
  const dropdownContent = document.getElementById("dropdownContent");
  const navItems = document.querySelectorAll(".nav-item");

  /* ===== MENU DATA ===== */

  const menuData = {

    shop: [
      { img:"https://www.arakucoffee.com/cdn/shop/files/microlot-cafe-doravalasa.jpg?v=1763046975&width=1412", title:"Capsules", desc:"Bold flavours" },
      { img:"https://www.arakucoffee.com/cdn/shop/files/6-terroir-cafe-specialite-bio-araku.jpg?v=1714390591&width=640", title:"Beans", desc:"Fresh roasted" },
      { img:"https://www.arakucoffee.com/cdn/shop/articles/slow-coffee-la-meilleure-methode.jpg?v=1706282435&width=640", title:"Brew Gear", desc:"Coffee tools" },
      { img:"https://www.arakucoffee.com/cdn/shop/files/Origami-dripper.jpg?v=1739466141&width=3751", title:"Accessories", desc:"Daily essentials" }
    ],

    learn: [
      { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnAWnMJKUczhap6sdtK2g2tASZHZK9kO5eA&s", title:"Brew Guide", desc:"Learn brewing" },
      { img:"https://www.arakucoffee.in/cdn/shop/files/Chemex_brew_guide_2048x.jpg?v=1687192621", title:"Recipes", desc:"Coffee drinks" },
      { img:"https://www.arakucoffee.in/cdn/shop/files/resized_image_569x456_1e8f67b1-b132-4374-9c2b-07a67f346227.jpg?v=1752392372&width=569", title:"Origins", desc:"Farm stories" },
      { img:"https://www.arakucoffee.in/cdn/shop/files/2.png?v=1693391028&width=768", title:"Workshops", desc:"Join sessions" }
    ],

    about: [
      { img:"https://www.arakucoffee.com/cdn/shop/files/newsletter-araku-cafe.jpg?v=1691659639&width=2048", title:"Our Story", desc:"Brand journey" },
      { img:"https://www.arakucoffee.in/cdn/shop/files/DSC8140.jpg?v=1712840826&width=2048", title:"Farmers", desc:"Community" },
      { img:"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/05/15224353/Featured-Inside-21-1600x900.jpg", title:"Sustainability", desc:"Eco vision" },
      { img:"https://www.deccanchronicle.com/h-upload/2025/09/05/1954791-download-2025-09-05t212043621.webp", title:"Awards", desc:"Recognition" }
    ],

    experience: [
      { img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/65/4b/b9/caption.jpg?w=900&h=500&s=1", title:"Cafes", desc:"Visit us" },
      { img:"https://www.arakucoffee.in/cdn/shop/files/0D3A5022_3-ezgif.com-resize.jpg?v=1705632741&width=1000", title:"Tours", desc:"Estate tours" },
      { img:"https://www.arakucoffee.in/cdn/shop/files/0d3a5269_optimized-min_1_2.jpg?v=1701927718&width=2640", title:"Events", desc:"Coffee meets" },
      { img:"https://im.whatshot.in/img/2021/Apr/araku-manoj-twitter-cropped-1617873410.jpg?wp=1", title:"Tastings", desc:"Flavor sessions" }
    ]
  };

  function showDropdown(key){

    const items = menuData[key];

    dropdownContent.innerHTML = items.map(card => `
      <div class="drop-card">
        <img src="${card.img}">
        <h4>${card.title}</h4>
        <p>${card.desc}</p>
      </div>
    `).join("");

    dropdown.classList.add("show");
  }

  /* Desktop hover dropdown */

  navItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      showDropdown(item.dataset.menu);
    });
  });

  /* Hide dropdown when leaving navbar */

  document.querySelector(".navbar").addEventListener("mouseleave", () => {
    dropdown.classList.remove("show");
  });


  /* ===== NAVBAR SCROLL SHOW ===== */

  const heroSection = document.querySelector(".hero");

  window.addEventListener("scroll", () => {

    const trigger = heroSection.offsetHeight - 80;

    if(window.scrollY > trigger){
      document.body.classList.add("show-nav");
    } else {
      document.body.classList.remove("show-nav");
    }

  });

});

 /* --------------------------- MINI-NAVBAR ------------------ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- PRODUCT DATA ---------- */
  const products = {
 coffee: [
      {
        img: "https://www.arakucoffee.in/cdn/shop/files/WhatsAppImage2025-12-05at5.50.39PM_1.jpg?v=1764937604&width=1232",
        img2: "https://www.arakucoffee.in/cdn/shop/files/Catalogue--14.jpg?v=1686918992",
        title: "ARAKU Tote Bag",
        price: "₹ 950",
        desc: "Customised, sustainable, organic cotton canvas totes."
      },
      {
        img: "https://www.arakucoffee.in/cdn/shop/files/Catalogue--13.jpg?v=1686918992",
        img2:"https://www.arakucoffee.com/cdn/shop/files/siganture-boite-200g-grains_grande.jpg?v=1705675000",
        title: "Coffee Reflections",
        price: "₹ 2,200",
        desc: "Premium coffee book exploring coffee culture."
      },
      {
        img: "https://www.arakucoffee.in/cdn/shop/files/WhatsAppImage2025-11-11at2.19.42PM.jpg?v=1763369657&width=1280",
        img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvQAoMADNi4gVEh9oHt_rHswVi1fP87AjsA&s",
        title: "Coffee Debates",
        price: "₹ 1,950",
        desc: "A book discussing ideas and thoughts around coffee."
      }
    ],

    equipment: [
      {
        img: "https://www.arakucoffee.in/cdn/shop/files/ArakuProductShootNovember2023-18_1.jpg?v=1701155610&width=800",
        img2:"https://cdn-prod.coffeedesk.io/media/60/56/8a/1730718148/aeropress-clear-zaparzacz-do-kawy-3.jpg",
        title: "AeroPress Clear",
        price: "₹ 4,500",
        desc: "Ceramic dripper for manual brewing."
      },
      {
        img: "https://www.arakucoffee.in/cdn/shop/files/rsz_4aeropress_mood.jpg?v=1687178857&width=800",
        img2:"https://simbabru.co.uk/cdn/shop/files/aeropress-coffee-maker-in-use.webp?v=1743094962&width=1946",
        title: "AeroPress Coffee Maker",
        price: "₹ 3,000",
        desc: "Manual grinder for fresh coffee grinding."
      },
      {
        img: "https://www.arakucoffee.in/cdn/shop/files/Copy_of_Araku_May_20253326-Edit.jpg?v=1747646327&width=800",
        img2:"https://www.arakucoffee.com/cdn/shop/files/thermos-kinto-araku.jpg?v=1739459904&width=1000",
        title: "Carter Move Mug",
        price: "₹ 3,000",
        desc: "Carry the fresh coffee with you."
      }
    ],

   brew: [
      {
        img: "https://www.arakucoffee.in/cdn/shop/files/1_825ee282-4a94-4216-8d78-775b153398bf.jpg?v=1756376293&width=800",
        img2:"https://www.arakucoffee.com/cdn/shop/files/micro-climat-drip-bag.jpg?v=1705681199",
        title: "Pocket Brew – Collection",
        price: "₹ 350",
        desc: "Classic brewer for rich coffee extraction."
      },
      {
        img: "https://www.arakucoffee.in/cdn/shop/files/Post4.jpg?v=1723551518&width=800",
        img2:"https://www.arakucoffee.com/cdn/shop/files/pocket-brew-micro-climat-cafe-filtre.jpg?v=1705681013&width=800",
        title: "Pocket Brew – Selection",
        price: "₹ 300",
        desc: "Complete pour-over brewing."
      },
      {
        img: "https://www.arakucoffee.in/cdn/shop/files/Moodshots-40_1.jpg?v=1723551665&width=800",
        img2:"https://www.arakucoffee.in/cdn/shop/collections/Araku-05727_1_1.jpg?v=1715926040",
        title: "Pocket Brew – Micro ",
        price: "₹ 400",
        desc: "Classic brewer for rich coffee extraction."
      }
    ]
  };

 /* ---------- CARD TEMPLATE ---------- */
  function createCard(p) {
    return `
      <div class="product-card">
        <div class="card-image">
          <img class="img-main" src="${p.img}">
          ${p.img2 ? `<img class="img-hover" src="${p.img2}">` : ""}
        </div>
        <div class="card-body">
          <div class="title-row">
            <h3>${p.title}</h3>
            <span class="price">${p.price}</span>
          </div>
          <p class="desc">${p.desc}</p>
          <button class="quick-buy">Quick Buy</button>
          <span class="more">More details →</span>
        </div>
      </div>
    `;
  }

  /* ---------- IMAGE HOVER SWAP ---------- */
  document.addEventListener("click", e => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const main = card.querySelector(".img-main");
    const hover = card.querySelector(".img-hover");
    if (!hover) return;

    main.style.opacity = main.style.opacity === "0" ? "1" : "0";
    hover.style.opacity = hover.style.opacity === "1" ? "0" : "1";
  });

  /* ---------- RENDER TABS ---------- */
  Object.keys(products).forEach(tabId => {
    const grid = document.querySelector(`#${tabId} .card-grid`);
    if (!grid) return;
    grid.innerHTML = products[tabId].map(createCard).join("");
  });

  /* ---------- TAB SWITCHING ---------- */
  const tabs = document.querySelectorAll(".nav-scroll a");
  const panes = document.querySelectorAll(".tab-pane");
  const indicator = document.querySelector(".indicator");

  function moveIndicator(tab) {
    indicator.style.width = tab.offsetWidth + "px";
    indicator.style.left = tab.offsetLeft + "px";
  }
  moveIndicator(document.querySelector(".nav-scroll a.active"));

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
      moveIndicator(tab);
    });
  });

  /* ---------- QUICK BUY PANEL ---------- */
  document.addEventListener("click", e => {
    if (e.target.classList.contains("quick-buy")) {
      const card = e.target.closest(".product-card");

      // Fill checkout panel
      document.getElementById("checkoutTitle").textContent =
        card.querySelector("h3").textContent;
      document.getElementById("checkoutPrice").textContent =
        card.querySelector(".price").textContent;
      document.getElementById("checkoutDesc").textContent =
        card.querySelector(".desc").textContent;
      document.getElementById("checkoutImg").src =
        card.querySelector(".img-main").src;
      document.getElementById("checkoutPanel").classList.add("active");

      // Reset quantity to 1
      qty = 1;
      const qtyValue = document.getElementById("qtyValue");
      if(qtyValue) qtyValue.textContent = qty;
    }
  });

  /* ---------- CLOSE PANEL ---------- */
  document.getElementById("closeCheckout")?.addEventListener("click", () => {
    document.getElementById("checkoutPanel").classList.remove("active");
  });

  /* ---------- QUANTITY ---------- */
  let qty = 1;
  const qtyValue = document.getElementById("qtyValue");

  document.querySelector(".plus")?.addEventListener("click", () => {
    qty++;
    if(qtyValue) qtyValue.textContent = qty;
  });

  document.querySelector(".minus")?.addEventListener("click", () => {
    if (qty > 1) {
      qty--;
      if(qtyValue) qtyValue.textContent = qty;
    }
  });

  /* ---------- DROPDOWNS ---------- */
  function dropdown(selectedId, optionsId) {
    const selected = document.getElementById(selectedId);
    const options = document.getElementById(optionsId);
    if (!selected || !options) return;

    selected.addEventListener("click", () => {
      options.style.display =
        options.style.display === "block" ? "none" : "block";
    });

    options.querySelectorAll(".grind-option").forEach(option => {
      option.addEventListener("click", () => {
        selected.textContent = option.textContent;
        options.style.display = "none";
      });
    });
  }

  dropdown("packSelected", "packOptions");
  dropdown("sizeSelected", "sizeOptions");
  dropdown("grindSelected", "grindOptions");

  /* ---------- CART STORAGE ---------- */
  localStorage.removeItem("cart");
  let cart = [];

  /* ---------- UPDATE CART BADGE ---------- */
  function updateCartCount() {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity;
    });
    const badge = document.querySelector(".cart-count");
    if (badge) badge.textContent = total;
  }
  updateCartCount();

  /* ---------- ADD TO CART ---------- */
  const addBtn = document.querySelector(".add-carts");
  addBtn?.addEventListener("click", () => {
    const item = {
      title: document.getElementById("checkoutTitle").textContent,
      price: document.getElementById("checkoutPrice").textContent,
      img: document.getElementById("checkoutImg").src,
      pack: document.getElementById("packSelected")?.textContent || "Default",
      size: document.getElementById("sizeSelected")?.textContent || "Default",
      grind: document.getElementById("grindSelected")?.textContent || "Default",
      quantity: qty
    };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    addBtn.textContent = "Item added!";
    addBtn.disabled = true;

    setTimeout(() => {
      addBtn.textContent = "ADD TO CART";
      addBtn.disabled = false;
    }, 2000);
  });

});



 /* --------------------------- TOP-SLIDING-CARDS-SECTION  ----------------- */

  const slides = [
  {
    title: "The ARAKU Brew Guide",
    subtitle: "Brew the Perfect Cup",
    button: "LEARN MORE",
    img: "https://www.arakucoffee.in/cdn/shop/files/WhatsApp_Image_2026-01-24_at_11.55.22_AM.jpg?v=1769236850&width=1000"
  },
  {
    title: "Espresso Brewing Guide",
    subtitle: "Strong. Bold. Perfect.",
    button: "VIEW GUIDE",
    img: "https://www.arakucoffee.in/cdn/shop/files/WhatsApp_Image_2025-09-05_at_12.08.32_PM.jpg?v=1757055389&width=1000"
  },
  {
    title: "The Seed to Cup Journey",
    subtitle: "Slow Brewing Magic",
    button: "EXPLORE METHOD",
    img: "https://www.arakucoffee.in/cdn/shop/files/DSC8140.jpg?v=1712840826&width=1000"
  },
  {
    title: "Cold Brew Coffee Guide",
    subtitle: "Smooth & Refreshing",
    button: "TRY NOW",
    img: "https://www.arakucoffee.in/cdn/shop/files/Point_1_1_2048x.jpg?v=1689067476"
  }
];

let index = 0;

const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const imgEl = document.getElementById("image");
const buttonEl = document.querySelector(".Order-btn");

/* WORD REVEAL */
function revealText(element, text) {
  element.innerHTML = "";

  text.split(" ").forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.classList.add("word");
    span.style.animationDelay = i * 0.08 + "s";

    element.appendChild(span);
  });
}

/* UPDATE SLIDE */
function updateSlide() {

  imgEl.style.opacity = 0;

  setTimeout(() => {

    imgEl.src = slides[index].img;
    imgEl.style.opacity = 1;

    revealText(titleEl, slides[index].title);
    revealText(subtitleEl, slides[index].subtitle);

    /*  Dynamic button text */
    buttonEl.textContent = slides[index].button;

  }, 300);
}

/* ARROWS */
function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
}

/* INITIAL LOAD */
updateSlide();


  /* ---------------------- QUICK BUY-SECTION--JSCODE---------------------------- */

const cartCountEl = document.querySelector(".cart-count");
let cartTotal = 0;          // total cart items
let activeIndex = null;     // track active product

/* ---------------- PRODUCTS DATA ---------------- */

const products = [
{
name:"Signature Capsule Cafe",
desc:"CHOCOLATE",
price:"₹ 1,200",
rating:"⭐⭐⭐⭐⭐",
img1:"https://www.arakucoffee.com/cdn/shop/files/Capsules-Signature-vrac-nespresso.jpg?v=1742311376&width=1000",
img2:"https://www.arakucoffee.com/cdn/shop/files/Signature-capsules-x10.jpg?v=1705680834"
},
{
name:"Early Harvest coffee",
desc:"RED FRUITS, LEMON",
price:"₹ 1,100",
rating:"⭐⭐⭐⭐☆",
img1:"https://www.arakucoffee.com/cdn/shop/files/signature-200g-cafe-grains-sachet.jpg?v=1748352320&width=1000",
img2:"https://www.arakucoffee.com/cdn/shop/files/coffret-v60-hario-araku.jpg?v=1763658870&width=1000"
},
{
name:"Micro Climate Pocket",
desc:"CARAMEL, HONEY",
price:"₹ 1,000",
rating:"⭐⭐⭐⭐☆",
img1:"https://cdn.shopify.com/s/files/1/0719/7265/1288/files/microlot-gummaguda.jpg?v=1747749471",
img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4wKkjzGbfVQi2_uOUgJ_MPPDKgjNmAEyLw&s"
},
{
name:"Fellow Carter Move Mug",
desc:"350 ml capacity",
price:"₹ 1,313",
rating:"⭐⭐⭐⭐⭐",
img1:"https://www.arakucoffee.in/cdn/shop/files/ARAKUxFellowMoveMug_Mood_2_1.jpg?v=1696570950&width=2640",
img2:"https://www.arakucoffee.in/cdn/shop/files/Copy_of_Araku_May_20253326-Edit.jpg?v=1747646327&width=3814"
}
];

/* ---------------- RENDER PRODUCTS ---------------- */
const container = document.getElementById("productContainer");

products.forEach((p,i) => {
  container.innerHTML += `
    <div class="product">

      <div class="img-wrap">
        <img src="${p.img1}" class="img1">
        <img src="${p.img2}" class="img2">
      </div>

      <h5>${p.name}</h5>
      <p>${p.desc}</p>
      <div class="rating">${p.rating}</div>

      <div class="price-cart">
        <span class="price">${p.price}</span>

        <div id="cartArea-${i}">
          <button class="add-btn" onclick="addCart(${i})">ADD</button>
        </div>

      </div>

    </div>
  `;
});

/* ---------------- CART ICON UPDATE ---------------- */
function updateCartIcon() {
  cartCountEl.innerText = cartTotal;
  cartCountEl.classList.remove("bump");
  void cartCountEl.offsetWidth; // force reflow
  cartCountEl.classList.add("bump");
}

/* ---------------- RESET PREVIOUS PRODUCT ---------------- */
function resetPrevious() {
  if(activeIndex !== null){
    const area = document.getElementById(`cartArea-${activeIndex}`);
    if(area) {
      area.innerHTML = `<button class="add-btn" onclick="addCart(${activeIndex})">ADD</button>`;
    }
  }
}

/* ---------------- ADD TO CART ---------------- */
function addCart(i) {

  // reset previous product
  if(activeIndex !== i){
    resetPrevious();
  }

  activeIndex = i;

  const area = document.getElementById(`cartArea-${i}`);
  if(!area) return;

  // only increase cartTotal when first adding product
  cartTotal += 1;
  updateCartIcon();

  area.innerHTML = `
    <div class="cart-control">
      <button onclick="updateQty(${i},-1)">−</button>
      <span id="count-${i}">1</span>
      <button onclick="updateQty(${i},1)">+</button>
    </div>
  `;
}

/* ---------------- UPDATE QUANTITY ---------------- */
function updateQty(i, val) {

  const countEl = document.getElementById(`count-${i}`);
  if(!countEl) return;

  let count = parseInt(countEl.innerText) + val;

  if(count <= 0){
    // remove product from cart
    activeIndex = null;
    count = 0;
    cartTotal -= 1;
    updateCartIcon();

    const area = document.getElementById(`cartArea-${i}`);
    if(area){
      area.innerHTML = `<button class="add-btn" onclick="addCart(${i})">ADD</button>`;
    }
  } else {
    countEl.innerText = count;
    cartTotal += val;
    if(cartTotal < 0) cartTotal = 0; // safety check
    updateCartIcon();
  }
}








const modal = document.getElementById('loginModal');
  const profileIcon = document.querySelector('.icon');
  const closeBtn = document.getElementById('closeModal');

  profileIcon.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
