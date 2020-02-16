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


//Création d'un composant Song-Card permettant d'afficher un morceaux et ses informations
Vue.component('song-card',{
	props: ['song'],
	template: `
	<div class="card" style="width: 18rem;">
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
	//Lancement et arrêt de m'écoute d'un morceau
	methods: {
	startListen: function ()
		{
			this.song.listen = true
			this.song.stop = true
		},
	stopListen: function ()
		{
			this.song.listen = false
			this.song.stop = false
		}
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
req.onerror = function() {
    console.log("Échec de chargement "+url);
};
req.onload = function() {
    if (req.status === 200) {
      var chaine = req.responseText;
      console.log(chaine);
      let data = JSON.parse(chaine);
      console.log(data["songs"]);
      // do what you have to do with 'data'
      mainVue.songs=data["songs"];
    } else {
      console.log("Erreur " + req.status);
    }
};
req.send();

//diagramme : https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
//Tutorial : https://www.youtube.com/playlist?list=PLw5h0DiJ-9PAO_yAL6wtugq7u3Rs1QmwN