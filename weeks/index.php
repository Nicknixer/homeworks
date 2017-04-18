<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    die;
}

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json;charset=utf-8');

$days_ru = [
        1 => 'Понедельник',
        2 => 'Вторник',
        3 => 'Среда',
        4 => 'Четверг',
        5 => 'Пятница',
        6 => 'Суббота',
        7 => 'Воскресенье',
    ];
    
$days_en = [
        1 => 'Monday',
        2 => 'Tuesday',
        3 => 'Wednesday',
        4 => 'Thursday',
        5 => 'Friday',
        6 => 'Суббота',
        7 => 'Sunday',
    ];
    
if ($_POST['lang'] == 'en') {
    echo json_encode($days_en);
} else {
    echo json_encode($days_ru);
}
