# Contribution is fun! :green_heart:

In order to make a hassle-free environment, I implore you all (_while contributing_) to follow the instructions mentioned below!

Happy Contributing :slightly_smiling_face:

## :arrow_down: Installation

- First, fork this repository :fork_and_knife: and follow the given instructions:

```bash
# clone the repository to your local machine
$ git clone https://github.com/<YOUR-GITHUB-USERNAME>/Girl-Code-It-Website.git

# navigate to the project's directory and install all the relevant dev-dependencies
$ cd Girl-Code-It-Website

# include all the latest changes from the remote repository
$ git remote add upstream https://github.com/Girl-Code-It/Girl-Code-It-Website.git
$ git fetch upstream
$ git merge upstream/develop

# To keep your local branch updated with develop branch, always run these commands before starting your work and also before sending your PR
$ git fetch upstream
$ git merge upstream/develop
```

Checkout to develop branch 
`$ git checkout develop` 

Next, create a new branch for the particular issue - `$ git checkout -b <NEW-BRANCH-NAME>` and make PR from that branch while leaving other branches unchanged :white_check_mark:

- Once you have made your changes, run the following command:

```bash
# add your changes
$ git add .

# make your commit
$ git commit -m "<YOUR-COMMIT-MESSAGE>"
```

> Think you're ready :grey_question: Make the PR :tropical_drink:
Always make PRs to develop branch 