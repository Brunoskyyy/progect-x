// DATABASE ESPANSO CON PIU' PIETANZE
const database = {
    antipasti: [
        "Carpaccio di Manzo con Scaglie di Parmigiano",
        "Insalata di Mare con Polpo e Gamberi",
        "Bruschetta Mista Pomodoro e Funghi",
        "Prosciutto di Parma con Melone Cantalupo",
        "Mozzarella di Bufala con Pomodori Pachino",
        "Tartare di Tonno con Avocado",
        "Cocktail di Gamberi Rosa",
        "Verdure Grigliate con Salsa alle Erbe",
        "Arancini di Ragu Siciliani",
        "Soufflé al Formaggio di Capra"
    ],
    primi: [
        "Risotto allo Zafferano con Midollo",
        "Lasagna alla Bolognese Tradizionale",
        "Spaghetti alle Vongole Veraci",
        "Ravioli di Ricotta e Spinaci al Burro e Salvia",
        "Penne all'Arrabbiata con Guanciale",
        "Gnocchi di Patate al Pesto Genovese",
        "Tortellini in Brodo di Cappone",
        "Tagliatelle ai Funghi Porcini",
        "Orecchiette con Cime di Rapa e Salsiccia",
        "Zuppa di Cipolle alla Francese Gratinata"
    ],
    secondi_carne: [
        "Filetto di Manzo al Pepe Verde",
        "Arrosto di Vitello con Patate al Forno",
        "Pollo al Curry con Riso Basmati",
        "Costoletta di Agnello alla Griglia",
        "Scaloppine di Vitello al Limone",
        "Brasato di Manzo al Barolo",
        "Cotoletta alla Milanese",
        "Tagliata di Manzo con Rucola e Grana",
        "Coniglio alla Cacciatora",
        "Faraona al Forno con Castagne"
    ],
    secondi_pesce: [
        "Branzino al Sale Marino con Verdure",
        "Salmone alla Griglia con Salsa al Dragoncello",
        "Fritto Misto di Mare con Tempura",
        "Orata al Forno con Patate e Rosmarino",
        "Zuppa di Pesce alla Livornese",
        "Trancio di Pesce Spada alla Ghiotta",
        "Calamari Ripieni alla Ligure",
        "Filetto di Rombo con Verdure di Stagione",
        "Misto di Crudi di Mare",
        "Coda di Rospo alla Mugnaia"
    ],
    secondi_vegan: [
        "Burger di Lenticchie con Salsa Avocado",
        "Polpette di Ceci al Pomodoro",
        "Tofu Marinato alla Piastra con Verdure",
        "Seitan alla Brace con Salsa BBQ",
        "Curry di Verdure con Riso Jasmine",
        "Melanzane alla Parmigiana Vegan",
        "Zucchine Ripiene di Cous Cous",
        "Hamburger di Quinoa con Patate Dolci",
        "Ratatouille Provenzale",
        "Lasagna Vegan con Ragù di Soia"
    ],
    dessert: [
        "Tiramisù Classico",
        "Panna Cotta con Coulis di Frutti di Bosco",
        "Cheesecake ai Frutti Rossi",
        "Macedonia di Frutta Fresca di Stagione",
        "Gelato Misto con Salsa al Cioccolato",
        "Torta della Nonna con Pinoli",
        "Cannolo Siciliano con Ricotta di Pecora",
        "Profiteroles alla Crema Chantilly",
        "Semifreddo al Torroncino",
        "Sorbetto al Limone"
    ],
    fissi: [
        { id: "f1", name: "Bistecca alla Fiorentina (per 2 persone)" },
        { id: "f2", name: "Cotoletta alla Milanese con Insalata" },
        { id: "f3", name: "Pasta al Pomodoro e Basilico" },
        { id: "f4", name: "Tagliata di Angus con Rucola" },
        { id: "f5", name: "Hamburger Classico con Patatine" }
    ],
    bibite: [
        { id: "b1", name: "Acqua Naturale 0.5L" },
        { id: "b2", name: "Acqua Frizzante 0.5L" },
        { id: "b3", name: "Coca Cola 0.33L" },
        { id: "b4", name: "Fanta Aranciata 0.33L" },
        { id: "b5", name: "Sprite 0.33L" },
        { id: "b6", name: "Birra Peroni 0.33L" },
        { id: "b7", name: "Birra Moretti 0.33L" },
        { id: "b8", name: "Vino Rosso della Casa (Calice)" },
        { id: "b9", name: "Vino Bianco della Casa (Calice)" },
        { id: "b10", name: "Prosecco (Calice)" },
        { id: "b11", name: "Caffè Espresso" },
        { id: "b12", name: "Caffè Macchiato" },
        { id: "b13", name: "Cappuccino" },
        { id: "b14", name: "Tè Caldo (Vari gusti)" },
        { id: "b15", name: "Succo di Frutta (Arancia/Mela)" },
        { id: "b16", name: "Spritz Aperol" },
        { id: "b17", name: "Negroni" },
        { id: "b18", name: "Mojito" },
        { id: "b19", name: "Margarita" }
    ]
};

