# Recipe App

# How to install

### Pre requirements

- Install [**Docker**](https://docs.docker.com/get-docker/)
    - To check if **Docker** is installed, run `docker -v` in your terminal
    - To check if **Docker Compose** is installed, run `docker-compose -v` in your terminal

## Getting Started

1. **Clone the Repository:**
   First, clone the repository to your local machine using Git:

   ```bash
   git clone [repository-url]
   cd [repository-directory]
   ```

```bash
git clone https://github.com/561-Recipe-App/Recipes.git
```

**Running Docker Compose:**
To start all services (PostgreSQL, Django, React), navigate to the root of the project where the `docker-compose.yml`
file is located and run:

   ```bash
   docker-compose up --build
   ```

This command builds and starts the containers defined in the `docker-compose.yml` file. The `--build` flag ensures that
Docker builds the images before starting the containers.

3. **Accessing the Applications:**

- The React frontend will be accessible at [http://localhost:3000](http://localhost:3000).
- The Django backend will be accessible at [http://localhost:8000](http://localhost:8000).

4. **Stopping the Containers:**
   To stop the Docker containers, press `Ctrl+C` in the terminal. If you want to stop and remove the containers,
   networks, and volumes, use:

   ```bash
   docker-compose down
   ```

## Database Initialization

- On the first run, Docker Compose will set up the PostgreSQL database and execute the SQL scripts located in the `db`
  directory to create necessary tables.
- These scripts run only once when the database is initialized for the first time.

## Troubleshooting

- If you make changes to the SQL scripts and need to re-run them, you must reset the database. Be cautious as this will
  delete all existing data in the database:

  ```bash
  docker-compose down -v
  docker-compose up --build
  ```

- Check the logs of the Docker containers if you encounter any issues:

  ```bash
  docker logs [container_name_or_id]
  ```

# Common git workflows:

### 1 - Create a branch off the main branch

```bash
git checkout -b issue2-create-skeleton
```    

this creates a branch identical to main called `issue2-create-skeleton` and switched your current local branch
to `issue2-create-skeleton`

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
rebasing will take all the changes from `main` and apply your branch on top of them. If there are any merge conflicts,
you will need to resolve them in your editor before you can continue.

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
