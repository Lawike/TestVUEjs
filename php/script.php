<?php
//Déclaration des données statiques 

$teaseSong = array(
	"title"=>"Tease",
	"artist"=>"Ehrling",
	"listen"=>false,
	"stop"=>false,
	"link"=>"musics/Ehrling-Tease.mp3"
);
$happySong = array(
	"title"=>"Happy Life",
	"artist"=>"Fredji",
	"listen"=>false,
	"stop"=>false,
	"link"=>"musics/Fredji-Happy-Life.mp3"
);
$apolloSong = array(
	"title"=>"Like Apollo",
	"artist"=>"Jimmysquare",
	"listen"=>false,
	"stop"=>false,
	"link"=>"musics/Jimmysquare-Like-Apollo.mp3"
);
$solitudeSong = array(
	"title"=>"Time of Solitude",
	"artist"=>"Tristan Lohengrin",
	"listen"=>false,
	"stop"=>false,
	"link"=>"musics/Tristan-Lohengrin-Time-of-solitude.mp3"
);

//Ajout des données statiques dans un tableaux pour pouvoir l'écrire sous forme d'un JSON (Supposé être récupérer depuis une requête en BDD dans une cas réel)
$data = array(
            "songs" => array(
            	$teaseSong,
            	$happySong,
            	$apolloSong,
            	$solitudeSong)
        );

echo json_encode($data);
?>