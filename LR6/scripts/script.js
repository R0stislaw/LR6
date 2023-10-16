function moveElements() {
    var firstParagraph = document.getElementById('firstParagraph').textContent;
    var secondParagraph = document.getElementById('secondParagraph').textContent;
    var thirdParagraph = document.getElementById('thirdParagraph').textContent;
    var img = document.getElementById('image');
    var table = document.querySelector('table');
    var textContents = document.getElementById('contentPage') 
    document.getElementById('cell1').textContent = firstParagraph;
    document.getElementById('cell4').textContent = secondParagraph;
    document.getElementById('cell7').textContent = thirdParagraph;
    textContents.innerHTML = '';
    table.parentNode.insertBefore(img, table);
}