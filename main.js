window.onload = function(){
    form.onsubmit= function(event){

        event.preventDefault();

        var nameInput =document.getElementById("name");
        if (nameInput.value.trim()=== "" ) {
            alert("Porfavor Ingrese el nombre del producto")
            return false
        }

        var DescripcionInput = document.getElementById("Descripcion");

        if (DescripcionInput.value.trim()=== "" ) {
            alert("Porfavor Ingrese la descripcion del producto")
            return false
        }

        var PrecioInput = document.getElementById("Precio");

        if (PrecioInput.value.trim()=== "" ) {
            alert("Porfavor Ingrese el precio del producto")
            return false
        }

        if (isNaN(PrecioInput.value)) {
            alert("Ingrese solor numeros en el precio","Error");
            return false;
          }
    }
}