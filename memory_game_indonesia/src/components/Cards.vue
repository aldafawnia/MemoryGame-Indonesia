<template>
    <div class="container">
        <h1> Cards </h1>
        <table class="table table-borderless">
        <tbody>
        <tr v-for="(row, rindex) in game" :key="rindex">
        <td v-for="(col, cindex) in row" :key="cindex">
            <div class="card-border m-2">
            <img :src="cards[cindex * 3 + rindex] && cards[cindex * 3 + rindex].image" alt="img" class="card-image"/>
            </div>
        </td>
      </tr>
        </tbody>
    </table>
        <!-- <div class="d-flex flex-wrap m-3">
            <div v-for='c in cards' v-bind:key='c._id'></div>
                <b-card
                    v-for='c in cards' v-bind:key='c._id'
                    class="m-2" 
                    v-bind:title="c.city"
                    v-bind:img-src="c.image" 
                    img-alt="Image"
                    img-top
                    style="width:15rem; height:10rem;"
                > 
                </b-card>
        </div> -->
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    created:async function(){
        let response = await axios.get('https://3000-f24adeeb-0634-4252-a732-713ee7ce62f1.ws-eu03.gitpod.io/');
        this.cards = response.data;
    },
    data:function(){
        return {
            game:[
                ["","","",""],
                ["","","",""],
                ["","","",""]
            ],
            cards:[]
        }
    }
}
</script>

<style scoped>
.card-border{
    height:160px;
    width:240px;
    border: 2px black solid;
    border-radius : 5px;
}

.card-image {
    height: 156px;
    width: 236px;
    object-fit: cover;
}
</style>