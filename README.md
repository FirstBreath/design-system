# FirstBreath Design System

Welcome to the **FirstBreath Design System**! This library is dedicated to providing a cohesive and consistent set of UI
components, styles, and guidelines for building FirstBreath projects. It aims to ensure consistency in visual design,
user experience, and development practices across all FirstBreath applications.

## 📖 Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## About

The FirstBreath Design System is a collection of reusable UI components built using **React**, **TypeScript**, and *
*Styled Components**. This system helps maintain visual consistency and simplifies the development process by offering
pre-built and easily customizable components that are tailored for FirstBreath applications.

## Getting Started

To use the FirstBreath Design System in your project, follow the installation guide below. We also recommend browsing
the documentation for detailed descriptions of each component and usage examples.

### Prerequisites

- Node.js (v20 or higher)
- Package manager: **Yarn** (preferred) or **npm**

## Installation

Install the design system package into your project using **Yarn**:

```bash
yarn add @firstbreath/design-system --save
```

Or with **npm**:

```bash
npm install @firstbreath/design-system --save
```

## Usage

Once installed, you can start using the components in your application. Here's a simple example of importing and using a
button component:

```tsx
import React from 'react';
import {Button} from '@firstbreath/design-system';

const App = () => {
    return (
        <div>
            <Button variant="primary">Click Me</Button>
        </div>
    );
};

export default App;
```

### Theming

The design system is built to be themable. You can easily extend or override default styles to match your brand. Check
the documentation for instructions on customizing themes.

## Documentation

You can find the full documentation, including component descriptions, props, and usage examples, by visiting
our [Storybook](https://firstbreath.github.io/design-system/).

### Running Storybook Locally

To run Storybook locally and explore the components, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/firstbreath/design-system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd design-system
   ```

3. Install dependencies:
   ```bash
   yarn install
   ```

4. Run Storybook:
   ```bash
   yarn storybook
   ```

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

Thank you for using the FirstBreath Design System. Together, we can build a consistent, delightful experience for all
users!

If you have any questions or suggestions, feel free to open an issue or reach out to our team.
