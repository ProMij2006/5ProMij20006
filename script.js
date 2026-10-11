document.addEventListener("DOMContentLoaded", function() {
    const calcBtn = document.getElementById("calcBtn");
    const productSelect = document.getElementById("productSelect");
    const quantityInput = document.getElementById("quantityInput");
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    
    quantityInput.addEventListener("input", function() {
        const quantityValue = quantityInput.value.trim();
        const regex = /^[0-9]+$/;

        
        if (quantityValue === "") {
            quantityInput.classList.remove("is-invalid");
            errorDiv.textContent = "";
            return;
        }

        
        if (!regex.test(quantityValue) || parseInt(quantityValue, 10) <= 0) {
            quantityInput.classList.add("is-invalid");
            errorDiv.textContent = "Нужно вводить только цифры больше нуля!";
        } else {
            
            quantityInput.classList.remove("is-invalid");
            errorDiv.textContent = "";
        }
    });

    
    calcBtn.addEventListener("click", function() {
        resultDiv.textContent = "";
        const quantityValue = quantityInput.value.trim();
        const regex = /^[0-9]+$/;

        
        if (!regex.test(quantityValue) || parseInt(quantityValue, 10) <= 0) {
            quantityInput.classList.add("is-invalid");
            errorDiv.textContent = "Нужно вводить только цифры больше нуля!";
            return;
        }

        const quantity = parseInt(quantityValue, 10);
        const price = parseInt(productSelect.value, 10);

        
        const totalCost = price * quantity;

        
        resultDiv.textContent = "Стоимость заказа: " + totalCost.toLocaleString('ru-RU') + " руб.";
    });
});