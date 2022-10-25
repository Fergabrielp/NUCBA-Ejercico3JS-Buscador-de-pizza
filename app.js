const Pizzas = [
    {
        id: 1,
        nombre: "Mozzarella",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Aceitunas"],
        precio: 500,
        img: './img/Pizza-1.png'
    },
    {
        id: 2,
        nombre: "Fugazzetta",
        ingredientes: ["Cebolla", "Queso mozzarella"],
        precio: 650,
        img: './img/Pizza-2.png'
    },
    {
        id: 3,
        nombre: "Napolitana",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Tomate", "ajo"],
        precio: 800,
        img: './img/Pizza-3.png'
    },
    {
        id: 4,
        nombre: "Margarita",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Albahaca"],
        precio: 800,
        img: './img/Pizza-4.png'
    },
    {
        id: 5,
        nombre: "Calabresa",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Calabresa"],
        precio: 900,
        img: './img/Pizza-5.png'
    },
    {
        id: 6,
        nombre: "Rúcula",
        ingredientes: ["Queso mozzarella", "Rúcula", "Tomates cherry", "Olivas negras", "Jamón crudo",],
        precio: 1100,
        img: './img/Pizza-6.png'
    }
]

const input = document.getElementById('input')
const form = document.getElementById('form')
const container = document.getElementById('card-container')


const msgError = (msg) => {
    container.innerHTML = `<p class="error">${msg}</p>`
}

const saveLocalStorage = (pizza) => {
    localStorage.setItem('Pizza', JSON.stringify(pizza))
}

const pizzaInLocalStorage = JSON.parse(localStorage.getItem('Pizza'))


const filterPizza = (e) => {
    e.preventDefault()
    const id = Number(input.value)
    const filteredPizza = Pizzas.filter(pizza => id === pizza.id)[0]

    if (input.value === "") {
        msgError('Este campo no puede estar vacio')
        localStorage.removeItem('Pizza')
    }
    else if (!filteredPizza) {
        msgError('No se encontró la Pizza')
        localStorage.removeItem('Pizza')
    } else {
        renderCard(filteredPizza)
        saveLocalStorage(filteredPizza)
    }
    form.reset()
}


const renderCard = (filteredPizza) => {
    container.innerHTML = `<div class="card">
                <h2 class="pizza-name">${filteredPizza.nombre}</h2>
                <div class="pizza-img">
                    <img src=${filteredPizza.img} alt="Imagen de Pizza width="150" height="150"">
                </div>
                <h3>Ingredientes:</h3>
                <h3 class="pizza-ingredients">${filteredPizza.ingredientes.join(", ")}</h3>
                <h3 class="pizza-value">$${filteredPizza.precio}</h3>
            </div>`
}


const init = () => {
    if (pizzaInLocalStorage) {
        renderCard(pizzaInLocalStorage)
        form.addEventListener('submit', filterPizza)
    } else {
        form.addEventListener('submit', filterPizza)
    }
}

init()


