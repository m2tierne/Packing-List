document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemInput = document.getElementById('itemInput');
    const categorySelect = document.getElementById('categorySelect');
    const newItem = itemInput.value;
    const category = categorySelect.value;
    if (newItem) {
        addItem(newItem, category);
        itemInput.value = ''; // Clear input after adding
    }
});

function addItem(item, category) {
    const li = document.createElement('li');
    li.textContent = `${item} (${category})`;
    li.className = `category-${category.toLowerCase()}`;
    li.setAttribute('data-category', category.toLowerCase());

    const packButton = document.createElement('button');
    packButton.textContent = 'Pack';
    packButton.className = 'button-pack';
    packButton.onclick = function() {
        li.classList.toggle('packed');
    };

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'button-remove';
    removeButton.onclick = function() {
        li.remove();
    };

    li.appendChild(packButton);
    li.appendChild(removeButton);
    document.getElementById('packingList').appendChild(li);
}

function filterItems() {
    const filterValue = document.getElementById('filterSelect').value;
    const listItems = document.querySelectorAll('#packingList li');
    listItems.forEach(li => {
        if (filterValue === 'all' || li.getAttribute('data-category') === filterValue) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
}
