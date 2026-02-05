# API Reference

## Authentication

Novita AI authenticates API access using Bearer authentication with an API Key in the request header.

### Get API Key

**Key Management**: https://novita.ai/settings/key-management

### Authentication Header

All API requests must include the Authorization header:
```
Authorization: Bearer {API Key}
```

### Example

```bash
curl "https://api.novita.ai/openai/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '...'
```

## Base URLs

### LLM API
```
https://api.novita.ai/openai
```

### Model API Endpoints
- Chat Completions: `/openai/v1/chat/completions`
- Completions: `/openai/v1/completions`
- Embeddings: `/openai/v1/embeddings`
- Files: `/openai/v1/files`

## Error Codes

### Common Error Codes

#### Invalid Request Parameters
- **Description**: Invalid request parameters
- **Solution**: Review error message details and check whether parameter formats, field names, or value ranges comply with API documentation requirements

#### Authentication Errors
- Check that your API key is valid
- Ensure the Authorization header is properly formatted
- Verify your key has not been revoked

#### Rate Limit Errors
- You've exceeded the rate limit for your account
- Implement exponential backoff and retry logic
- Consider upgrading your plan for higher limits

#### Billing Errors
- Insufficient account balance
- Add credits to your account
- Setup automatic top-up

## User Balance

### Get User Balance

Query your account balance to ensure sufficient funds for API usage.

## Usage-Based Billing

### Query Usage-Based Billing

Track your usage and costs with usage-based billing queries.

### Query Monthly Bill

View your monthly billing summary.

### Query Fixed-Term Billing

Access information about fixed-term billing plans.

## Rate Limits

### Model APIs Rate Limits

The IPM (Images Per Minute) limit controls the number of images that can be generated per minute. Default IPM values vary by model.

### LLM Rate Limits

LLM APIs have rate limits based on:
- RPM (Requests Per Minute)
- TPM (Tokens Per Minute)
- IPM (Images Per Minute for image models)

See specific model documentation for rate limit details.

## Model APIs

### Get Model

Retrieve information about a specific model.

### List Models

Get a list of all available models.

### Task Result

Check the status and retrieve results of asynchronous tasks.

## LLM Batch API

### Create Batch

Submit a batch processing job.

### List Batches

List all batch jobs.

### Retrieve Batch

Get details of a specific batch job.

### Cancel Batch

Cancel a batch job.

### Upload Batch Input File

Upload input files for batch processing.

### List Files

List uploaded files.

### Retrieve File

Get file metadata.

### Retrieve File Content

Get the content of an uploaded file.

### Delete File

Delete an uploaded file.

## GPU Instance API

### List Products
Get available GPU instance products.

### List CPU Products
Get available CPU instance products.

### Create Instance
Create a new GPU instance.

### Get Instance
Get instance details.

### Edit Instance
Update instance configuration.

### Delete Instance
Terminate an instance.

### Start Instance
Start a stopped instance.

### Stop Instance
Stop a running instance.

### Restart Instance
Restart an instance.

### Upgrade Instance
Upgrade instance to higher tier.

### Save Image
Save instance state as an image.

### List Templates
List instance templates.

### Get Template
Get template details.

### Create Template
Create a new template.

### Delete Template
Delete a template.

### Create Network Storage
Create network storage volume.

### List Network Storage
List network storage volumes.

### Get Network Storage
Get network storage details.

### Edit Network Storage
Update network storage configuration.

### Delete Network Storage
Delete network storage volume.

### Create Image Prewarm
Pre-warm an image for faster startup.

### List Image Prewarm
List pre-warmed images.

### Update Image Prewarm
Update pre-warm image configuration.

### Delete Image Prewarm
Delete a pre-warmed image.

### Get Image Quota
Get image quota information.

### List Clusters
List instance clusters.

### Get Metrics
Get instance metrics.

### List Jobs
List background jobs.

### Break Job
Cancel a background job.

### Set Auto Migrate
Configure automatic instance migration.

### Set Auto Renew
Configure automatic instance renewal.

### Create VPC
Create a Virtual Private Cloud.

### List VPCs
List VPCs.

### Get VPC
Get VPC details.

### Update VPC
Update VPC configuration.

### Delete VPC
Delete a VPC.

### Create Container Registry Auth
Create authentication for container registry.

### List Container Registry Auth
List container registry authentications.

### Delete Container Registry Auth
Delete container registry authentication.

## Serverless API

### Create Endpoint
Create a serverless endpoint.

### List Endpoints
List serverless endpoints.

### Get Endpoint
Get endpoint details.

### Update Endpoint
Update endpoint configuration.

### Delete Endpoint
Delete a serverless endpoint.

### Query Endpoint Limit
Get endpoint usage limits.

## Webhook

Configure webhooks to receive notifications about task completion and events.

## Related Documentation

- **Basic Authentication**: https://novita.ai/docs/api-reference/basic-authentication
- **API Error Codes**: https://novita.ai/docs/api-reference/basic-error-code
- **Model APIs Introduction**: https://novita.ai/docs/api-reference/model-apis-introduction
- **GPU Instance API**: https://novita.ai/docs/api-reference/gpu-instance
- **Serverless API**: https://novita.ai/docs/api-reference/serverless
