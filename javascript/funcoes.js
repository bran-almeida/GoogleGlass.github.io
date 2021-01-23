    function MudaFoto(foto) {
        document.getElementById("oculos").src = foto;
    }

    function calc_total(){
        var quantidade = parseInt(document.getElementById("campo_quantidade").value);
        var total = quantidade * 1500;
        document.getElementById("campo_total").value = total;

    }