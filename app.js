function Send() {
    var selected_box = document.getElementById('foodMenu').selectedIndex;
    var where_field = document.getElementById('Where').value;
    if (where_field == "") {
        document.getElementById('Result').innerHTML = "Адрес доставки не должен быть пустым";
    }
    else {
        switch (selected_box) {
            case 0:
                {
                    document.getElementById('Result').innerHTML = `Заказ будет доставлен по адресу ${where_field}. Стоимость 250рублей. `;
                }
                break;
            case 1:
                {
                    document.getElementById('Result').innerHTML = `Заказ будет доставлен по адресу ${where_field}. Стоимость 450рублей. `;
                }
                break;
            case 2:
                {
                    document.getElementById('Result').innerHTML = `Заказ будет доставлен по адресу ${where_field}. Стоимость 650рублей. `;
                }
                break;
            default:
        }
    }
}
//# sourceMappingURL=app.js.map