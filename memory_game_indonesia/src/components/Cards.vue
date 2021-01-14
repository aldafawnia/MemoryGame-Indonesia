<template>
    <div class="container">
        <br>
        <h1> Match the City with Landmarks </h1>
        <table class="table table-borderless">
        <tbody>
        <tr v-for="(row, rindex) in game" :key="rindex">
        <td v-for="(col, cindex) in row" :key="cindex">
            <div class="card-border m-2">
            <img :src="cards[cindex * 3 + rindex] && cards[cindex * 3 + rindex].image" alt="img" class="card-image" v-on:click="pictures(cindex,rindex)"/>
            </div>
        </td>
      </tr>
        </tbody>
    </table>  
    </div>
</template>

<script>
import axios from 'axios'
// import stack from '../data-structures/stack'

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