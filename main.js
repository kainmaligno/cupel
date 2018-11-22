$(window).on("load", () =>{

    $('#btn').on("click", () => {
    
       $.post('https://execution-use.ci360.sas.com/t/e/df2b9cb68c00010112fb657b', (data,status)=> {
        console.log('llegas')
        alert("data" + data + "status" + status)
       })
      
    })
   
})
