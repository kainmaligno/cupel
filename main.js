    $('#btn').on("click", (e) => {
    // e.preventDefault()
         $.post('https://execution-use.ci360.sas.com/t/e/df2b9cb68c00010112fb657b',(data)=>{alert('funciona'+data)})
      console.log('estas en boton de click')
    })
   
