var searchURL = window.location.search.substring(1);
var queryArray = searchURL.split('&');

// container to append page 1 information
var $elementContainer = document.querySelector('.elContainer');

for (var i = 0; i < queryArray.length; i++) {
var tempArray = [];
tempArray = queryArray[i].split('=');

// key --> name of input tag
// value --> value of what user chose
var key = tempArray[0];
var value = tempArray[1];

// paragraph tag with name and value of user choice
// with css styles applied
var $p1 = document.createElement('p');
var $p2 = document.createElement('p');
$p1.style.display = 'inline-block';
$p2.style.display = 'inline-block';
$p1.style.margin = '10px';
$p2.style.margin = '10px';

var $pKey = document.createTextNode(key + ":");
var $pVal = document.createTextNode(value);
$p1.appendChild($pKey);
$p2.appendChild($pVal);

// append to show page 1 information
$elementContainer.appendChild($p1);
$elementContainer.appendChild($p2);

// append hidden input of page 1 within form to send information with checkout submit
var $input = document.createElement('input');
$input.type = 'hidden';
$input.className = 'page1-info';
$input.name = key;
$input.value = value;
var $form = document.querySelector('form');
$form.appendChild($input);

}
});
