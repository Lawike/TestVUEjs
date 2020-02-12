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
// diagramme : https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
//Tutorial : https://www.youtube.com/playlist?list=PLw5h0DiJ-9PAO_yAL6wtugq7u3Rs1QmwN