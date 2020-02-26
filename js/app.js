new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false,
        damage: 0
    },
    methods: {
        
        punch: function() {
            // random number
            if(this.health < 0) {
                this.health = 0;
                console.log(this.health)
              
            }
            else {
                damage = Math.floor(Math.random() * 10) + 1;
                this.damage = damage
                this.health -= damage
                console.log(this.health)
            }
          
            // States of the barcolor and images  
            if (this.health == 0) {
                this.ended = true;
                document.getElementById('bag').style.backgroundImage = 'url(assets/done.png)' 
            } else if ( this.health <= 70 && this.health >= 30) {
                document.getElementById('barcolor').style.backgroundColor = "orange";
                document.getElementById('bag').style.backgroundImage = 'url(assets/half.png)'
            }
            else if ( this.health < 30) {
                document.getElementById('barcolor').style.backgroundColor = "darkred";
                document.getElementById('bag').style.backgroundImage = 'url(assets/almost.png)' 
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false
            document.getElementById('barcolor').style.backgroundColor = "darkgreen"
            document.getElementById('bag').style.backgroundImage = 'url(assets/full.png)' 
        }
    },
    computed: {
     
    }
});




// Simple version
/*
new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false
    },
    methods: {
        punch: function() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false
        }
    },
    computed: {
     
    }
});*/