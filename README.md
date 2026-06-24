# Playwright Cross-Browser UI Automation Suite

This repository contains an automated UI testing framework built with **Playwright** and **JavaScript**. The framework executes end-to-end user workflows across multiple browser engines to ensure consistent functionality and UI behavior across supported browsers.

## Prerequisites

Before getting started, ensure the following are installed on your machine:

* **Node.js** (v18 or later recommended)
* **npm** (included with Node.js)

## Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd playwright-cross-browser
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

This command downloads the required browser binaries for Chromium, Firefox, and WebKit.

```bash
npx playwright install
```

## Test Application

The test suite is designed to validate the following demo application:

**URL:** https://www.saucedemo.com

## Covered User Flows

### Flow 1: User Authentication

* Verify successful login using valid credentials.
* Validate navigation to the inventory page.

### Flow 2: Product Sorting

* Verify sorting functionality using the product dropdown.
* Validate correct product ordering and data display.

### Flow 3: End-to-End Checkout

* Add products to the cart.
* Complete the checkout process.
* Verify successful order submission.

## Cross-Browser Execution

The framework is configured through `playwright.config.js` and executes tests across the following browser projects:

* **Chromium** (Google Chrome Engine)
* **Firefox** (Mozilla Firefox Engine)
* **WebKit** (Safari Engine)

By default, Playwright runs tests concurrently across all configured browser projects, enabling efficient cross-browser validation.

## Test Execution Commands

Run the following commands from the project root directory.

### Execute All Tests (Cross-Browser Matrix)

```bash
npm test
```

### Execute Tests on Chromium Only

```bash
npm run test:chromium
```

### Execute Tests on Firefox Only

```bash
npm run test:firefox
```

### Execute Tests on WebKit Only

```bash
npm run test:webkit
```

## Viewing Test Reports

After test execution completes, Playwright generates an interactive HTML report containing detailed execution results, screenshots, traces, and browser-specific pass/fail metrics.

To open the report:

```bash
npm run test:report
```

## Test Execution Results

The screenshot below shows a successful cross-browser execution where all test scenarios passed across Chromium, Firefox, and WebKit.

![Playwright Cross-Browser Test Report](./playwright-report.png)

## Technology Stack

* Playwright
* JavaScript (ES6+)
* Node.js
* Chromium
* Firefox
* WebKit

## Project Structure

```text
playwright-cross-browser/
├── tests/
│   └── *.spec.js
├── playwright.config.js
├── package.json
├── playwright-report/
└── README.md
```
