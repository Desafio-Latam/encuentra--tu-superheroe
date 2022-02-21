$(document).ready(function(){

    $("#mybutton").click(function () {
        //console.log("Hola")
        
        let valor = $("#buscar").val(); 
        const URLBASE = "https://akabab.github.io/superhero-api/api/id/";
        //console.log(valor)


        $.ajax({
          // Endpoint API
          //url: "https://akabab.github.io/superhero-api/api/id/"+valor+".json",
          url: `${URLBASE}/${valor}`,
          type: "GET",
          dataType: "JSON",
          success: (data) => {
            const newHero = data;
            console.log(data.name);
            let img = newHero.images.lg;
            let name = newHero.name;
            let gender = newHero.gender;
            $("#titulo").replaceWith(data.name);
            $("#imagenhero").replaceWith("src", data.images.lg);
          }
          
      });
    })
    



//no logro conexion



    /* //Buscar por id
    https://akabab.github.io/superhero-api/api/id/489.json */















});