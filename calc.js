// 1. SCOPE DEMONSTRATION (var, let, const)
const TAX_LIMIT = 50; // const: Cannot be reassigned, block-scoped
let calculationCount = 0; // let: Can be reassigned, block-scoped

if (true) {
    var globalAlert = "Calculator initialized!"; // var: Function/globally scoped (escapes this block)
}
console.log(globalAlert); // Works because var is not block-scoped

// 2. THE CALCULATOR FUNCTION
function calculateBill() {
    // Fetching user inputs
    const billInput = parseFloat(document.getElementById("amount").value) || 0;
    const taxInput = parseFloat(document.getElementById("tax").value) || 0;
    const discountInput = parseFloat(document.getElementById("discount").value) || 0;

    // Creating an object to demonstrate destructuring
    const billDetails = {
        subtotal: billInput,
        taxRate: taxInput,
        discount: discountInput
    };

    // DESTRUCTURING: Extracting properties directly into local variables
    const { subtotal, taxRate, discount } = billDetails;

    // Core logic
    const taxAmount = subtotal * (taxRate / 100);
    const finalTotal = subtotal + taxAmount - discount;

    calculationCount++; // Incrementing our let variable

    // TEMPLATE LITERALS: Using backticks (`) and ${} for clean string interpolation
    const resultHTML = `
        <h3>Invoice Summary</h3>
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax (${taxRate}%): $${taxAmount.toFixed(2)}</p>
        <p>Discount: -$${discount.toFixed(2)}</p>
        <strong>Total Bill: $${finalTotal.toFixed(2)}</strong>
        <hr>
        <small>Calculations performed in this session: ${calculationCount}</small>
    `;

    // Displaying the output on the page
    document.getElementById("result").innerHTML = resultHTML;
}

// Event listener to trigger the calculation on button click
document.getElementById("calcBtn").addEventListener("click", calculateBill);
