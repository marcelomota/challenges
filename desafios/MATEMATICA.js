function Matematica(strArr) { 
  let finalString="";
  if(Number(strArr[0])<0 || Number(strArr[0])>100){
    return "Número de entradas não permitido";
  }
  for(let i=1; i<strArr.length;i++){
    let auxArray = strArr[i].split(' ');
    if(auxArray.length>=100){
      return "Número máximo de palavras não permitido";
    } else {
      for(let j=0; j<auxArray.length;j++){
        if(auxArray[j].length>30){
          return "Tamanho máximo da palavra não permitido";
        }
      }
    }
  }
  for(let i=1; i<strArr.length;i++){
    if(strArr[i].match(/[0-9]/g)){
      
      finalString += "MATEMATICA"+";";
    } else if(i==strArr.length-1){
      finalString += strArr[i].split(' ').reverse().join(' ');
    }
    else{
      
      finalString += strArr[i].split(' ').reverse().join(' ') +";";
    }
  }
  // code goes here  
  return finalString; 

}
   
// keep this function call here 
console.log(Matematica(readline()));
