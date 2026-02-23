
fetch('src/Coment.txt')
    .then(response => response.text())
    
    .then(data => {

      // const data_I = data.replaceAll(".", ".\n");

          const elemento = document.getElementById('mensg');
        //  console.log(data_I);
       let i = 0;
   
        function maquinaEscrever(){
            
          if (i < data.length) {
            
         //var data_I = data.replaceAll('.', '.\n');
               elemento.innerHTML += data.charAt(i);
                i++;
               setTimeout(maquinaEscrever, 100); // Velocidade (ms)
            }

        }   
         maquinaEscrever();
     
    });

    

// Aguarda a página carregar
window.onload = function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    // Abre o modal
    modal.style.display = "block";

    // Fecha ao clicar no (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fecha ao clicar fora do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
  

       

        
    
