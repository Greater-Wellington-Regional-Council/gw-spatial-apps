# GW Spatial Apps

This repository contains the Spatial Apps site under the `apps/` folder and GitHub Actions workflows used to deploy to Development, Test, and Production environments (Azure Static Web Apps).

**Deployment overview**
- **App location:** `apps/` (built files are uploaded directly from this folder)
- **Deployer:** `Azure/static-web-apps-deploy@v1`

**Workflows**
- Development: [.github/workflows/spatial_apps_dev.yml](.github/workflows/spatial_apps_dev.yml#L1)
- Test: [.github/workflows/spatial_apps_tst.yml](.github/workflows/spatial_apps_tst.yml#L1)
- Production: [.github/workflows/spatial_apps_prd.yml](.github/workflows/spatial_apps_prd.yml#L1)

Deployment details

- Dev
  - Trigger: push to the `deploy-dev` branch OR run the workflow manually via Actions and choose the `deploy-to-dev` input.
  - Workflow path: [.github/workflows/spatial_apps_dev.yml](.github/workflows/spatial_apps_dev.yml#L1)
  - Secret used: `SWA_APPS_DEV_TOKEN`
  - App location: `apps/`

- Test
  - Trigger: push to the `deploy-test` branch OR run the workflow manually via Actions and choose the `deploy-to-test` input.
  - Workflow path: [.github/workflows/spatial_apps_tst.yml](.github/workflows/spatial_apps_tst.yml#L1)
  - Secret used: `SWA_APP_TEST_TOKEN`
  - App location: `apps/`

- Prod
  - Intended trigger: manual workflow dispatch from the `main` branch with the `deploy-to-prd` input.
  - Workflow path: [.github/workflows/spatial_apps_prd.yml](.github/workflows/spatial_apps_prd.yml#L1)
  - Secret used: `SWA_APP_PROD_TOKEN`
  - App location: `apps/`


Manual run examples

- GitHub Actions UI: Go to Actions → "Spatial Apps - PROD Deploy" → Run workflow. Choose branch `main` and the correct input value (see note above).


Secrets

Ensure the following repository secrets are configured in Settings → Secrets and Variables → Actions:

- `SWA_APPS_DEV_TOKEN` — token for the DEV Static Web App
- `SWA_APP_TEST_TOKEN` — token for the TEST Static Web App
- `SWA_APP_PROD_TOKEN` — token for the PROD Static Web App


**How secrets are passed:**
Secrets are referenced in GitHub Actions workflows using the syntax `${{ secrets.SECRET_NAME }}`. These values are:
- Securely stored in the repository settings
- Not exposed in logs or workflow outputs
- Accessible only to authorized workflows
- Passed as environment variables to deployment steps

Do NOT commit sensitive values to version control.

Available Apps

The following applications are deployed from the `apps/` folder:

**1. Sea Level Rise (SLR) App**
- Location: `apps/slr/`
- Dev: https://maps-dev.gw.govt.nz/apps/slr
- Test: https://maps-test.gw.govt.nz/apps/slr
- Production: https://maps.gw.govt.nz/apps/slr

**2. Climate Change App**
- Location: `apps/climate-change/`
- Dev: https://maps-dev.gw.govt.nz/apps/climate-change
- Test: https://maps-test.gw.govt.nz/apps/climate-change
- Production: https://maps.gw.govt.nz/apps/climate-change

Base href Configuration

To ensure images and assets load correctly in the deployed web app, each application's `index.html` file must include a `<base href>` tag in the `<head>` section:

**For Sea Level Rise (SLR) App** — `apps/slr/index.html`:
```html
<head>
  <base href="/apps/slr/">
  <!-- other head elements -->
</head>
```

**For Climate Change App** — `apps/climate-change/index.html`:
```html
<head>
  <base href="/apps/climate-change/">
  <!-- other head elements -->
</head>
```

The `<base href>` tag sets the base URL for all relative links and asset references (images, stylesheets, scripts) in the document. This ensures that:
- Images and CSS/JS files load correctly when served from the `/apps/[app-name]/` path
- Relative paths like `./img/map.png` resolve to `/apps/[app-name]/img/map.png`
- The app works correctly in all environments (dev, test, production)

## Making Changes to an App

Follow this workflow to make changes to any application:

**1. Clone the repository**
```bash
git clone https://github.com/your-org/gw-spatial-apps.git
cd gw-spatial-apps
```

**2. Create a feature branch from main**
```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

**3. Make your changes**
- Edit the app files in `apps/slr/` or `apps/climate-change/`
- Ensure the `<base href>` tags are correctly configured in each app's `index.html`
- Test locally to verify all images and assets load correctly

**4. Deploy to Development for testing**
- Deploy your changes to the dev environment from your feature branch for validation
- Go to GitHub Actions → "Spatial Apps - DEV Deploy"
- Click "Run workflow", select your feature branch
- Choose `deploy-to-dev` as the job to run
- Wait for the workflow to complete
- Test the changes at: https://maps-dev.gw.govt.nz/apps/slr or https://maps-dev.gw.govt.nz/apps/climate-change
- Verify that all images, assets, and functionality work correctly

**5. Deploy to Test for staging validation**
- Once dev testing is successful, deploy to the test environment from your feature branch
- Go to GitHub Actions → "Spatial Apps - TEST Deploy"
- Click "Run workflow", select your feature branch
- Choose `deploy-to-test` as the job to run
- Wait for the workflow to complete
- Test the changes at: https://maps-test.gw.govt.nz/apps/slr or https://maps-test.gw.govt.nz/apps/climate-change
- Verify that all functionality works as expected in the test environment

**6. Push your branch and create a Pull Request**
```bash
git add .
git commit -m "Description of changes"
git push origin feature/your-feature-name
```
Go to GitHub and create a Pull Request from your feature branch to `main`.

**7. Code Review and Approval**
- The `main` branch is **protected** — direct commits are not allowed
- At least one reviewer must review and approve your Pull Request
- Address any feedback or requested changes
- Request re-review after making updates

**8. Merge to main**
- Once approved, merge your Pull Request into `main`
- The pull request will be merged with a merge commit

**9. Deploy to Production**
- After merging to `main`, deploy to production
- Go to GitHub Actions → "Spatial Apps - PROD Deploy"
- Click "Run workflow", select the `main` branch
- Choose `deploy-to-prd` as the job to run
- Wait for the workflow to complete and verify the deployment at: https://maps.gw.govt.nz/apps/slr or https://maps.gw.govt.nz/apps/climate-change


**Important notes:**
- Never commit directly to `main` — all changes must go through a pull request
- Always test changes locally before pushing
- Always test in dev and test environments before deploying to production
- Ensure all asset paths and `<base href>` tags are correct before deploying
- Review the workflow logs if deployment fails

Local testing

This repo is a static site under `apps/`. To preview locally, open `apps/index.html` in a browser or serve the folder with a simple Live server


## Troubleshooting

- If deployments fail, open the failing workflow run in Actions and inspect the job logs.
- Verify repository/organization Secrets are present and up-to-date (Settings → Secrets and Variables → Actions).