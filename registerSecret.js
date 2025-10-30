import { registerEntitySecretCiphertext } from "@circle-fin/developer-controlled-wallets";
import fs from 'fs';

const ENTITY_SECRET = '189f5026120d88810a2351e413f2e5d88570f21704135f46a0588f294cf680cd';

async function registerSecret(apiKey) {
    try {
        const response = await registerEntitySecretCiphertext({
            apiKey: apiKey,
            entitySecret: ENTITY_SECRET
        });

        if (response.data?.recoveryFile) {
            fs.writeFileSync('recovery_file.dat', response.data.recoveryFile);
            console.log('✅ Entity secret registered successfully!');
            console.log('📁 Recovery file has been saved as recovery_file.dat');
        } else {
            console.error('❌ No recovery file received in the response');
        }
    } catch (error) {
        console.error('❌ Error registering entity secret:', error.message);
        if (error.response) {
            console.error('Error details:', error.response.data);
        }
    }
}

// Check if API key is provided as command line argument
const apiKey = process.argv[2];
if (!apiKey) {
    console.error('❌ Please provide your Circle API key as a command line argument');
    console.log('Usage: node registerSecret.js YOUR_API_KEY');
    process.exit(1);
}

registerSecret(apiKey);