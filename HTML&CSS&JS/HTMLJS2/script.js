function logout(element){
    element.innerText="Logout"
}

function removeDummy() {
    var elem = document.getElementById('dummy');
    elem.parentNode.removeChild(elem);
    return false;
}
