let vm = new Vue({
	el: '#app',
	data: {
		message: 'Bonjour le monde !',
		success: true,
		link: 'google.com',
		persons: ['Loïc','Hocem','Samy','Snailzer'],
		},
	methods: {
		close: function ()
		{
			this.success = false
		}
	},
	mounted: function ()
	{
		console.log(this.$el);
	}

})

//Ajout d'une variable équivalente à un attribut static (Je ne sais pas comment les réaliser en JS)
//Pour savoir si un morceau est en cours d'écoute
var listening=false;
//Création d'un composant Song-Card permettant d'afficher un morceaux et ses informations
Vue.component('song-card',{
	props: ['song'],
	template: `
	<div class="card ml-5 mb-5" style="width: 18rem;">
		<img src="..." class="card-img-top" alt="...">
		<div class="card-body">
		   	<h5 class="card-title">{{ song.title }}</h5>
		   	<p class="card-text">
		   	 {{ song.artist }}</p>
	    	<button class="btn btn-primary" v-if="!song.listen" @click="startListen">Ecouter</button>
	    	<button class="btn btn-danger" v-if="song.stop" @click="stopListen">Arrêter</button>
	  	</div>
	</div>
	`,
	audio: undefined,
	//Lancement et arrêt de l'écoute d'un morceau
	methods: {
	startListen: function ()
		{
			console.log(this.song.link)
			if (listening===false) {
				this.song.listen = true
				this.song.stop = true
				listening=true
				this.audio.play()
			}

		},
	stopListen: function ()
		{
			if (listening===true) {
				this.song.listen = false
				this.song.stop = false
				listening=false
				this.audio.pause()
			}

		},

	}, mounted(){
		audio = new Audio(this.song.link)
		audio.volume=0.05;
		this.audio=audio
	}

})
//Création d'une vue
var mainVue = new Vue({
	el:'#song',
	data:{
		songs: []
	}
})

//Récupération des données via AJAX au format JSON
let url="php/script.php";
var req = new XMLHttpRequest();
req.open("GET", url);
//Si l'url n'est pas accessible
req.onerror = function() {
    console.log("Échec de chargement "+url);
};
//Lorsque on accede l'url
req.onload = function() {
    if (req.status === 200) {
      var chaine = req.responseText;
      console.log(chaine);
      let data = JSON.parse(chaine);
      console.log(data["songs"]);
      //On charge les morceaux récupérés dans la vue
      mainVue.songs=data["songs"];
    } else {
      console.log("Erreur " + req.status);
    }
};
req.send();

//diagramme : https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
//Tutorial : https://www.youtube.com/playlist?list=PLw5h0DiJ-9PAO_yAL6wtugq7u3Rs1QmwN
//Cours AJAX : https://perso.liris.cnrs.fr/pierre-antoine.champin/enseignement/intro-js/s3.html