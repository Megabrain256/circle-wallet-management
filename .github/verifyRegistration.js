import pkg from '@circle-fin/developer-controlled-wallets';
const { getEntitySecretCiphertext } = pkg;
import fs from 'fs';

async function verifyRegistration(apiKey) {
    try {
        // Attempt to retrieve the entity information
        const response = await getEntitySecretCiphertext({
            apiKey: apiKey
        });

        console.log('✅ Verification Status: Success');
        console.log('📝 Entity Registration Details:');
        console.log(JSON.stringify(response.data, null, 2));

        // Verify recovery file exists
        if (fs.existsSync('recovery_file.dat')) {
            const stats = fs.statSync('recovery_file.dat');
            console.log('\n📁 Recovery File Status:');
            console.log(`- File exists: Yes`);
            console.log(`- File size: ${stats.size} bytes`);
            console.log(`- Last modified: ${stats.mtime}`);
        } else {
            console.error('❌ Recovery file not found!');
        }
    } catch (error) {
        console.error('❌ Verification failed:', error.message);
        if (error.response) {
            console.error('Error details:', error.response.data);
        }
    }
}

// Check if API key is provided as command line argument
const apiKey = process.argv[2];
if (!apiKey) {
    console.error('❌ Please provide your Circle API key as a command line argument');
    console.log('Usage: node verifyRegistration.js YOUR_API_KEY');
    process.exit(1);
}

verifyRegistration(apiKey);