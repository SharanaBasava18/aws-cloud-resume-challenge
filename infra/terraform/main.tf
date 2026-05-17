// DynamoDB stores the resume visitor counter.
// PAY_PER_REQUEST keeps the setup simple and avoids capacity planning.
resource "aws_dynamodb_table" "visitor_counter" {
	name         = "portfolio-visitor-count"
	billing_mode = "PAY_PER_REQUEST"
	hash_key     = "id"

	attribute {
		name = "id"
		type = "S"
	}

	tags = {
		Project = "CloudResumeChallenge"
		Managed = "Terraform"
	}
}

// S3 stores the static frontend files for the portfolio.
resource "aws_s3_bucket" "portfolio_bucket" {
	bucket = "sharana-cloud-portfolio"

	tags = {
		Project = "CloudResumeChallenge"
		Managed = "Terraform"
	}
}

// IAM role for the Lambda function that updates the visitor counter.
resource "aws_iam_role" "lambda_role" {
	name = "portfolio-visitor-counter-role-erih9bu3"
	path = "/service-role/"

	assume_role_policy = jsonencode({
		Version = "2012-10-17"
		Statement = [
			{
				Action = "sts:AssumeRole"
				Effect = "Allow"
				Principal = {
					Service = "lambda.amazonaws.com"
				}
			}
		]
	})

	tags = {
		Project = "CloudResumeChallenge"
		Managed = "Terraform"
	}
}

// Lambda reads and updates the DynamoDB visitor counter.
resource "aws_lambda_function" "visitor_counter_lambda" {
	function_name = "portfolio-visitor-counter"
	role          = aws_iam_role.lambda_role.arn
	handler       = "lambda_function.lambda_handler"
	runtime       = "python3.14"
	filename      = "lambda.zip"

	tags = {
		Project = "CloudResumeChallenge"
		Managed = "Terraform"
	}
}

// HTTP API for the visitor counter endpoint.
resource "aws_apigatewayv2_api" "visitor_api" {
	name          = "portfolio-visitor-api"
	protocol_type = "HTTP"

	tags = {
		Project = "CloudResumeChallenge"
		Managed = "Terraform"
	}
}

// CloudFront will front the portfolio and serve it globally.
resource "aws_cloudfront_distribution" "portfolio_distribution" {
	enabled = true

	origin {
		domain_name = aws_s3_bucket.portfolio_bucket.bucket_regional_domain_name
		origin_id   = "portfolio-bucket-origin"

		s3_origin_config {
			origin_access_identity = ""
		}
	}

	default_cache_behavior {
		target_origin_id       = "portfolio-bucket-origin"
		viewer_protocol_policy = "redirect-to-https"
		allowed_methods        = ["GET", "HEAD", "OPTIONS"]
		cached_methods         = ["GET", "HEAD"]
		compress               = true

		forwarded_values {
			query_string = false

			cookies {
				forward = "none"
			}
		}
	}

	restrictions {
		geo_restriction {
			restriction_type = "none"
		}
	}

	viewer_certificate {
		cloudfront_default_certificate = true
	}

	tags = {
		Project = "CloudResumeChallenge"
		Managed = "Terraform"
	}
}
