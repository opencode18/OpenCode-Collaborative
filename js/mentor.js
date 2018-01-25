 const app=new Vue({
          el : '#mentors',
          data : {
              mentors : []
          },
          created() {
              fetch('https://opencode18.github.io/OpenCode-Collaborative/json/mentors.json')
            .then(response => response.json() )
            .then(json => {
                this.mentors = json.mentors
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