const resultado = document.querySelector('.container h1');
const data = new Date();


function diaTexto (diaSemana){
   
    let diaEscrito;

    switch (diaSemana){
        case 0:
            diaEscrito = 'Domingo';
            return diaEscrito;
            case 1:
                diaEscrito = 'Segunda-Feira';
                return diaEscrito;
                case 2:
                    diaEscrito = 'Terça-Feira';
                    return diaEscrito;
                    case 3:
                        diaEscrito = 'Quarta-Feira';
                        return diaEscrito;
                        case 4:
                            diaEscrito = 'Quinta-Feira';
                            return diaEscrito;
                            case 5:
                                diaEscrito = 'Sexta-Feira';
                                return diaEscrito;
                                case 6:
                                    diaEscrito = 'Sabado';
                                    return diaEscrito;
                                     }
                                                            
                        
    }
 

    function diaNumero(numeroDia){
        return numeroDia;
         }

        function escritaMes (mesEscrito){
   
            let mes;
        
            switch (mesEscrito){
                case 0:
                    mes = 'janeiro';
                    return mes;
                    case 1:
                        mes = 'fevereiro';
                        return mes;
                        case 2:
                            mes = 'março';
                            return mes;
                            case 3:
                                mes = 'abril';
                                return mes;
                                case 4:
                                    mes = 'maio';
                                    return mes;
                                    case 5:
                                        mes = 'junho';
                                        return mes;
                                        case 6:
                                            mes = 'julho';
                                            return mes;
                                            case 7:
                                                mes = 'agosto';
                                                return mes;
                                                 case 8:
                                                mes = 'setembro';
                                                return mes; 
                                                case 9:
                                                mes = 'outubro';
                                                return mes; 
                                                case 10:
                                                mes = 'novembro';
                                                return mes; 
                                                case 11:
                                                mes = 'dezembro';
                                                return mes;
                                             }
                                                                    
                                
            }

           function anoNumero(data){
            return data.getFullYear();
           }

           function hora (data){
            return data.getHours();
           }

           function minutos(tempoMinuto){
            
            if ( tempoMinuto <= 9){
               return '0' + tempoMinuto;
            } 
            else {
                tempoMinuto;
            }
            return tempoMinuto;
           }

       


const diaSemana = data.getDay(); // Possui Function

const numeroDia = data.getDate(); // Possui Function

const mesEscrito = data.getMonth(); // Possui Function 

const tempoMinuto = data.getMinutes(); 

anoNumero(data);

hora(data);






resultado.innerHTML = `${diaTexto (diaSemana)} , ${diaNumero(numeroDia)} de ${escritaMes (mesEscrito)}  de ${anoNumero(data)} <br> ${hora(data)}:${minutos(tempoMinuto)} </br>`;
