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
new Vue({
	el:'#song',
	data:{
		songs: [
		{image: 'no file',title: 'Titre',artist: 'Artiste',listen: false,stop:false},
		{image: 'no file',title: 'Titre',artist: 'Artiste',listen: false,stop:false},
		{image: 'no file',title: 'Titre',artist: 'Artiste',listen: false,stop:false},
		{image: 'no file',title: 'Titre',artist: 'Artiste',listen: false,stop:false},
	]
	},
})
//diagramme : https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
//Tutorial : https://www.youtube.com/playlist?list=PLw5h0DiJ-9PAO_yAL6wtugq7u3Rs1QmwN