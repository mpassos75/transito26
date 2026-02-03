

document.getElementById("formPesquisa").addEventListener("submit", function(e) {
  e.preventDefault();

  

// ===== Validação ao enviar =====

  const telefone = telefoneInput.value.replace(/\D/g, "");
  const email = document.getElementById("email").value;

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (telefone.length < 10) {
    alert("Telefone inválido. Digite DDD + número.");
    telefoneInput.focus();
    e.preventDefault();
    return;
  }

  if (!emailValido) {
    alert("E-mail inválido. Verifique o formato.");
    document.getElementById("email").focus();
    e.preventDefault();
    return;
  }

  


// ===== Máscara Telefone =====
let v = e.target.value.replace(/\D/g, "");

  if (v.length > 11) v = v.slice(0, 11);

  if (v.length > 6) {
    v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  } else if (v.length > 2) {
    v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  } else {
    v = v.replace(/(\d*)/, "($1");
  }

  e.target.value = v;



const resposta = {
    cnh: document.getElementById("cnh").value,
    tempoDirecao: document.getElementById("tempo").value,
    inseguranca: document.getElementById("inseguranca").value,
    situacaoDificil: document.getElementById("situacao").value,    
    tel: document.getElementById("tel").value,
    email: document.getElementById("email").value,
    motivo: document.getElementById("motivo").value,

    data: new Date().toLocaleString()
  };



  let dados = JSON.parse(localStorage.getItem("pesquisaEstacionamento")) || [];
  dados.push(resposta);
  localStorage.setItem("pesquisaEstacionamento", JSON.stringify(dados));

  document.getElementById("msg").innerText = "Resposta registrada! Obrigado.";
  document.getElementById("formPesquisa").reset();
});