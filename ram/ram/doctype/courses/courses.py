# Copyright (c) 2023, ramesh and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Courses(Document):
	pass
@frappe.whitelist()
def get_all_roles():
    records = frappe.get_all('Courses', filters={}, fields='*')
    return records