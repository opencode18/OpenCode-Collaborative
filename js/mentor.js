 const app=new Vue({
          el : '#mentors',
          data : {
              mentors : []
          },
          created() {
              fetch('https://opencode18.github.io/OpenCode-Collaborative/mentors.json')
            .then(response => response.json() )
            .then(json => {
                this.mentors = json.mentors
            })
          }
      })