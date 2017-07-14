<?php
    header("content-type:text/html;charset=utf-8");

    // include '/view/dashboard/index.html'
    // var_dump($_SERVER);
if(array_key_exists('PATH_INFO',$_SERVER)){
    $path = $_SERVER['PATH_INFO'];
//    echo $path;
   $path = substr($path,1);
//    echo $path;
   $arr = explode('/',$path);
//    var_dump ($arr);
   if(count($arr)==2){
       $path = 'view/'.$arr[0].'/'.$arr[1];
   }else if(count($arr)==1){
       $path = "view/dashboard/".$arr[0];
   }
// //    echo $path;
   include $path.'.html';
}else{
    include '/view/dashboard/index.html';
}

   
?>