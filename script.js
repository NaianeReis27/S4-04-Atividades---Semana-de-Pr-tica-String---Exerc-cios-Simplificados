function convertToArray(str){
    str = str.join();
    let list = [];
    let newlist = [];
    for(let i = 0; i<str.length; i++){
        if (str[i]==","){
          list.push('\n');
        }else{
          list.push(str[i]);
        }
        
    }
    newlist = list.join('');
    console.log(newlist);
    
}

convertToArray(["Verificar se está conectado na energia",
"Verificar se o monitor está conectado na energia",
"Verificar se todos os cabos estão conectados", 
"Apertar o botão de power", "Esperar tela acender", "usar"]);