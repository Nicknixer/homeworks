<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
$data = file_get_contents("php://input");
$arr = json_decode($data);
$msg = "Emptiness is form";
if (isset($arr->src)) {
    $msg = md5($arr->src);
}
$array = [
    'md5' => $msg
    ];
echo json_encode($array);