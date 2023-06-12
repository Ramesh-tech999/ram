frappe.ready(async function() {
	
	var coursesDetails = []
	var checkedNames = []
	var onlyNames = []
	await frappe.call({
		method: "ram.ram.doctype.courses.courses.get_all_roles",
		callback: function(r) {
			coursesDetails = r.message
		}
	});
	
  var parentContainer = $('<div class="parent"></div>');

  coursesDetails.forEach(function(name) {
    var labelElement = $('<label></label>').text(name.name);
    var checkboxElement = $('<input type="checkbox">');

    checkboxElement.on('change', function() {
      if (this.checked) {
        
        if (!checkedNames.includes(name)) {
          checkedNames.push(name);
		  onlyNames.push(name.name)
        }
      } else {
        var index = checkedNames.indexOf(name);
        if (index > -1) {
          checkedNames.splice(index, 1);
		  onlyNames.splice(index, 1);
        }
      }
	  
	  let names = onlyNames.join(', ')
	  console.log(names)
	  frappe.web_form.set_value('courses_names', names);
	  
	  const totalAmountIRN = checkedNames.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.amountinr;
	  }, 0);
	  frappe.web_form.set_value('amount_inr', totalAmountIRN);

	  const totalAmountUSD = checkedNames.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.amountusd;
	  }, 0);
	  frappe.web_form.set_value('amount_usd', totalAmountUSD);

	const totalAmountGST = checkedNames.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.gst_inr;
	  }, 0);
	  frappe.web_form.set_value('total_amount_with_gst_inr', totalAmountGST + totalAmountIRN);
    });
	

    labelElement.prepend(checkboxElement);

    parentContainer.append(labelElement);
  });
	
  parentContainer.css({
    'width': '100%',
    'display': 'flex',
	'justify-content': 'space-around',
    'flex-wrap': 'wrap'
  });
  
	$('.form-page').prepend(parentContainer);

})