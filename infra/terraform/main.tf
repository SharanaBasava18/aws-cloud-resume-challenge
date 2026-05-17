// DynamoDB stores the resume visitor counter.
// PAY_PER_REQUEST keeps the setup simple and avoids capacity planning.
resource "aws_dynamodb_table" "visitor_counter" {
	name         = "portfolio-visitor-count-terraform"
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
