// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
<<<<<<< HEAD
  reporter: [['html',{open:'always'}]],
=======
  reporter: 'html',
>>>>>>> 58cfacd8e8f0ca7de558cda6592fab69b477f7cd
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
<<<<<<< HEAD
    screenshot: 'only-on-failure',
  },

=======
    headless:false,
    
     
  },


>>>>>>> 58cfacd8e8f0ca7de558cda6592fab69b477f7cd
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
<<<<<<< HEAD
      use: { ...devices['Desktop Chrome'],
         headless:false, //always run in headless mode
        slowMO:300,
        trace:'on'
       },
=======
      use: { ...devices['Desktop Chrome'] },
      
      
>>>>>>> 58cfacd8e8f0ca7de558cda6592fab69b477f7cd
      
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

<<<<<<< HEAD
    // /* Test against mobile viewports. */
    // // {
    // //   name: 'Mobile Chrome',
    // //   use: { ...devices['Pixel 5'] },
=======
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
>>>>>>> 58cfacd8e8f0ca7de558cda6592fab69b477f7cd
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
<<<<<<< HEAD

  timeout:50000,
=======
 timeout: 50000,
>>>>>>> 58cfacd8e8f0ca7de558cda6592fab69b477f7cd
});