// STATO APP
let appState = {
    lang: 'it',
    cart: {},
    currentMenu: {},
    serviceType: null,
    currentCategory: 'antipasti'
};

// ============ GESTIONE VISTE ============
function showView(viewId) {
    console.log(`Mostra vista: ${viewId}`);
    
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
    }
    
    if (viewId === 'menu-view') {
        updateClock();
        updateServiceStatus();
        showCategory(appState.currentCategory);
    }
}

// ============ 1. LOGIN SEPARATO ============
function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert("Inserisci email e password");
        return;
    }
    
    console.log("Login effettuato - MSC Patrizia");
    showView('lang-view');
}

// ============ 2. LINGUA SEPARATA ============
function setLanguage(lang) {
    appState.lang = lang;
    document.getElementById('current-lang').textContent = lang.toUpperCase();
    console.log(`Lingua impostata: ${lang}`);
    checkServiceStatus();
}

function showLanguageSelection() {
    showView('lang-view');
}

// ============ 3. CONTROLLO ORARIO SERVIZIO ============
function getCurrentTimeInMinutes() {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
}

function checkServiceStatus() {
    const currentTime = getCurrentTimeInMinutes();
    const now = new Date();
    
    console.log(`Controllo orario MSC Patrizia: ${now.getHours()}:${now.getMinutes()}`);
    
    // CONTROLLO STRETTO: SOLO 02:00 - 05:30
    if (currentTime >= 2 * 60 && currentTime < 5.5 * 60) {
        console.log("SERVIZIO CHIUSO - Mostra vista chiusa");
        appState.serviceType = 'CLOSED';
        showView('closed-view');
        return;
    }
    
    // Se non è chiuso, determina tipo servizio
    let serviceType;
    
    if (currentTime >= 11.5 * 60 && currentTime < 14.5 * 60) {
        serviceType = 'LUNCH';
    } else if (currentTime >= 18.5 * 60 && currentTime < 23.5 * 60) {
        serviceType = 'DINNER';
    } else {
        serviceType = 'BAR';
    }
    
    if (serviceType !== appState.serviceType) {
        appState.serviceType = serviceType;
        generateMenuForService(serviceType);
    }
    
    showView('menu-view');
    updateServiceStatus();
    updateSidebarForService(serviceType);
}

