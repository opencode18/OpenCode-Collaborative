const app=new Vue({
          el : '#projects',
          data : {
              projects : []
          },
          created() {
              fetch('https://Tlazypanda.github.io/OpenCode-Collaborative/projects.json')
            .then(response => response.json() )
            .then(json => {
                this.projects = json.projects
            })
          }
      })