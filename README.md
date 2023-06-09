# About

I'm an avid reader, which includes books, audiobooks, etc. I enjoy tracking my library, what books I read when, and set annual reading challenges for myself. I've used apps such as Goodreads to track things, but it hasn't quite been the experience that I'm looking for.

I decided to start this project to create the type of personal library tracker that I want to have and it is also a place for me to play with tech as a software engineer.

I just have the backend going for now, which I test by using Postman. I'm working to get a front end going and will likely have two front ends - one Vue and one React. I'll link to those repos in the near future.

This is very much a work-in-progress.

# Getting Started

You will need to use the environment variables defined in .env.example to run this project. You can create a .env file in the root of the project and add the variables there.

1. Run yarn
2. Run 'npx prisma migrate dev' to run existing db migrations
3. Run 'yarn start' to start the server

## Installing and Configuring Doppler

> Note: Doppler is optional. In the package.json start script, remove 'doppler run'. See the .env.example file for configuration example and create a .env file in the root of the project..

If you haven't already, [install the doppler CLI](https://docs.doppler.com/docs/install-cli).

```bash
# Prerequisite. gnupg is required for binary signature verification
brew install gnupg

# Next, install using brew (use `doppler update` for subsequent updates)
brew install dopplerhq/cli/doppler

# Verify installation
doppler --version

# Updating Doppler
doppler update

# Log In to Doppler
doppler login
```

## Services Used

- Apollo GraphQL Server
- Doppler (Planned)
- GraphQL Shield
- Prisma ORM for Postgres
- Readwise API
- Searchly.com (Planned)
