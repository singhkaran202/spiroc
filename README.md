# Spiroc Website
Welcome to the Spiroc website! This is a React website that is hosted on GitHub and deployed on www.spiroc.me. The website is integrated with Google Sheets to fetch waitlist form data and with Google Analytics to measure traffic.

## Installation
To run this website locally, you will need to have Node.js and npm installed on your computer. Clone the repository and install the dependencies by running:

### 'npm install'

To start the development server, run:
### 'npm start'

The website will be available at http://localhost:3000.

## Deployment
To deploy the website, you will need to create a GitHub Pages site for the repository. To do this, go to the repository's settings page and scroll down to the GitHub Pages section. Select the main branch as the source and click "Save". After a few minutes, the website will be available at https://your-github-username.github.io/your-repo-name/.

To automatically deploy changes to the website when you push to the main branch, you can use a GitHub Actions workflow. A sample workflow is included in the repository at .github/workflows/deploy.yml. To use the workflow, you will need to create a personal access token with the repo scope and add it as a secret to the repository. You will also need to update the deploy-to-gh-pages step with your GitHub username and repository name.

## License
This website is released under the MIT License. See LICENSE for more information.
