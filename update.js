function changeTabInfo() {
    var title = document.getElementById('title').value;
    var favicon = document.getElementById('favicon').value;

    document.title = title;
    document.getElementById('tabIcon').href = favicon;
}
