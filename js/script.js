function validar(){
    let nome = document.forms['formCadastro']['nome'].value;
    let email = document.forms['formCadastro']['email'].value;
    let telefone = document.forms['formCadastro']['telefone'].value;
    let logradouro = document.forms['formCadastro']['logradouro'].value;
    let numero = document.forms['formCadastro']['numero'].value;
    let uf = document.forms['formCadastro']['uf'].value;


    if(nome == ''){
        alert('Preencha o Campo Nome!');
        return false;   
    }

    if(email == ''){
        alert('Preencha o Campo E-mail!');
        return false;   
    }
    if(telefone == ''){
        alert('Preencha o Campo Telefone!');
        return false;   
    }
    if(logradouro == ''){
        alert('Preencha o Campo Nome!');
        return false;   
    }
    if(numero == ''){
        alert('Preencha o Campo Nome!');
        return false;   
    }
    if(uf == ''){
        alert('Preencha o Campo Nome!');
        return false;   
    }

}




