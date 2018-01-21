const app3=new Vue({
    el : '#game',
    data : {
        game : []
    },
    created() {
        fetch('http://aadishukla.me/OpenCode-Collaborative/json/game.json')
      .then(response => response.json() )
      .then(json => {
          this.game = json.game
      })
    },
    methods: {
      alphaSort: function (arr) {
          return arr.sort(function (a, b) {
              var keyA = a.name,
                  keyB = b.name;

              if (keyA < keyB) return -1;
              if (keyA > keyB) return 1;
              return 0;
          });
      }
  }
});
