// PayPal Sandbox Configuration
const PAYPAL_CLIENT_ID = 'AZidt6ZkI2iPW81EEFxFidsQcIlNSSh0Xbt6iyJcuaonmEDDbKnfs0Sh0bT4xplyP4PxMw5gcN9GOSNk';

// PayPal Currency
const PAYPAL_CURRENCY = 'INR'; // Indian Rupees

// Initialize PayPal
function initPayPal() {
    // PayPal SDK will be loaded via script tag
    console.log('✅ PayPal SDK initialized');
}

// Convert paisa to rupees for PayPal (PayPal expects major currency units)
function convertToPayPalAmount(amount) {
    // If amount is in paisa (smallest unit), convert to rupees
    // Otherwise, return as is
    return (amount / 1).toFixed(2); // Keep as rupees
}