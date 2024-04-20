function titleFormat(cadena){
    if (!cadena) {
        return "invalid input";
      }
      let primeraLetra = cadena.charAt(0);
      let restoTitulo = cadena.slice(1);
    
      primeraLetra = primeraLetra.toUpperCase();
      restoTitulo = restoTitulo.toLowerCase();
    
      const nuevoTexto = primeraLetra + restoTitulo;
    
      return nuevoTexto;
    }

    console.log(titleFormat("hello world"))
    console.log(titleFormat("HELLO world"))
    console.log(titleFormat("HellO WOrLd"))