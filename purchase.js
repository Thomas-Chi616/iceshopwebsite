// Product dictionary with detailed descriptions, prices, icons, and standard ingredients
const products = {
    "signature_mixed": {
        name: "東民綜合招牌冰",
        price: 80,
        desc: "滿滿手工配料，經典不敗的絕佳組合。採用每日親自熬煮的古早味黑糖剉冰，鋪上厚實綿密的紅豆、香Q粉圓與嚼勁十足的手工芋圓/地瓜圓，淋上獨家特調黑糖蜜，一口下去多重層次，冰涼爽口！",
        icon: "fa-star",
        ingredients: ["手熬紅豆", "Q彈粉圓", "手工芋圓/地瓜圓", "自製慢火黑糖蜜", "純淨衛生剉冰"]
    },
    "mango-duet": {
        name: "超級芒果雙重奏",
        price: 150,
        desc: "嚴選屏東枋山當季愛文芒果，現切滿滿的新鮮芒果果肉。搭配獨家研發的鮮芒果雪花冰磚，刨出細緻綿滑的冰雪底座，再淋上特濃煉乳與熬煮芒果醬。每一口都是滿溢的果香與奶香，芒果控的極致享受！",
        icon: "fa-crown",
        ingredients: ["當季愛文芒果丁", "特製芒果雪花冰磚", "香醇煉乳", "手工現熬芒果果醬"]
    },
    "brown-sugar": {
        name: "古早味黑糖剉冰",
        price: 65,
        desc: "以傳承多年的傳統配方，精心慢火熬煮數小時的特濃黑糖水，甜而不膩且帶有濃郁焦糖香。配上清涼消暑的碎剉冰，沁涼舒爽。此冰品可由您在備註中指定或自由搭配四種店內手作配料！",
        icon: "fa-ice-cream",
        ingredients: ["特調手工熬煮黑糖蜜", "清涼消暑碎剉冰", "可自選四種配料"]
    },
    "pineapple-ice": {
        name: "鳳梨冰",
        price: 70,
        desc: "遵循台灣傳統古法蜜漬金鑽鳳梨，慢火熬煮讓鳳梨果肉徹底吸收糖蜜，酸甜滋味恰到好處，果肉纖維香軟有嚼勁。淋在細冰上，古早的酸甜滋味在舌尖化開，是阿嬤那個年代最經典的懷舊消暑聖品。",
        icon: "fa-whiskey-glass",
        ingredients: ["古法蜜漬金鑽鳳梨", "清涼剉冰底", "甘蔗清甜糖水"]
    },
    "milk-snow": {
        name: "牛奶綿綿雪花冰",
        price: 90,
        desc: "百分之百使用純濃優質鮮乳，不添加一滴水自製而成的鮮奶冰磚。刨出如鵝毛般輕盈細緻、層層堆疊的雪花冰，入口即化，伴隨而來的是深沉濃郁的奶香。簡單，卻是最純粹的美味。",
        icon: "fa-snowflake",
        ingredients: ["100%純鮮乳雪花冰磚", "特調濃郁煉乳"]
    },
    "matcha-snow": {
        name: "抹茶紅豆雪花冰",
        price: 110,
        desc: "引進日本靜岡特級抹茶粉，調配黃金比例自製抹茶雪花冰磚。茶香濃郁，帶有微苦的優雅層次。搭配鋪滿的香甜蜜紅豆與Q彈手工粉圓，紅豆的甜美與抹茶的微苦完美交融，呈現極致的日式冰品風味。",
        icon: "fa-leaf",
        ingredients: ["日本靜岡抹茶雪花冰磚", "慢火熬煮蜜紅豆", "Q彈手工小粉圓"]
    },
    "mango-seasonal": {
        name: "夏季限定：新鮮芒果冰",
        price: 140,
        desc: "炎炎夏日最期待的清涼滋味！每日由產地直接運送的愛文芒果，金黃誘人、果肉飽滿多汁。搭配純奶雪花冰底，淋上煉乳與手工芒果醬，酸甜滋味與醇厚奶香在口中完美交織，清涼解暑！",
        icon: "fa-sun",
        ingredients: ["產地直送新鮮愛文芒果", "自製純奶雪花冰底", "手工特調芒果果醬", "特濃煉乳"]
    },
    "strawberry-seasonal": {
        name: "冬季限定：草莓戀人冰",
        price: 160,
        desc: "冬季專屬的粉紅浪漫！嚴選苗栗大湖新鮮草莓，顆顆飽滿紅潤、酸甜多汁。鋪在綿密細緻的牛奶雪花冰上，淋上香濃煉乳與酸甜手工草莓醬，豐富的莓果酸甜與香濃奶香，猶如熱戀般的甜蜜滋味！",
        icon: "fa-heart",
        ingredients: ["大湖新鮮嚴選草莓", "牛奶雪花冰底", "手作香甜草莓醬", "特濃煉乳"]
    },
    "fry-platter": {
        name: "酥脆炸物拼盤",
        price: 120,
        desc: "現點現炸的金黃炸物大集合！內含外脆內軟的金黃脆薯、鮮嫩多汁的黃金雞塊以及香酥甘甜的洋蔥圈。控溫油炸至完美熟度，乾爽不油膩，附上經典番茄醬，是下午茶分享的絕佳點心。",
        icon: "fa-bowl-food",
        ingredients: ["黃金香脆薯條", "美味多汁雞塊", "香酥洋蔥圈", "經典番茄醬"]
    },
    "waffle": {
        name: "蜂蜜鬆餅",
        price: 90,
        desc: "現點現烘烤的格子鬆餅，外皮烤得微脆，內部香軟扎實，充滿濃郁奶香與蛋香。表面均勻淋上頂級野生龍眼花蜜，再附上一抹輕盈滑順的頂級打發鮮奶油，趁熱享用，外酥內軟，暖胃又暖心。",
        icon: "fa-cookie",
        ingredients: ["現烤濃郁格子鬆餅", "頂級龍眼花蜜", "輕盈柔滑鮮奶油"]
    },
    "drinks": {
        name: "各式冷飲",
        price: 40,
        desc: "嚴選台灣在地優質茶葉，每日定時新鮮沖泡。不論是醇厚回甘的古早味紅茶、清爽解膩的四季春綠茶，或是濃醇香滑的經典鮮奶茶，皆能滿足您的解渴需求。冷飲杯杯現調，沁涼爽口。(請於備註中寫明茶品種類與冰稀度/甜度)",
        icon: "fa-glass-water",
        ingredients: ["優選在地茶葉", "每日新鮮手作沖泡", "自製甘蔗蔗糖液"]
    }
};

