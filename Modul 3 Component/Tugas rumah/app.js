Vue.component('showform', {
    template: '#show-form' ,
    data(){
        return {
            data: {namasepeda: '', merk: '',jumlahsepeda: '', harga: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.namasepeda = "";
            this.data.merk = "";
            this.data.jumlahsepeda = "";
            this.data.harga = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data:{
        toko: {
        }
    },
    methods: {
        getData: function (value) {    
            this.toko = {
                namasepeda : value.namasepeda,
                merk : value.merk,
                jumlahsepeda : value.jumlahsepeda,
                harga : value.harga
                
            }
        }
    }
})