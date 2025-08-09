## Deploying with Vercel

This project uses a `vercel.json` configuration file to define deployment settings for Vercel. The `vercel.json` file allows you to specify build and routing rules, environment variables, and other options to customize how your project is deployed.

### How to Deploy

1. **Install Vercel CLI (if not already installed):**
    ```bash
    npm install -g vercel
    ```

2. **Login to Vercel:**
    ```bash
    vercel login
    ```

3. **Deploy the project:**
    ```bash
    vercel --prod
    ```

Vercel will use the settings in `vercel.json` to deploy your simple web project.