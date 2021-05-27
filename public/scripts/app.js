function filterFunction() {
    let input = document.querySelector("#textarea");
    let data = input.value.toUpperCase();
    let div = document.querySelector(".dropdown");
    let items = document.querySelectorAll(".item");
    for (i = 0; i < items.length; i++) {
        txtValue = items[i].innerText;
        if (txtValue.toUpperCase().match(data)) {
            items[i].style.display = "block";
        }
        else{
            items[i].style.display = "none";
        }
        if(data === "" ){
            items[i].style.display = "none";
        }
    }
}
