<?php

http_redirect("/about");
if(!isset($_GET['submit'])){
    $console=<<<HTML
    <script>
    console.log("test de email1");
</script>
HTML;
    echo $console;
    http_redirect("/about");
}else{

    $console=<<<HTML
    <script>
    console.log("test de email2");
</script>
HTML;
    echo $console;
    mail("lopesraphael94@gmail.com",$_GET['subject'],$_GET['message']);

    http_redirect("/work");
}

?>
