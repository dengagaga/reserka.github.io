<?php

/* https://api.telegram.org/7434215998:AAEplBeLARiYiwbTfEuKiVhjqtWAhbZf6eY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_number'];
$category = $_POST['user_category'];
$token = "7434215998:AAEplBeLARiYiwbTfEuKiVhjqtWAhbZf6eY";
$chat_id = "-4275118338";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
  'Категория: ' => $category
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Thank";
} else {
  echo "Error";
}
?>