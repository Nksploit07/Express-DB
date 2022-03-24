version = 0.1
[y]
[y.deploy]
[y.deploy.parameters]
stack_name = "ExpressProduct"
s3_bucket = "aws-sam-cli-managed-default-samclisourcebucket-g53xgeo0bjd"
s3_prefix = "ExpressProduct"
region = "ap-south-1"
confirm_changeset = true
capabilities = "CAPABILITY_IAM"
disable_rollback = true
image_repositories = []

[yy]
[yy.deploy]
[yy.deploy.parameters]
stack_name = "ProductApp"
s3_bucket = "aws-sam-cli-managed-default-samclisourcebucket-g53xgeo0bjd"
s3_prefix = "ProductApp"
region = "ap-south-1"
confirm_changeset = true
capabilities = "CAPABILITY_IAM"
disable_rollback = true
image_repositories = []
