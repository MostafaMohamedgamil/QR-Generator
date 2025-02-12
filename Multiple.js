document.getElementById("addInputBtn").addEventListener("click", () => {
    let inputContainer = document.getElementById("input-container");
    let inputGroup = document.createElement("div");
    inputGroup.className = "input-group";

    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "input_text";
    newInput.className = "qr-input";
    newInput.placeholder = "Enter text or URL";
    newInput.autocomplete = "off";

    let removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("onclick", "removeInput(this)");

    inputGroup.appendChild(newInput);
    inputGroup.appendChild(removeBtn);
    inputContainer.appendChild(inputGroup);
});

// Fungsi untuk menghapus input field
function removeInput(element) {
    element.parentElement.remove();
}

// Fungsi untuk menghasilkan QR Code tunggal dengan semua input
document.getElementById("generateBtn").addEventListener("click", () => {
    let inputElements = document.querySelectorAll(".qr-input");
    let qrCodesContainer = document.getElementById("qr-codes-container");
    qrCodesContainer.innerHTML = ""; // Menghapus QR Codes yang sudah ada

    // Menggabungkan semua input
    let combinedText = '';
    inputElements.forEach(inputElement => {
        if (inputElement.value.trim() !== "") {
            combinedText += inputElement.value.trim() + " | ";  // Menambahkan pemisah antara nilai input
        }
    });

    if (combinedText) {
        // Menghasilkan QR Code tunggal untuk semua input yang digabungkan
        let qrDiv = document.createElement("div");
        qrDiv.className = "qr-code";
        qrCodesContainer.appendChild(qrDiv);

        let qrCode = new QRCode(qrDiv, {
            text: combinedText.trim(),
            width: 180,
            height: 180,
            colorDark: "#000000",
            colorLight: "#FFFFFF",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});
