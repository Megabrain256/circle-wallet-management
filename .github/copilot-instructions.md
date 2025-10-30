# AI Agent Instructions for Arc Project

## Project Overview
This project is built around Circle's blockchain and wallet management infrastructure, utilizing multiple Circle SDK packages for handling different aspects of wallet management and smart contract interactions.

## Key Dependencies
The project relies on three main Circle Financial packages:
- `@circle-fin/developer-controlled-wallets` (v9.2.0) - For managing developer-controlled blockchain wallets
- `@circle-fin/smart-contract-platform` (v9.2.0) - For smart contract interactions
- `@circle-fin/user-controlled-wallets` (v9.2.0) - For managing user-controlled wallets

## Important Patterns and Conventions
1. **Wallet Management**
   - The project separates concerns between developer-controlled and user-controlled wallets
   - Always use the appropriate wallet management package based on the use case

2. **Smart Contract Interactions**
   - All smart contract interactions should be handled through the `@circle-fin/smart-contract-platform` package
   - Follow Circle's security best practices for contract interactions

## Development Workflow
1. **Package Management**
   - Use npm for dependency management
   - Ensure compatibility with Circle SDK v9.2.0 packages when adding new dependencies

## Key Files and Directories
- `package.json` - Contains project dependencies and Circle SDK versions

## Integration Points
- Circle Financial SDK (v9.2.0)
- Blockchain networks (specific networks to be determined based on configuration)

Note: This is an initial version of the instructions based on the current project state. As the project grows, these instructions should be updated to include:
- Additional architectural decisions and patterns
- Testing strategies
- Deployment workflows
- Environment configuration
- API integration details