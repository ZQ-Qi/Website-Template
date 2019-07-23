require('.././libs/dataTables.bootstrap4');
(function() {
    "use strict";
    var element = $(".data-tables");
    element.each(function () {
        var $this = $(this);
        var options = getDataOptions($this);
        if(options){
            $this.DataTable(options);
        }else{
            $this.DataTable();
        }
    });
}());