// ============ 4. AGGIORNA SIDEBAR PER SERVIZIO ============
function updateSidebarForService(serviceType) {
    const sidebarItems = {
        antipasti: document.getElementById('sidebar-antipasti'),
        primi: document.getElementById('sidebar-primi'),
        secondi: document.getElementById('sidebar-secondi'),
        dessert: document.getElementById('sidebar-dessert'),
        fissi: document.getElementById('sidebar-fissi'),
        bibite: document.getElementById('sidebar-bibite')
    };
    
    if (serviceType === 'BAR') {
        // Durante il BAR, tutte le sezioni cibo sono disabilitate
        Object.keys(sidebarItems).forEach(key => {
            if (sidebarItems[key]) {
                if (key === 'bibite') {
                    // Solo Bevande & Bar rimane attivo
                    sidebarItems[key].classList.remove('disabled');
                    sidebarItems[key].onclick = () => showCategory(key);
                } else {
                    // Tutte le altre sezioni sono disabilitate
                    sidebarItems[key].classList.add('disabled');
                    sidebarItems[key].onclick = null;
                }
            }
        });
        
        // Se siamo attualmente su una sezione disabilitata, spostiamoci su Bevande
        const disabledCategories = ['antipasti', 'primi', 'secondi', 'dessert', 'fissi'];
        if (disabledCategories.includes(appState.currentCategory)) {
            showCategory('bibite');
        }
    } else {
        // Durante LUNCH/DINNER, tutte le sezioni sono attive
        Object.keys(sidebarItems).forEach(key => {
            if (sidebarItems[key]) {
                sidebarItems[key].classList.remove('disabled');
                sidebarItems[key].onclick = () => showCategory(key);
            }
        });
    }
}

// ============ 5. GENERA MENU CON 3 PIATTI PER SEZIONE ============
function generateMenuForService(serviceType) {
    if (serviceType === 'LUNCH' || serviceType === 'DINNER') {
        // Per pranzo/cena: tutte le categorie con 3 piatti ciascuna
        appState.currentMenu = {
            antipasti: getRandomItems(database.antipasti, 3),      // 3 antipasti
            primi: getRandomItems(database.primi, 3),             // 3 primi
            secondi_carne: getRandomItems(database.secondi_carne, 1), // 1 carne
            secondi_pesce: getRandomItems(database.secondi_pesce, 1), // 1 pesce
            secondi_vegan: getRandomItems(database.secondi_vegan, 1), // 1 vegan
            dessert: getRandomItems(database.dessert, 3),         // 3 dessert
            fissi: database.fissi,                                // tutti i classici
            bibite: database.bibite                               // tutte le bevande
        };
    } else {
        // Per BAR: solo bibite, tutte le altre categorie VUOTE
        appState.currentMenu = {
            antipasti: [],  // VUOTO per BAR
            primi: [],      // VUOTO per BAR
            secondi_carne: [],  // VUOTO per BAR
            secondi_pesce: [],  // VUOTO per BAR
            secondi_vegan: [],  // VUOTO per BAR
            dessert: [],    // VUOTO per BAR
            fissi: [],      // VUOTO per BAR
            bibite: database.bibite  // Solo bevande attive
        };
    }
    
    renderAllCategories();
}

function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// ============ 6. RENDER CATEGORIE SEPARATE ============
function showCategory(categoryId) {
    // Se siamo in modalità BAR e cerchiamo di accedere a sezioni cibo, reindirizza a Bevande
    const foodCategories = ['antipasti', 'primi', 'secondi', 'dessert', 'fissi'];
    if (appState.serviceType === 'BAR' && foodCategories.includes(categoryId)) {
        categoryId = 'bibite';
    }
    
    appState.currentCategory = categoryId;
    
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeItem = document.querySelector(`.sidebar-item[onclick*="${categoryId}"]`);
    if (activeItem && !activeItem.classList.contains('disabled')) {
        activeItem.classList.add('active');
    }
    
    document.querySelectorAll('.category-view').forEach(cat => {
        cat.classList.remove('active');
    });
    
    const targetCategory = document.getElementById(`category-${categoryId}`);
    if (targetCategory) {
        targetCategory.classList.add('active');
    }
}

