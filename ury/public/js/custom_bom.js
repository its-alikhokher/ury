frappe.ui.form.on("BOM", {
    refresh(frm) {
        setTimeout(() => {
            frm.set_query("item", function() {
                return {
                    filters: {}
                };
            });
        }, 500);
    }
});
