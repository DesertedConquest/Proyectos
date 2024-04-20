function palindrome(texto) {
    const elementos = texto.split('');
    const elementosRevez = elementos.reverse();
    const elementosUnidos = elementosRevez.join('')
  
    const palindromo = texto === elementosUnidos;
    return palindromo;
  }

  console.log(palindrome('hello'))
  console.log(palindrome('hannah'))
  console.log(palindrome('anitalavalatina'))