function renderAllCategories() {
    // ANTIPASTI: 3 piatti o messaggio se BAR
    renderFoodCategory('antipasti', appState.currentMenu.antipasti || []);
    
    // PRIMI: 3 piatti o messaggio se BAR
    renderFoodCategory('primi', appState.currentMenu.primi || []);
    
    // SECONDI: 3 piatti separati (carne, pesce, vegan) o messaggio se BAR
    renderSecondiCategory();
    
    // DESSERT: 3 piatti o messaggio se BAR
    renderFoodCategory('dessert', appState.currentMenu.dessert || []);
    
    // CLASSICI: tutti (o messaggio se BAR)
    renderFoodCategory('fissi', appState.currentMenu.fissi || []);
    
    // BEVANDE: sempre disponibili
    renderCategory('bibite', appState.currentMenu.bibite || []);
}

function renderFoodCategory(categoryId, items) {
    const container = document.getElementById(`menu-${categoryId}`);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (appState.serviceType === 'BAR') {
        // Mostra messaggio "Non disponibili durante il servizio bar"
        const categoryTitle = getCategoryTitle(categoryId);
        container.innerHTML = `
            <div class="disabled-message">
                <i class="fas fa-utensils"></i>
                <h3>${categoryTitle} non disponibili</h3>
                <p>I ${categoryTitle.toLowerCase()} non sono disponibili durante il servizio bar.<br>
                   Disponibili solo durante pranzo (11:30-14:30) e cena (18:30-23:30).</p>
            </div>
        `;
    } else {
        // Mostra i piatti normalmente
        items.forEach(item => {
            const itemName = typeof item === 'object' ? item.name : item;
            const itemQuantity = appState.cart[itemName] || 0;
            
            container.innerHTML += `
                <div class="menu-item">
                    <div class="item-info">
                        <h4>${itemName}</h4>
                        <div class="item-price">€ ${getItemPrice(itemName)}</div>
                    </div>
                    <div class="item-controls">
                        <button class="ctrl-btn" onclick="updateCart('${itemName}', -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="qty">${itemQuantity}</span>
                        <button class="ctrl-btn" onclick="updateCart('${itemName}', 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
        });
    }
}

function getCategoryTitle(categoryId) {
    const titles = {
        'antipasti': 'Antipasti',
        'primi': 'Primi Piatti',
        'secondi': 'Secondi Piatti',
        'dessert': 'Dessert',
        'fissi': 'Classici'
    };
    return titles[categoryId] || categoryId;
}

function renderSecondiCategory() {
    const carneContainer = document.getElementById('menu-secondi-carne');
    const pesceContainer = document.getElementById('menu-secondi-pesce');
    const veganContainer = document.getElementById('menu-secondi-vegan');
    
    if (appState.serviceType === 'BAR') {
        // Mostra messaggio per tutte le sotto-categorie
        const message = `
            <div class="disabled-message">
                <i class="fas fa-drumstick-bite"></i>
                <h3>Secondi Piatti non disponibili</h3>
                <p>I secondi piatti non sono disponibili durante il servizio bar.<br>
                   Disponibili solo durante pranzo (11:30-14:30) e cena (18:30-23:30).</p>
            </div>
        `;
        
        if (carneContainer) carneContainer.innerHTML = message;
        if (pesceContainer) pesceContainer.innerHTML = message;
        if (veganContainer) veganContainer.innerHTML = message;
    } else {
        // Mostra i secondi normalmente
        if (carneContainer && appState.currentMenu.secondi_carne && appState.currentMenu.secondi_carne.length > 0) {
            renderSingleSecondo(carneContainer, appState.currentMenu.secondi_carne[0]);
        } else if (carneContainer) {
            carneContainer.innerHTML = '<p class="no-items">Non disponibile</p>';
        }
        
        if (pesceContainer && appState.currentMenu.secondi_pesce && appState.currentMenu.secondi_pesce.length > 0) {
            renderSingleSecondo(pesceContainer, appState.currentMenu.secondi_pesce[0]);
        } else if (pesceContainer) {
            pesceContainer.innerHTML = '<p class="no-items">Non disponibile</p>';
        }
        
        if (veganContainer && appState.currentMenu.secondi_vegan && appState.currentMenu.secondi_vegan.length > 0) {
            renderSingleSecondo(veganContainer, appState.currentMenu.secondi_vegan[0]);
        } else if (veganContainer) {
            veganContainer.innerHTML = '<p class="no-items">Non disponibile</p>';
        }
    }
}

function renderSingleSecondo(container, item) {
    if (!item) return;
    
    const itemName = item;
    const itemQuantity = appState.cart[itemName] || 0;
    
    container.innerHTML = `
        <div class="menu-item">
            <div class="item-info">
                <h4>${itemName}</h4>
                <div class="item-price">€ ${getItemPrice(itemName)}</div>
            </div>
            <div class="item-controls">
                <button class="ctrl-btn" onclick="updateCart('${itemName}', -1)">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="qty">${itemQuantity}</span>
                <button class="ctrl-btn" onclick="updateCart('${itemName}', 1)">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `;
}

function renderCategory(categoryId, items) {
    const container = document.getElementById(`menu-${categoryId}`);
    if (!container) return;
    
    container.innerHTML = '';
    
    items.forEach(item => {
        const itemName = typeof item === 'object' ? item.name : item;
        const itemQuantity = appState.cart[itemName] || 0;
        
        container.innerHTML += `
            <div class="menu-item">
                <div class="item-info">
                    <h4>${itemName}</h4>
                    <div class="item-price">€ ${getItemPrice(itemName)}</div>
                </div>
                <div class="item-controls">
                    <button class="ctrl-btn" onclick="updateCart('${itemName}', -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="qty">${itemQuantity}</span>
                    <button class="ctrl-btn" onclick="updateCart('${itemName}', 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
    });
}

function getItemPrice(itemName) {
    // Prezzi per MSC Patrizia
    if (itemName.includes("Acqua")) return "3.00";
    if (itemName.includes("Coca") || itemName.includes("Fanta") || itemName.includes("Sprite")) return "5.00";
    if (itemName.includes("Birra")) return "7.00";
    if (itemName.includes("Vino") || itemName.includes("Prosecco")) return "9.00";
    if (itemName.includes("Caffè") || itemName.includes("Cappuccino") || itemName.includes("Tè")) return "4.00";
    if (itemName.includes("Spritz") || itemName.includes("Negroni") || itemName.includes("Mojito")) return "12.00";
    if (itemName.includes("Antipasto") || itemName.includes("Bruschetta") || itemName.includes("Carpaccio")) return "14.00";
    if (itemName.includes("Primo") || itemName.includes("Pasta") || itemName.includes("Risotto")) return "18.00";
    if (itemName.includes("Secondo") || itemName.includes("Filetto") || itemName.includes("Pollo") || itemName.includes("Pesce")) return "25.00";
    if (itemName.includes("Bistecca") || itemName.includes("Fiorentina")) return "45.00";
    if (itemName.includes("Dessert") || itemName.includes("Dolce")) return "10.00";
    if (itemName.includes("Burger") || itemName.includes("Hamburger")) return "22.00";
    return "20.00";
}

// ============ 7. GESTIONE CARRELLO ============
function updateCart(itemName, change) {
    if (!appState.cart[itemName]) {
        appState.cart[itemName] = 0;
    }
    
    appState.cart[itemName] += change;
    
    if (appState.cart[itemName] <= 0) {
        delete appState.cart[itemName];
    }
    
    updateCartCount();
    updateCartDisplay(itemName);
}

function updateCartCount() {
    let total = 0;
    Object.values(appState.cart).forEach(q => total += q);
    
    document.getElementById('cart-count').textContent = total;
    
    const cartBtn = document.getElementById('cart-btn');
    if (total > 0) {
        cartBtn.classList.add('has-items');
    } else {
        cartBtn.classList.remove('has-items');
    }
}

function updateCartDisplay(itemName) {
    document.querySelectorAll('.menu-item').forEach(item => {
        const titleElement = item.querySelector('.item-info h4');
        if (titleElement && titleElement.textContent.trim() === itemName) {
            const qtyElement = item.querySelector('.qty');
            if (qtyElement) {
                qtyElement.textContent = appState.cart[itemName] || 0;
            }
        }
    });
}

// ============ 8. RESET TUTTI GLI ORDINI DOPO CONFERMA ============
function resetAllOrders() {
    console.log("Resettando tutti gli ordini...");
    
    // 1. Reset dello stato carrello
    appState.cart = {};
    
    // 2. Reset contatore carrello
    updateCartCount();
    
    // 3. Reset tutte le quantità visualizzate nei menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        const qtyElement = item.querySelector('.qty');
        if (qtyElement) {
            qtyElement.textContent = '0';
        }
    });
    
    // 4. Reset campo numero camera
    document.getElementById('room-number').value = '';
    
    console.log("Tutti gli ordini sono stati resettati");
}

