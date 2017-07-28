e = [];
j = [
  {"hoge":"piyo", "fuga": 3},
  {"hoge":"piyo2"},
  {"hoge":"piyo3"}
];

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].hoge === nameKey) {
            return myArray[i];
        }
    }
}

e = search("piyo", j);

console.log(e)
