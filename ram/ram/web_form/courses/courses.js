frappe.ready(function() {
	// bind events here
	frappe.web_form.on('amountinr', (field, value) => {
		const exchangeRate = 0.012; // 1 INR = 0.014 USD (example rate)
 		const amountUSD = value * exchangeRate;
 		const roundedAmountUSD = Math.round(amountUSD * 100) / 100;
		 frappe.web_form.set_value('amountusd', roundedAmountUSD)
	});
})