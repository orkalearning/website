var itemArr = []
var editing
var table = document.getElementById('table')
function addItem() {
    table.innerHTML = ''
    var currentItem = document.getElementById('item').value
    var currentPrice = document.getElementById('price').value

    if (currentItem && currentPrice) {
        var addItems = { item: currentItem, price: currentPrice }
        itemArr.push(addItems)

        document.getElementById('item').value = ''
        document.getElementById('price').value = ''
    } else {
        alert('ENTER BOTH ITEM AND PRICE')
    }
    update(itemArr)
}


function showAll() {
    update(itemArr)
}

function deleteItem(i) {
    itemArr.splice(itemArr.indexOf(i), 1)
    update(itemArr)
}

function update(j) {
    table.innerHTML = ''
    j.forEach(function (i) {

        var row = document.createElement('tr')
        table.appendChild(row)

        var itemData = document.createElement('td')
        itemData.classList.add('data')
        itemData.innerText = i.item
        row.appendChild(itemData)

        var priceData = document.createElement('td')
        priceData.classList.add('data')
        priceData.innerText = i.price
        row.appendChild(priceData)

        var deleteButton = document.createElement('td')
        deleteButton.classList.add('buttons')
        var button = document.createElement('button')
        button.classList.add('but')
        button.innerText = 'DELETE'
        button.onclick = function () {
            deleteItem(i)
        }
        deleteButton.appendChild(button)
        row.appendChild(deleteButton)

        var editButton = document.createElement('td')
        editButton.classList.add('buttons')
        var button = document.createElement('button')
        button.classList.add('but')
        button.innerText = 'EDIT'
        button.onclick = function () {
            edit(i)
        }
        editButton.appendChild(button)
        row.appendChild(editButton)
    })
}

function search() {
    table.innerText = ''
    let search = document.getElementById('search').value

    let filtered = itemArr.filter(
        function (i) {
            if (search === i.item || i.item.startsWith(search)) {
                return i
            }
        }
    )
    update(filtered)
}


function edit(i) {
    document.getElementById('popupOverlay').style.display = 'block'
    document.getElementById('popup').style.display = 'block'

    editing = i
    var itemEdit = document.getElementById('editNameInput').value = i.item
    var priceEdit = document.getElementById('editPriceInput').value = i.price
}

function save() {
    var editedItem = document.getElementById('editNameInput').value
    var editedprice = document.getElementById('editPriceInput').value
    if (editedItem && editedprice) {
        itemArr[itemArr.indexOf(editing)] = { item: editedItem, price: editedprice, }
        update(itemArr)
        cancelAll()
    } else {
        alert('INPUT BOTH ITEM AND PRICE')
    }
}


function cancelAll() {
    document.getElementById('popupOverlay').style.display = 'none'
    document.getElementById('popup').style.display = 'none'
}

