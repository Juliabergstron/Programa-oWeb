<!DOCTYPE html>
<html>
<head>
    <title>Aula PHP</title>
</head>
   <body>
     <?PHP

      //DECLARANDO AS VARIAVEIS

      $nome = "Julia "; //Variavel string
      $sobrenome = "Bergstron"; //Variavel string
      $idade = 16;//Variavel inteira
      $nascimentoDia = 27;
      $nascimentoMes = 8;
      $nascimentoAno = 2009;

      echo"Nome completo: ";
      echo $nome;
      echo $sobrenome;
      print "<p>";

      echo"Idade: ";
      echo $idade;
      print "<p>";

      echo"Nascimento: ";
      echo $nascimentoDia;
      echo "/";
      echo $nascimentoMes;
      echo "/";
      echo $nascimentoAno;
      print "<p>";
     ?>
  </body>
</html>