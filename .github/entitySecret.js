import { generateEntitySecret } from "@circle-fin/developer-controlled-wallets";

async function main() {
    try {
        const entitySecret = await generateEntitySecret();
        console.log('Generated Entity Secret:', entitySecret);
    } catch (error) {
        console.error('Error generating entity secret:', error);
    }
}

main();
