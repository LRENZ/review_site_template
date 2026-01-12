#!/bin/bash

echo "=========================================="
echo "   DailyChoice Deployment Script"
echo "=========================================="
echo ""
echo "This script will push your local changes to the remote GitHub repository."
echo "Remote URL: https://github.com/LRENZ/review_site_template.git"
echo ""
echo "NOTE: You will be asked for your GitHub username and password."
echo "      For password, please use your Personal Access Token (PAT)."
echo ""

git push -u origin master

echo ""
echo "Done."
