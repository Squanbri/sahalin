<?php
  require 'db.php';

  $link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($link));

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_POST = json_decode(file_get_contents('php://input'), true);
    
    $sql = "INSERT INTO `interview` (
      `company`,
      `fio`, 
      `email`, 
      `phone`, 
      `city`, 
      `department`, 
      `specialty`, 
      `count`, 
      `time`, 
      `payment`, 
      `education`, 
      `experience`,
      `comment`,
      `students`
    ) 
    VALUES (
      '$_POST[company]',
      '$_POST[fio]', 
      '$_POST[email]', 
      '$_POST[phone]', 
      '$_POST[city]', 
      '$_POST[department]', 
      '$_POST[specialty]', 
      '$_POST[count]', 
      '$_POST[time]', 
      '$_POST[payment]', 
      '$_POST[education]', 
      '$_POST[experience]',
      '$_POST[comment]',
      '$_POST[students]'
    );";
  
    $result = $link->query($sql);
  }
  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM `interview`;";
    $result = $link->query($sql);
    $interviews = array();
    while($row = $result->fetch_assoc()) {
        array_push($interviews, mb_convert_encoding($row, 'UTF-8', 'UTF-8'));
    }
    print_r($interviews);
  }
?>  