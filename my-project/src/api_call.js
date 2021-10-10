function buildTable(json) {

    var table = document.createElement('table');
    table.classList.add('tbl')
    document.querySelector('.api').appendChild(table);
  
      json['entries'].forEach(({ API, Description,Category,Link}) => {
        
      let row = table.insertRow()
      var link = '<a target="_blank" href="'+Link+'">' + API + '</a>';

      row.insertCell().innerHTML = link
      row.insertCell().innerText = Description
      row.insertCell().innerText = Category

    })
  }
  
  var api_call = new XMLHttpRequest();
  api_call.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            buildTable(JSON.parse(this.responseText));
    }
  }
  
  api_call.open("GET", "https://api.publicapis.org/entries", true);
  api_call.send();