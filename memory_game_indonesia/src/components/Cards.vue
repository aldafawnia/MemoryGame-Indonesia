<template>
    <div class="container">
        <br>
        <div id="headline">
        <h1> Match the City with Landmarks </h1>
        <h3> Timer {{timer}} </h3>
        </div>
        <table class="table table-borderless">
        <tbody>
        <tr v-for="(row, rindex) in game" :key="rindex">
        <td v-for="(col, cindex) in row" :key="cindex">
            <div class="card-border m-2">
            <img :src="cards[cindex * 3 + rindex] && cards[cindex * 3 + rindex].image" alt="img" class="card-image" v-on:click="pictures(cards[cindex * 3 + rindex])"/>
            </div>
        </td>
      </tr>
        </tbody>
    </table>  
    <div>
        <!-- <b-button v-b-modal.modal-1>Game Modal</b-button> -->

        <b-modal id="modal-1" title="Game Over!">
        <p class="my-4">Checkout Wonderful Indonesia official webpage to know more about the history of these landmarks!
            Checkout your scores below! 
        </p>
        <p class="my-4">
            Time Taken to finish: {{timer}}s
            <!-- <tr v-for="row in ScoreBoard" :key="row.level">
            <td>{{ row.username }}</td>
            <td>{{ row.base | number }} / {{ row.base_easy | number }}</td>
            <td>{{ row.roulette | number }} / {{ row.roulette_easy | number }}</td>
          </tr> -->
        </p>
        </b-modal>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
// import stack from '../data-structures/stack'

export default {
    created:async function(){
        let response = await axios.get('https://af-memory-api.herokuapp.com/cities');
        this.cards = response.data;
        this.remainingMoves = 6

        let testing = setInterval(()=> {
            this.timer += 1
            if (this.finished == true){
            clearInterval(testing)
        }
        },1000);
    },
    data:function(){
        return {
            remainingMoves:6,
            game:[
                ["","","",""],
                ["","","",""],
                ["","","",""]
            ],
            cards:[],
            flippedCards:0,
            card1:0,
            card2:0,
            cardsLeft:5,
            timer:0,
            finished: false,
        }
    },
    methods: {
        decrease() {
            this.cardsLeft -= 1
        },
        pictures:function(card){
            if (this.flippedCards == 0){
                this.card1 = card.card_id
                this.flippedCards += 1    
            // console.log(this.card1,this.card2)
            } else {
                this.card2 = card.card_id
                // if (this.card1 == 1){
                //     if (this.card2 == 3){
                //         alert("Matched!")
                //     }
                // } else if (this.card1 == 3){
                //     if (this.card2 == 1){
                //         alert('Matched!')
                //     }
                // } else if (this.card1 == 2){
                //     if (this.card2 == 4){
                //         alert('Matched!')
                //     }
                // } else if (this.card1 == 4){
                //     if (this.card2 == 2){
                //         alert("Matched!")
                //     }
                // }
                if (this.card1 == 1 || this.card1 == 2) {
                    if (this.card2-2 == this.card1) {
                        alert("Matched")
                    }
                } else {
                    if (this.card2+2 == this.card1) {
                        alert("Matched")
                    }
                }
                this.flippedCards = 0
                this.remainingMoves -= 1
                // console.log(this.remainingMoves)
                // console.log(this.card1,this.card2)
                this.card1 = 0
                this.card2 = 0
            }   
        },
        
    }, 
     watch: {
         remainingMoves: function() {
            if (this.remainingMoves <= 0) {
                this.$bvModal.show('modal-1')
                this.finished = true
            }
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

.card-border:hover{
    cursor:pointer;
}

.card-image {
    height: 156px;
    width: 236px;
    object-fit: cover;
}

#headline {
    display:flex;
    justify-content: space-between;
}

</style>