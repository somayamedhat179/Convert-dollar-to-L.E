function convertDollar(){
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");



    if(dollar==""){

        result.innerHTML = "Enter Value";
    }else if(isNaN(dollar)){
        result.innerHtml = "Enter Number Not Text ";
    }else if (dollar>0){
        result.innerHTML= "Enter Positive Number ";
    }else if(dollar==0){
        result.innerHTML= "Enter Number Rather Than Zero";
    }else{
        result.innerHTML = dollar *50 ;
    }

    return false;  
}


