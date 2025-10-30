# Circle Wallet Management

This project demonstrates integration with Circle's blockchain wallet management infrastructure, utilizing Circle's SDK packages for handling different aspects of wallet management and smart contract interactions.

## Features

- Entity secret generation and registration
- Developer-controlled wallet management
- Smart contract interactions
- Wallet set creation and management

## Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn
- Circle API Key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your Circle API key:
   ```
   CIRCLE_API_KEY=your_api_key_here
   ```

## Key Dependencies

- `@circle-fin/developer-controlled-wallets` (v9.2.0)
- `@circle-fin/smart-contract-platform` (v9.2.0)
- `@circle-fin/user-controlled-wallets` (v9.2.0)

## Available Scripts

- `entitySecret.js` - Generate a new entity secret
- `registerSecret.js` - Register an entity secret
- `createDevWalletSet.js` - Create a new developer wallet set

## Security

- Never commit the `.env` file or expose your API keys
- Keep your entity secrets and recovery files secure
- Follow Circle's security best practices

## Documentation

For more information, refer to:
- [Circle Developer Documentation](https://developers.circle.com/wallets/docs)
- [Circle API Reference](https://developers.circle.com/wallets/api)