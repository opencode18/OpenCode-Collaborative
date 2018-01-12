const app2=new Vue({
          el : '#projects',
          data : {
              projects : []
          },
          created() {
              fetch('https://opencode18.github.io/OpenCode-Collaborative/projects.json')
            .then(response => response.json() )
            .then(json => {
                this.projects = json.projects
            })
          }
      })
