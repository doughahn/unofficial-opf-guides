document$.subscribe(function() {
  var tables = document.querySelectorAll("article .sortable-table + .md-typeset__scrollwrap .md-typeset__table table:not([class])")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})