// Extra toppings list
const extraToppings = [
    { id: "red-bean", name: "手熬紅豆" },
    { id: "green-bean", name: "綿密綠豆" },
    { id: "pearl", name: "Q彈粉圓" },
    { id: "taro-balls", name: "手工芋圓/地瓜圓" }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Get query parameters
    const params = new URLSearchParams(window.location.search);
    const itemKey = params.get("item");
    
    // Default to signature mixed ice if item doesn't exist or is invalid
    const currentProduct = products[itemKey] || products["signature_mixed"];
    
    // 2. Populate Product details
    document.getElementById("product-name").textContent = currentProduct.name;
    document.getElementById("product-price").textContent = `$${currentProduct.price}`;
    document.getElementById("product-desc").textContent = currentProduct.desc;
    
    const iconElement = document.getElementById("product-icon");
    iconElement.innerHTML = `<i class="fa-solid ${currentProduct.icon}"></i>`;
    
    // 3. Populate default ingredients
    const defaultIngContainer = document.getElementById("default-ingredients-container");
    defaultIngContainer.innerHTML = ""; // Clear loader
    currentProduct.ingredients.forEach(ing => {
        const span = document.createElement("span");
        span.style.background = "rgba(0, 153, 255, 0.08)";
        span.style.color = "var(--primary-dark)";
        span.style.padding = "5px 12px";
        span.style.borderRadius = "20px";
        span.style.fontSize = "0.85rem";
        span.style.fontWeight = "500";
        span.style.border = "1px solid rgba(0, 153, 255, 0.15)";
        span.textContent = ing;
        defaultIngContainer.appendChild(span);
    });
    
    // 4. Populate extra toppings
    const toppingsContainer = document.getElementById("toppings-container");
    toppingsContainer.innerHTML = "";
    
    extraToppings.forEach(topping => {
        const label = document.createElement("label");
        label.className = "topping-checkbox-label";
        label.setAttribute("for", topping.id);
        
        label.innerHTML = `
            <span>${topping.name}</span>
            <span style="color: var(--primary-light); font-size: 0.85rem;">+$10</span>
            <input type="checkbox" id="${topping.id}" value="${topping.name}">
        `;
        
        toppingsContainer.appendChild(label);
        
        // Add event listener to toggle selected class and recalculate price
        const checkbox = label.querySelector("input");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                label.classList.add("selected");
            } else {
                label.classList.remove("selected");
            }
            calculateTotalPrice();
        });
    });
    
    // 5. Quantity selector logic
    const qtyInput = document.getElementById("quantity");
    const minusBtn = document.getElementById("qty-minus");
    const plusBtn = document.getElementById("qty-plus");
    
    minusBtn.addEventListener("click", () => {
        let val = parseInt(qtyInput.value);
        if (val > 1) {
            qtyInput.value = val - 1;
            calculateTotalPrice();
        }
    });
    
    plusBtn.addEventListener("click", () => {
        let val = parseInt(qtyInput.value);
        if (val < 99) {
            qtyInput.value = val + 1;
            calculateTotalPrice();
        }
    });
    
    // 6. Dynamic Total Price Calculation
    function calculateTotalPrice() {
        const basePrice = currentProduct.price;
        const selectedToppingsCount = document.querySelectorAll("#toppings-container input:checked").length;
        const qty = parseInt(qtyInput.value);
        
        const total = (basePrice + selectedToppingsCount * 10) * qty;
        document.getElementById("total-amount").textContent = `$${total}`;
        return total;
    }
    
    // Run initial price calculation
    calculateTotalPrice();
    
    // 7. Form submission and success modal
    const orderForm = document.getElementById("order-form");
    const successModal = document.getElementById("success-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");
    
    orderForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const customerName = document.getElementById("customer-name").value.trim();
        const customerPhone = document.getElementById("customer-phone").value.trim();
        const notes = document.getElementById("order-notes").value.trim() || "無";
        const quantity = qtyInput.value;
        const totalPrice = calculateTotalPrice();
        
        // Get selected extra toppings
        const checkedToppings = Array.from(document.querySelectorAll("#toppings-container input:checked"))
            .map(cb => cb.value);
        const toppingsString = checkedToppings.length > 0 ? checkedToppings.join("、") : "無";
        
        // Generate random order receipt ID: DM-YYYYMMDD-XXXX
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const randomNum = String(Math.floor(1000 + Math.random() * 9000));
        const receiptId = `DM-${yyyy}${mm}${dd}-${randomNum}`;
        
        // Fill receipt data in modal
        document.getElementById("receipt-id").textContent = receiptId;
        document.getElementById("receipt-item").textContent = currentProduct.name;
        document.getElementById("receipt-qty").textContent = quantity;
        document.getElementById("receipt-toppings").textContent = toppingsString;
        document.getElementById("receipt-customer").textContent = customerName;
        document.getElementById("receipt-phone").textContent = customerPhone;
        document.getElementById("receipt-notes").textContent = notes;
        document.getElementById("receipt-total").textContent = `$${totalPrice}`;
        
        // Show success modal
        successModal.classList.add("active");
    });
    
    // Close modal and redirect back to menu home
    closeModalBtn.addEventListener("click", () => {
        successModal.classList.remove("active");
        window.location.href = "index.html#menu";
    });
});
