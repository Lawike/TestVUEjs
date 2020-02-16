<?php
//Déclaration des données statiques 

$pheonixSong = array(
	"image"=>"no file",
	"title"=>"Lisztomania",
	"artist"=>"Phoenix",
	"listen"=>false,
	"stop"=>false,
	"link"=>"musics/phoenix-lisztomania.mp3"
);
$dragonsSong = array(
	"image"=>"no file",
	"title"=>"Birds",
	"artist"=>"Imagine Dragons",
	"listen"=>false,
	"stop"=>false,
	"link"=>"musics/imagine-dragons-birds.mp3"
);
$punkSong = array(
	"image"=>"no file",
	"title"=>"Get Lucky",
	"artist"=>"Daft Punk",
	"listen"=>false,
	"stop"=>false,
	"link"=>"musics/daft-punk-get-lucky.mp3"
);
$justiceSong = array(
	"image"=>"no file",
	"title"=>"D.A.N.C.E",
	"artist"=>"Justice",
	"listen"=>false,
	"stop"=>false,
	"link"=>"musics/justice-dance.mp3"
);

//Ajout des données statiques dans un tableaux pour pouvoir l'écrire sous forme d'un JSON
$data = array(
            "songs" => array(
            	$pheonixSong,
            	$dragonsSong,
            	$punkSong,
            	$justiceSong)
        );

echo json_encode($data);
?>