import React from 'react'

export const isIncomplete = (inputLength, shouldHave) => {
    if(inputLength < shouldHave)
        return true
    else
        return false
}

//valida o cpf no momento que sai do campo
export const validarCPF = (valInput) => {

    let cpf = valInput.replace(/[^\d]+/g,'');
    // Valida 1o digito
    let add = 0, rev = 0, i = 0;

    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
            return false;

    for (i=0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i ++){
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }

    //???
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11){
        rev = 0;
    }
    if (rev != parseInt(cpf.charAt(10))){
        return false;
    }
    return true;
}


//formatação no onkeyup recebe o objeto e tipo de dado a ser validado
export const formatarCPF = (idInput, valInput) => {
    var strValor = valInput.replace(/[^\d]+/g,'')
    var inputLength = strValor.length;

    if (inputLength <= 11){
        strValor = strValor.replace(/(\d{3})(\d)/,"$1.$2")
        strValor = strValor.replace(/(\d{3})(\d)/,"$1.$2")
        strValor = strValor.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        return strValor;
    }
    else{
        var maxInput = valInput.substring(0, valInput.length - 1)
        return maxInput;
    }

}

//valida o cnpj no momento que sai do campo
export const validarCNPJ = (valInput) => {

    cnpj = valInput.replace(/[^\d]+/g,'')

    if(cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;


    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho)
    digitos = cnpj.substring(tamanho)
    soma = 0
    pos = tamanho - 7
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2)
            pos = 9
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado != digitos.charAt(0))
        return false

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;

    return true;

}

//formatação no onkeyup recebe o objeto e tipo de dado a ser validado
export const formatarCNPJ = (idInput, valInput) => {
        var strValor =  valInput.replace(/[^\d]+/g,'');
        var inputLength = strValor.length;

    if (inputLength <= 14){
        strValor = strValor.replace(/^(\d{2})(\d)/,"$1.$2");
        strValor = strValor.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
        strValor = strValor.replace(/\.(\d{3})(\d)/,".$1/$2");
        strValor = strValor.replace(/(\d{4})(\d)/,"$1-$2");

         document.getElementById(idInput).value = strValor;
    }
        else{
            var maxInput = valInput.substring(0, valInput.length - 1);

            document.getElementById(idInput).value = maxInput;
        }
}

export const formatarValidar = (idInput, tipo) => {
    let valInput = document.getElementById(idInput).value
    let size = 0
    let inputLength = document.getElementById(idInput).length
    if(valInput == ''){
        return false;
    }

    else if (tipo == 'cpf'){
        size = 11
        formatarCPF(idInput, valInput)

        console.log('is cpf after formatarCPF')

        if(!isIncomplete(inputLength, size)){
            console.log('inside isIncomplete')
            validarCPF(valInput)
        }
    }
    else if (tipo == 'cnpj'){
        size = 14
        formatarCNPJ(idInput, valInput)

        if(!isIncomplete(inputLength, size)){
            validarCNPJ(valInput)
        }
    }


}
