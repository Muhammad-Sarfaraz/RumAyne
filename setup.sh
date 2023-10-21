#!/bin/bash
# Author: Sarfaraz

# Ensure you have Composer installed
if ! command -v composer &> /dev/null; then
    echo "Composer is not installed. Please install Composer and try again."
    exit 1
fi

echo "Setup will take 5/10 Minutes, So please be patient. Thank You!"

# Install Laravel dependencies
composer install

# Run database migrations
php artisan migrate:fresh --seed

# Generate a key for the application
php artisan key:generate


# # Install Node.js dependencies and build assets
npm install
npm run build

# # System Update
# php artisan system:update

# Cache Clear
php artisan optimize:clear

# Output information
echo "Congratulations! Setup Complete 🎉"
