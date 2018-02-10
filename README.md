# OpenCode Collaborative Website

# This event is over as of 10 Feb 2018, No new pr's will be merged (except score updates till next 12 hours). Thank you for participating and showing interest in OpenCode'18 and OpenSource.
# If you haven't written blog yet, then you can write and submit in next 12 hours, failing to do so will make you ineligible for prizes(if any)

For any further details and queries contact [Anupam Dagar](https://www.facebook.com/invincible.anupam) .

![](https://raw.githubusercontent.com/opencode18/opencode18.github.io/master/images/fbog.png)

[![OpenCode](https://img.shields.io/badge/Open-Code-ff6a00.svg?style=flat-square)](https://opencode18.github.io)

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


## Updating Your Scores


To add Your scores open `json/scores.json` and follow the given format

>   

       {  
           "name":"Name",
           "github":"github link",
           "Contributions":[{
                "name":"Name of issue",
                "Issuelink":"https://github.com/opencode18/OpenCode-Collaborative/issues/331",
                "PRlink":"Link of the PR",
                "score":"10"
              },{
                "name":"Name of issue",
                "Issuelink":"https://github.com/opencode18/OpenCode-Collaborative/issues/331",
                "PRlink":"Link of the PR",
                "score":"10"
              }
           ],
           "Total":"500"
       }



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
