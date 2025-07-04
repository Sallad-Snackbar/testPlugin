// Check if Alt1 API is available - FOR DEBUGGING ONLY
if (window.alt1) {
    console.log("Alt1 API detected! (This is the minimal test script)");
    // No Alt1 API calls (like alt1.screen, alt1.on, alt1.overlay) in this minimal version
    // to prevent TypeErrors and ensure smooth auto-discovery.
} else {
    console.log("Alt1 API not detected.");
    // Display a message if not running in Alt1 (for testing in regular browser)
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        outputDiv.textContent = "Alt1 Toolkit not detected. Please open this page in the Alt1 browser.";
    }
}