// $.ajax ({ url: thepath, method: "GET"})
// .success(function (response) {
//    var json = $.parseJSON (response);
// });
const jsonfile = require('jsonfile')
const file = 'data.json'


jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  console.dir(obj)
})

// var fname = {
//     name: "Kali",
//     age: "19",
// }

// console.log(fname);

// var JSONItems = [];
// $.getJSON( "data.json", function( data){
//   JSONItems = data;
//   console.log(JSONItems);
// });
