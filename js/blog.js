 const appblog=new Vue({
          el : '#blogs',
          data : {
              blogs : []
          },
          created() {
              fetch('https://opencode18.github.io/OpenCode-Collaborative/json/blogs.json')
            .then(response => response.json() )
            .then(json => {
                this.blogs = json.blogs
            });
          },
          methods: {
            alphaSort: function (arr) {
                return arr.sort(function (a, b) {
                    var keyA = a.name,
                        keyB = b.name;

                    if (keyA == "OpenCode Collaborative") return 0;                        
                    if (keyA < keyB) return -1;
                    if (keyA > keyB) return 1;
                    return 0;
                });
            }
        }
      });