// ============ 9. CHECKOUT ============
function goToCheckout() {
    if (Object.keys(appState.cart).length === 0) {
        alert("Il carrello è vuoto!");
        return;
    }
    
    renderOrderSummary();
    showView('checkout-view');
}

function renderOrderSummary() {
    const summaryElement = document.getElementById('order-summary');
    summaryElement.innerHTML = '';
    
    let total = 0;
    
    Object.entries(appState.cart).forEach(([itemName, quantity]) => {
        const price = parseFloat(getItemPrice(itemName));
        const itemTotal = price * quantity;
        total += itemTotal;
        
        summaryElement.innerHTML += `
            <div class="order-item">
                <div class="item-info">
                    <span class="item-name">${itemName}</span>
                    <span class="item-price">€ ${price.toFixed(2)}</span>
                </div>
                <div class="item-controls">
                    <span class="item-qty">x${quantity}</span>
                    <span class="item-total">€ ${itemTotal.toFixed(2)}</span>
                </div>
            </div>
        `;
    });
    
    summaryElement.innerHTML += `
        <div class="order-total">
            <span>TOTALE</span>
            <span class="total-amount">€ ${total.toFixed(2)}</span>
        </div>
    `;
}

function backToMenu() {
    showView('menu-view');
}

// ============ 10. CONFERMA ORDINE CON RESET ============
function confirmOrder() {
    const roomNumber = document.getElementById('room-number').value;
    
    if (!roomNumber || roomNumber < 1 || roomNumber > 999) {
        alert("Inserisci un numero camera valido (1-999)");
        document.getElementById('room-number').focus();
        return;
    }
    
    console.log(`Ordine MSC Patrizia per camera ${roomNumber}:`, appState.cart);
    
    document.getElementById('confirmed-room').textContent = roomNumber;
    
    // RESET TUTTI GLI ORDINI DOPO CONFERMA
    resetAllOrders();
    
    showView('success-view');
}

function backToMainMenu() {
    // Quando si torna al menu dopo conferma, le quantità sono già 0
    checkServiceStatus();
}

// ============ UTILITY ============
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('it-IT', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

function updateServiceStatus() {
    const statusElement = document.getElementById('status-text');
    const serviceBadge = document.getElementById('service-status');
    
    if (!statusElement || !serviceBadge) return;
    
    const statusText = {
        'LUNCH': 'Pranzo',
        'DINNER': 'Cena',
        'BAR': 'Servizio Bar',
        'CLOSED': 'Chiuso'
    }[appState.serviceType] || 'Servizio';
    
    statusElement.textContent = statusText;
    
    // Aggiungi classe speciale per BAR
    if (appState.serviceType === 'BAR') {
        serviceBadge.classList.add('bar-mode');
    } else {
        serviceBadge.classList.remove('bar-mode');
    }
}

// ============ INIZIALIZZAZIONE ============
document.addEventListener('DOMContentLoaded', function() {
    console.log("MSC Patrizia Room Service - Caricato");
    
    setInterval(updateClock, 1000);
    setInterval(checkServiceStatus, 30000);
    
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && document.getElementById('login-view').classList.contains('active')) {
            handleLogin();
        }
    });
});