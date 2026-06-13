let myBudget = 2575
let games =[
    {title: 'Sons of the forest', price: 2450},
    {title: 'Subnautica', price: 2400},
    {title: 'Red Dead Redemption 2', price: 7499}
]
const gameList = document.querySelector('#game-List')
const balanceElement = document.querySelector('#balance')
const addBtn = document.querySelector('#add-btn')
const nameInput = document.querySelector('#game-name')
const priceInput = document.querySelector('#game-price')
function render() {
    gameList.innerHTML =''
    let totalSpend = 0
    games.forEach((game) => {
        totalSpend +=game.price
        const card = document.createElement('div')
        card.classList.add('game-item')
        card.innerHTML = `
        <h3>${game.title}</h3>
        <p>${game.price} $</p>
        `
        gameList.appendChild(card)
    })
    balanceElement.textContent = myBudget - totalSpend
}
addBtn.addEventListener('click',() => {
    const name = nameInput.value
    const price = Number (priceInput.value)
    if (name !== '' && price > 0) {
        games.push({title: name, price: price})
        nameInput.value = ''
        priceInput.value = ''
        render()
    } else {
        alert('Заполни название и цену правильно! Далбаеб ебаный')
    }
})
render()