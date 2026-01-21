#!/bin/bash

echo "=========================================="
echo "   DailyChoice Deployment Script"
echo "=========================================="
echo ""
echo "This script will push your local changes to the remote GitHub repository."
echo "Remote URL: https://github.com/LRENZ/review_site_template.git"
echo "Target Branch: feature/nextjs-migration"
echo ""
echo "NOTE: You will be asked for your GitHub username and password."
echo "      For password, please use your Personal Access Token (PAT)."
echo ""

# Ensure we are on the correct branch
git checkout -b feature/nextjs-migration 2>/dev/null || git checkout feature/nextjs-migration

# Push to the new branch
git push -u origin feature/nextjs-migration

echo ""
echo "Done. Please create a Pull Request on GitHub to merge changes."
