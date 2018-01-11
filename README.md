# OpenCode Collaborative Website
![](https://raw.githubusercontent.com/opencode18/opencode18.github.io/master/images/fbog.png)

Chat with us on [Zulip](https://opencode18.zulipchat.com/)  
Like us on [Facebook](https://www.facebook.com/opencodeiiita/)



## Adding a mentor
To add a mentor open `mentors.json` and please maintain the following format EXACTLY (replacing values where indicated):
>   {  
        &nbsp;&nbsp;     "name" : "Mentors Name",    
        &nbsp;&nbsp;     "imageurl" : "mentor/image.jpg",    
        &nbsp;&nbsp;     "about" : "Hello I'm a web developer",   
        &nbsp;&nbsp;     "facebook" : "url",  
        &nbsp;&nbsp;     "github" : "url",  
        &nbsp;&nbsp;     "twitter" : "url"  
        }



IMPORTANT:

* All images must be optimized before uploaded to the repo via commit or PR. 
* The images should be of square resolution.
* If you do not want to include social media accounts, leave the field empty `"facebook":""`. 

## Adding yourselves to student section

* For already exisiting contestants :
        
        Update your college name in the college key in contestants.json.

To add yourself to student section you need to open the file `contestants.json` and please maintain the following format EXACTLY (replacing values where indicated):

>   {  
        &nbsp;&nbsp;     "name" : "Name",  
        &nbsp;&nbsp;     "imageurl" : "contestant/avatar.jpg",  
        &nbsp;&nbsp;     "about" : "Hello I'm a web developer",  
        &nbsp;&nbsp;     "college" : "My college",  
        &nbsp;&nbsp;     "facebook" : "url",  
        &nbsp;&nbsp;     "github" : "url",  
        &nbsp;&nbsp;     "twitter" : "url",  
        &nbsp;&nbsp;     "referral" : "who refered you?"   
        }
        

IMPORTANT:

* All images must be optimized before uploaded to the repo via commit or PR. 
* The images should be of square resolution.
* If you do not want to include social media accounts, leave the field empty `"facebook":""`. 


## Contributing
### Code practices
Please help us follow the best practice to make it easy for the reviewer as well as the contributor. We want to focus on the code quality more than on managing pull request ethics.

* People before code: If any of the following rules are violated, the pull-requests must not be rejected. This is to create an easy and joyful onboarding process for new programmers and first-time contributors.

* Single commit per pull request and name the commit as something meaningful, example: Adding <-your-name-> in students/mentors section.

* Reference the issue numbers in the commit message if it resolves an open issue. Follow the pattern Fixes #<issue number> <commit message>

* Provide the link to live gh-pages from your forked repository or relevant screenshot for easier review.

* Pull Request older than 4 days with no response from the contributor shall be marked closed.

* Those who wish to solve an issue, comment on it first that you would like to take up the issue and get assigned to solve the issue. Assigning will be done on a first come first serve basis.

* Do not make PR which is not related to any issues. You can create an issue and solve it once we approve them.

* Avoid duplicate PRs, if need be comment on the older PR with the PR number of the follow-up (new PR) and close the obsolete PR yourself.

### Referrals
Participants can invite their friends to Opencode and ask them to add your github username as referral.You will get an extra 10 points for each refferal.

## Tutorials
### Git/Github
- [Resources](https://github.com/opencode18/Resources/)
