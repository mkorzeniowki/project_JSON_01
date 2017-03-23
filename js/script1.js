window.onload = init;
function init(){



}

var books = [
  {author: "Stephen King", title: "Lśnienie", species: "horror", pages: 500 },
  {author: "Stephen King", title: "Bastion", species: "horror", pages: 300 },
  {author: "Stephen King", title: "Przebudzenie", species: "horror", pages: 200 },
  {author: "Stephen King", title: "Ręka mistrza", species: "horror", pages: 100 },
  {author: "Jo Nesbo", title: "Syn", species: "thriller", pages: 240 },
  {author: "Jo Nesbo", title: "Pierwszy śnieg", species: "thriller", pages: 320 },
  {author: "Jo Nesbo", title: "Karaluchy", species: "thriller", pages: 323 },
  {author: "Marion Puzo", title: "Ojciec chrzestny", species: "thriller", pages: 423 }
]

var regularExpresssionCheck = "";
var checkedTab = [];
var inputValue = "";
$('#searchBook').keydown(showBookList);

var checkedRadio = $('input[name=search-type]:checked', '#myForm').val();

$('#myForm input').on('change', function() {
   checkedRadio = $('input[name=search-type]:checked', '#myForm').val();
});


function showBookList(){
 inputValue = $('#searchBook').val().replace(' ', '');
 regularExpresssionCheck = inputValue;
 checkedTab = [];
  var booksList = books.map(checkRegular);
  $('#books-list-content').html(checkedTab);
  console.log(inputValue);
  console.log(booksList);
  console.log(checkedTab);
}

var listOfAuthors = function(bookList){
  return bookList.author;
}

var checkRegular = function(tab){
  var re = new RegExp(regularExpresssionCheck,'i');
  var reTest = re.test(tab.author);
  if(reTest){
    checkedTab.push("<li>" +  tab.author + " - " + tab.title + "</li>");
  }
  console.log(re.mat)
  return reTest;
}
