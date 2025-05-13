async function fetchStockData() {
    const ticker = document.getElementById('ticker').value;
    if (!ticker) {
        alert('Please enter a valid stock ticker');
        return;
    }

    const response = await fetch(`/api/stock?ticker=${ticker}`);
    const data = await response.json();
    
    document.getElementById('output').innerText = JSON.stringify(data, null, 2);
}