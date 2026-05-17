# AWS Cloud Resume Challenge

A cloud portfolio project built on AWS using Infrastructure as Code and CI/CD practices.

## Architecture

- Amazon S3 → Static website hosting
- Amazon CloudFront → CDN + HTTPS
- AWS Lambda → Visitor counter backend
- API Gateway → Exposes Lambda API
- DynamoDB → Stores visitor count
- Terraform → Infrastructure as Code
- GitHub Actions → CI/CD deployment

## Features

- Static portfolio website
- Dynamic visitor counter
- Serverless backend
- Automated deployment pipeline
- Infrastructure managed with Terraform

## CI/CD Flow

Git Push → GitHub Actions → S3 Deploy → CloudFront Invalidation → Live Website Update

## Tech Stack

- AWS
- Terraform
- GitHub Actions
- HTML/CSS/JavaScript
- Lambda (Python)
- DynamoDB

## Live Demo

Add your CloudFront URL here

## Future Improvements

- Custom domain
- HTTPS certificate
- Full Terraform parity