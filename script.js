function updatePageSize(){
    var page_size_header = document.getElementById("page-size");
    page_size_header.innerHTML = window.outerWidth;
}

window.onload = function(){
    updatePageSize();
}

window.onresize = function(){
    updatePageSize();
}