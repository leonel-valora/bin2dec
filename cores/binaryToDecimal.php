<?php 
    header("Content-type: application/json; charset=utf-8");
    if(isset($_POST['binaryNumber'])) {
        $num = json_decode($_POST['binaryNumber']);
        echo bindec($num);
    }
?>