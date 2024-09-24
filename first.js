
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const processor = document.getElementById('processor').value;
    const gpu = document.getElementById('gpu').value;
    const ram = document.getElementById('ram').value;
    const storage = document.getElementById('storage').value;
    const other = document.getElementById('other').value;
    const monitor = document.getElementById('monitor').value;
    
    let processorPrice = 0;
    let gpuPrice = 0;
    let ramPrice = 0;
    let storagePrice = 0;
    let otherPrice = 0;
    let monitorPrice = 0;

    // cpu prices
    if (processor === null) processorPrice = 0;
    if (processor === 'Intel i3') processorPrice = 200;
    if (processor === 'Intel i7') processorPrice = 300;
    if (processor === 'AMD Ryzen 5')processorPrice= 110;
    if (processor === 'AMD Ryzen 7') processorPrice= 250;

    //GPU prices
    if(gpu===null) gpuPrice=0;
    if(gpu==='NVIDIA GTX 1650') gpuPrice=150;
    if(gpu==='NVIDIA GTX 3060') gpuPrice=400;
    if(gpu==='JieShou AMD RX580 8G') gpuPrice=140;
    if(gpu==='AMD Radeon RX 6600') gpuPrice=300;

    // RAM prices
    if (ram=== null) ramPrice = 0;
    if (ram=== '2GB') ramPrice = 15;
    if (ram=== '4GB') ramPrice = 30;
    if (ram=== '8GB') ramPrice = 50;
    if (ram === '16GB') ramPrice = 80;
    if (ram === '32GB') ramPrice = 150;

    // Storage prices
    if (storage === null) storagePrice = 0;
    if (storage ==='256GB pendrive') storagePrice =40;
    if (storage === '500GB SSD') storagePrice = 70;
    if (storage === '1TB portable SSD') storagePrice = 120;
    if (storage === '5TB HDD') storagePrice = 100;

    //other prices
    if (other === null) otherPrice = 0;
    if (other === 'HDMI cable') otherPrice = 10;
    if (other === 'Printer') otherPrice = 300;
    if (other === 'keyboard')otherPrice= 150;
    if (other === 'mouse') otherPrice= 40;

    //monitor price
    if (monitor === "yes") monitorPrice = 600;
    if (monitor === 'no') monitorPrice = 0;

    const quantity = parseInt(document.getElementById('quantity').value);
    // Create the order summary
    const summary = `
        <h4>your selected items and there price is :</h4>
        <p><strong>Processor:</strong> ${processor}</p>
        <p><strong>GPU:</strong> ${gpu}</p>
        <p><strong>RAM:</strong> ${ram}</p>
        <p><strong>Storage:</strong> ${storage}</p>
        <p><strong>Other:</strong> ${other}</p>
        <p><strong>Monitor:</strong> ${monitor}</p>

    `;

    // Display the order summary
    document.getElementById('orderSummary').innerHTML = summary;
    const totalPrice = (processorPrice + gpuPrice + ramPrice + storagePrice + otherPrice + monitorPrice) * quantity;
    document.getElementById('total').textContent = `Total: $${totalPrice}`;

});
//confirming order
let confirm=document.querySelector("#confirm");
confirm.addEventListener("click",()=>{
    alert(`Yay!your order has been placed `);
})