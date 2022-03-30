
function Calcular() {
    
  // Pegando o value do input data
  var dataVencimento = document.getElementById('data').value;
  // Convertendo o value em um objeto Date()
  var d = dataVencimento.split('-');
  var data1 = new Date(d[0], d[1] - 1, d[2]);
  // Pegando a data atual
  var data2 = new Date();
  // Realizando o calculo entre as datas
  var dias = Math.ceil(Math.abs((data1.getTime() - data2.getTime())) / 86400000);
  
  var valor = document.getElementById('valor').value;
  var multa = document.getElementById('multa').value;
  var juros = document.getElementById('juros').value;

  var percentualJuros = (juros / 30 * dias); 

  var valorCorrigidoMulta = parseFloat(valor) * (multa / 100);
  var valorCorrigidoJuros = Math.ceil(parseFloat(valor) * (percentualJuros / 100));

  var valorFinal = parseFloat(valor) + valorCorrigidoMulta + valorCorrigidoJuros

  document.getElementById('diasAtraso').innerHTML = 'Dias de Atraso: ' + dias;
  document.getElementById('valorMulta').innerHTML = 'Valor da Multa: R$ ' + valorCorrigidoMulta.toFixed(2);
  document.getElementById('valorJuros').innerHTML = 'Valor dos Juros: R$ ' + valorCorrigidoJuros.toFixed(2);
  document.getElementById('valorTotal').innerHTML = 'Valor Total: R$ ' + valorFinal.toFixed(2);
  

}