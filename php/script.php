<?php
//Déclaration des données statiques 

$pheonixSong = array(
	"image"=>"no file",
	"title"=>"Lisztomania",
	"artist"=>"Phoenix",
	"listen"=>false,
	"stop"=>false
);
$dragonsSong = array(
	"image"=>"no file",
	"title"=>"Birds",
	"artist"=>"Imagine Dragons",
	"listen"=>false,
	"stop"=>false
);
$punkSong = array(
	"image"=>"no file",
	"title"=>"Get Lucky",
	"artist"=>"Daft Punk",
	"listen"=>false,
	"stop"=>false
);
$justiceSong = array(
	"image"=>"no file",
	"title"=>"D.A.N.C.E",
	"artist"=>"Justice",
	"listen"=>false,
	"stop"=>false
);



//Ajout des données statiques dans un tableaux pour pouvoir l'afficher sous forme d'un JSON
$data = array(
            "songs" => array(
            	$pheonixSong,
            	$dragonsSong,
            	$punkSong,
            	$justiceSong)
        );

echo json_encode($data);
?>