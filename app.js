new Vue({
    el: '#app',
    data(){
        return {
            notes:null
        }
    },
    methods:{
        leerApi(){
            axios.get('http://localhost:3000/notes')
			.then(response => {
                this.notes=response.data;
				console.log(response.data);
			}).catch(e => {
				console.log(e)
			});
		}
    }
    

});