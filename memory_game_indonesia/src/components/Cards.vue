<template>
    <div>
        <h1> Cards </h1>
        <!-- <button v-on:click="loadCities">Load Cities</button>  -->
        <!-- <div>
            <label>Filter faults by cities: </label>
            <input type='text' v-model="searchCities"/>
        </div> -->
        <div v-for='c in cards' v-bind:key='c._id'>
            <h2>{{c.city}}</h2>
            <ul>
                <li>Image: {{c.image}}</li>
                <li>Match With: {{c.match_with}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    created:async function(){
        let response = await axios.get('https://3000-d58f1a61-1f15-4f9b-80ad-bcfc7709ddf3.ws-us03.gitpod.io/');
        this.cards = response.data;
    },
    data:function(){
        return {
            'cards':[]
            // 'searchCities':''
        }
    },
    // methods:{
    //     loadCities: async function(){
    //         let response = await axios.get('https://3000-b7922321-9a58-4310-8255-84781f5cb1d2.ws-us03.gitpod.io/faults/');
    //         this.cards = response.data;
    //     },
    // },
    // computed:{
    //     results:function(){
    //         return this.cards.filter((eachCard)=>{
    //             return eachCard.title.toLowerCase().includes(this.searchTitle.toLowerCase()); 
    //         })
    //     }
    // }
}
</script>

<style scoped>

</style>