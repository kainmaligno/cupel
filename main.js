$(window).on("load", () =>{

    $('#btn').on("click", () => {
       alert("si funciona el boton")
       $.post('https://execution-use.ci360.sas.com/t/e/df2b9cb68c00010112fb657b')
    })
   
})
