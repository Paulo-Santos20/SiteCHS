<script>
  document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    window.location.href = "mailto:pcardoso@ceijoaopauloii.org.br?subject=Novo formulário de contato&body=" + name + "%0D%0A" + email + "%0D%0A%0D%0A" + message;
  });
</script>