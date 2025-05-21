#!/usr/bin/env node

/**
 * Automated deployment script for Herb Harmony Visualizer
 * This script automates the process of:
 * 1. Building the React application
 * 2. Deploying to Netlify
 * 3. Synchronizing content with WordPress.com Business
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Configuration object to store user inputs
const config = {
  netlify: {
    siteId: '',
    teamSlug: ''
  },
  wordpress: {
    url: '',
    username: '',
    password: ''
  },
  supabase: {
    url: process.env.VITE_SUPABASE_URL || '',
    anonKey: process.env.VITE_SUPABASE_ANON_KEY || ''
  },
  stripe: {
    publicKey: process.env.VITE_STRIPE_PUBLIC_KEY || ''
  }
};

// Function to execute shell commands and log output
function executeCommand(command, options = {}) {
  console.log(`\n🚀 Executing: ${command}\n`);
  try {
    const output = execSync(command, {
      stdio: 'inherit',
      ...options
    });
    return { success: true, output };
  } catch (error) {
    console.error(`\n❌ Error executing command: ${command}`);
    console.error(error.message);
    return { success: false, error };
  }
}

// Function to ask questions and get user input
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Function to check if Netlify CLI is installed
async function checkNetlifyCLI() {
  try {
    execSync('netlify --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.log('Netlify CLI not found. Installing...');
    const { success } = executeCommand('npm install -g netlify-cli');
    return success;
  }
}

// Function to create or update WordPress configuration
async function setupWordPressConfig() {
  const configPath = path.join(__dirname, 'src', 'config', 'wordpress.ts');
  const configDir = path.dirname(configPath);
  
  // Create config directory if it doesn't exist
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }
  
  // Create WordPress config file
  const configContent = `
// WordPress API Configuration
export const WORDPRESS_ENDPOINTS = {
  base: '${config.wordpress.url}/wp-json/wp/v2',
  posts: '${config.wordpress.url}/wp-json/wp/v2/posts',
  media: '${config.wordpress.url}/wp-json/wp/v2/media',
  pages: '${config.wordpress.url}/wp-json/wp/v2/pages',
  custom: {
    herbs: '${config.wordpress.url}/wp-json/wp/v2/herbs',
    ebooks: '${config.wordpress.url}/wp-json/wp/v2/ebooks'
  }
};

// Authentication headers for WordPress API
export function getAuthHeaders() {
  const credentials = \`${config.wordpress.username}:${config.wordpress.password}\`;
  // Use TextEncoder for encoding in ES modules
  const encoder = new TextEncoder();
  const data = encoder.encode(credentials);
  const encodedCredentials = btoa(String.fromCharCode(...new Uint8Array(data)));
  
  return {
    'Content-Type': 'application/json',
    'Authorization': \`Basic \${encodedCredentials}\`
  };
}
`;

  fs.writeFileSync(configPath, configContent);
  console.log(`✅ WordPress configuration created at ${configPath}`);
}

// Function to create .env file with required variables
function createEnvFile() {
  const envContent = `
VITE_SUPABASE_URL=${config.supabase.url}
VITE_SUPABASE_ANON_KEY=${config.supabase.anonKey}
VITE_STRIPE_PUBLIC_KEY=${config.stripe.publicKey}
`;

  fs.writeFileSync(path.join(__dirname, '.env'), envContent);
  console.log('✅ Environment variables configured');
}

// Function to create netlify.toml with proper configuration
function createNetlifyConfig() {
  const netlifyConfig = `
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  VITE_SUPABASE_URL = "${config.supabase.url}"
  VITE_SUPABASE_ANON_KEY = "${config.supabase.anonKey}"
  VITE_STRIPE_PUBLIC_KEY = "${config.stripe.publicKey}"
`;

  fs.writeFileSync(path.join(__dirname, 'netlify.toml'), netlifyConfig);
  console.log('✅ Netlify configuration updated');
}

// Function to create a WordPress embed code snippet
function generateWordPressEmbed(netlifyUrl) {
  const embedCode = `
<!-- Herb Harmony Visualizer Embed -->
<div style="position: relative; width: 100%; height: 0; padding-bottom: 120%; overflow: hidden;">
  <iframe 
    src="${netlifyUrl}" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    frameborder="0" 
    allow="payment" 
    allowfullscreen
  ></iframe>
</div>
<!-- End Herb Harmony Visualizer Embed -->
`;

  const embedPath = path.join(__dirname, 'wordpress-embed.html');
  fs.writeFileSync(embedPath, embedCode);
  console.log(`✅ WordPress embed code generated at ${embedPath}`);
}

// Main deployment function
async function deploy() {
  console.log('🌿 Herb Harmony Visualizer Deployment Tool 🌿');
  console.log('===========================================');
  
  // Collect Supabase configuration
  console.log('\n📋 Supabase Configuration:');
  config.supabase.url = await askQuestion('Enter your Supabase URL: ');
  config.supabase.anonKey = await askQuestion('Enter your Supabase Anon Key: ');
  
  // Collect Stripe configuration
  console.log('\n📋 Stripe Configuration:');
  config.stripe.publicKey = await askQuestion('Enter your Stripe Public Key: ');
  
  // Collect WordPress configuration
  console.log('\n📋 WordPress.com Business Configuration:');
  config.wordpress.url = await askQuestion('Enter your WordPress.com site URL (e.g., https://yoursite.wordpress.com): ');
  config.wordpress.username = await askQuestion('Enter your WordPress.com username: ');
  config.wordpress.password = await askQuestion('Enter your WordPress.com application password (create one in WordPress settings): ');
  
  // Create configuration files
  console.log('\n📝 Creating configuration files...');
  createEnvFile();
  await setupWordPressConfig();
  createNetlifyConfig();
  
  // Check Netlify CLI installation
  console.log('\n🔍 Checking Netlify CLI installation...');
  const netlifyCliInstalled = await checkNetlifyCLI();
  if (!netlifyCliInstalled) {
    console.error('❌ Failed to install Netlify CLI. Please install it manually with: npm install -g netlify-cli');
    rl.close();
    return;
  }
  
  // Build the React application
  console.log('\n🏗️ Building the React application...');
  const buildResult = executeCommand('npm run build');
  if (!buildResult.success) {
    console.error('❌ Build failed. Please fix the errors and try again.');
    rl.close();
    return;
  }
  
  // Deploy to Netlify
  console.log('\n🚀 Deploying to Netlify...');
  const deployResult = executeCommand('netlify deploy --prod');
  if (!deployResult.success) {
    console.error('❌ Netlify deployment failed.');
    rl.close();
    return;
  }
  
  // Get the Netlify URL from user input
  const netlifyUrl = await askQuestion('\nEnter the Netlify URL from above (e.g., https://your-site.netlify.app): ');
  
  // Generate WordPress embed code
  generateWordPressEmbed(netlifyUrl);
  
  // Synchronize content with WordPress
  console.log('\n🔄 Synchronizing content with WordPress...');
  const wordpressResult = executeCommand('npm run wordpress:setup');
  if (!wordpressResult.success) {
    console.error('⚠️ WordPress content synchronization had some issues. Check the logs above.');
  }
  
  console.log('\n✅ Deployment completed!');
  console.log(`\n📱 Your app is now live at: ${netlifyUrl}`);
  console.log('\n📋 Next steps:');
  console.log('1. Copy the embed code from wordpress-embed.html');
  console.log('2. Create a new page in WordPress.com');
  console.log('3. Add a Custom HTML block and paste the embed code');
  console.log('4. Publish the page');
  
  rl.close();
}

// Run the deployment script
deploy().catch(error => {
  console.error('❌ Deployment failed:', error);
  rl.close();
});
