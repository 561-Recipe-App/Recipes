
# Recipe App
# How to install
### Pre requirements
- Install [**Node.js**](https://nodejs.org/en/download/)
    - To check if **Node.js** is installed, run `node -v` in your terminal
    - To check if **npm** is installed, run `npm -v` in your terminal
- Install [**Git**](https://git-scm.com/downloads)
    - To check if **Git** is installed, run `git --version` in your terminal
- Install [**Python3**](https://www.python.org/downloads/)
    - To check if **Python** is installed, run `python3 --version` in your terminal
- Install **Django** `pip install django`
## Clone Repository: 
Clone the project repository
```bash
git clone https://github.com/561-Recipe-App/Recipes.git
```

## How to run the project
- change directory(`cd`) into the front-end react app(`client` folder) and do so by running the following commands in terminal:
```bash
cd client
npm install
npm start
```
## Making Backend Changes**
### Create a New Virtual Environment

A virtual environment is an isolated environment where you can install dependencies without affecting the system Python or other Python projects.

### macOS

Open a terminal

**Navigate to your project directory**
```bash
cd server
```

**Create a virtual environment**
```bash
python3 -m venv myenv
```

### Windows

**Open Command Prompt**

**Navigate to your project directory**
```cmd
cd server
```

**Create a virtual environment**
```cmd
python -m venv myenv
```

## Activate the Virtual Environment

Once you've created a virtual environment, you'll need to activate it to use it.

### macOS
```bash
source myenv/bin/activate
pip install -r requirements.txt
python3 manage.py runserver
```
### Windows
```cmd
myenv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```


# Common git workflows:

### 1 - Create a branch off the main branch
```bash
git checkout -b issue2-create-skeleton
```    
this creates a branch identical to main called `issue2-create-skeleton` and switched your current local branch to `issue2-create-skeleton`


### 2 - Pulling the latest changes and merging them into your branch before making a pull request
Run your normal git workflow to commit
```bash
git add server/manage.py 
git commit -m "updated manage.py to include new feature x"
```

Grab the latest changes
```bash
git checkout main
git pull
```

Switch back to your feature branch and rebase

```bash
git checkout issue2-create-skeleton
git rebase main
```
when you type `git rebase main`, the following happens:
![image](https://wac-cdn.atlassian.com/dam/jcr:4e576671-1b7f-43db-afb5-cf8db8df8e4a/01%20What%20is%20git%20rebase.svg?cdnVersion=1234)
rebasing will take all the changes from `main` and apply your branch on top of them. If there are any merge conflicts, you will need to resolve them in your editor before you can continue.
    
Once you have resolved the merge conflicts, you can continue with your normal git workflow
```bash
git add file/with/conflicts 
git commit -m "merging issue2-create-skeleton with main"
git push -u origin issue2-create-skeleton
```
    
### 3 - To see all branches
```bash
git branch -a
```

### 4 - Publish a branch upstream
```bash
git push -u origin issue2-create-skeleton
```

or 

```bash
git push --set-upstream origin issue2-create-skeleton
```

### 5 - To see local changes in your terminal
`git status`

**red files** mean there **is a change** and it **hasn't been staged** to commit

**green files** mean there **is a change** and it **has been staged** to commit

### 6 - To commit a change
`git commit -m "message"`

This creates a new commit of all the staged files see #5 to see the status of staged files

### 7 - Stage a file for commit
`git add path/to/file/to/stage`
