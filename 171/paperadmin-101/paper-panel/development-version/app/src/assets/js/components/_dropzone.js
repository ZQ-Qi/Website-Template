(function() {
    "use strict";
    var dropzone =require('dropzone');
    dropzone.options.fileUpload = {
        url: 'blackHole.php',
        addRemoveLinks: true,
        accept: function(file) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onloadend = function() {
                var content = fileReader.result;
                $('#file').val(content);
                file.previewElement.classList.add("dz-success");
            };
            file.previewElement.classList.add("dz-complete");
        }
    };

    $(".dropzone").dropzone({ url: "#" });
}());