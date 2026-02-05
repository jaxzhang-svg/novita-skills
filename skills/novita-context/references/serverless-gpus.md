# Serverless GPUs

## Overview

Serverless GPUs is a GPU elastic container product designed specifically for AI inference. You only need to specify the container image address and make slight configurations according to your business scenarios to quickly deploy an AI inference service.

## Features

- **Elastic scaling**: Automatically scales up during peak business traffic and scales down during low traffic periods, ensuring service stability while saving costs
- **Built-in efficient load balancing**: Request loads are evenly distributed to each GPU container instance
- **Accurate to second billing**: Charging only for actual running time of GPU container instances
- **Second-level cold-start**: Through GPU container instance reservation, image preheating, and high-performance hardware, easily handling traffic peaks
- **Complete log panel**: Supports querying real-time log streams, helping quickly identify and resolve potential issues

## Terminology

- **Container Image Address**: Docker container image address, currently supporting "public image" and "private image"
- **Serverless Endpoint**: Represents a GPU elastic container instance. It includes components such as **worker**, **load balancer**, and **elastic scaler**
- **Worker**: A GPU container instance used by serverless endpoint to handle specific requests. One Worker corresponds to one GPU container instance
- **Scale Policy**: Used to control logic of automatically scaling up during traffic peaks and scaling down during low traffic periods
- **Health Check Path**: Built-in load balancer performs health checks through this path, determining whether to forward requests to Worker based on whether returned status code is 200

## Quickstart Guides

### Preparations
https://novita.ai/docs/guides/serverless-gpus-quickstart-preparations

### Create Endpoint
https://novita.ai/docs/guides/serverless-gpus-quickstart-create-endpoint

### Create Async Endpoint
https://novita.ai/docs/guides/serverless-gpus-quickstart-create-async-endpoint

### Manage Endpoint
https://novita.ai/docs/guides/serverless-gpus-quickstart-manage-endpoint

## Pricing

https://novita.ai/docs/guides/serverless-gpus-pricing

**Pricing Items: Computing Resources: On-Demand**
- For Serverless, you pay for actual computing resources consumed; no charge is incurred for unused resources
- Pay-per-second billing model

## Use Cases

Designed specifically for:
- AI inference workloads
- Applications with variable traffic patterns
- Cost-sensitive deployments
- Scenarios requiring automatic scaling
- Production inference services

## Key Benefits

1. **No infrastructure management**: Focus on your model, not infrastructure
2. **Automatic scaling**: Handle traffic spikes without manual intervention
3. **Cost-efficient**: Pay only for what you use
4. **Fast deployment**: Deploy inference services in minutes
5. **Built-in load balancing**: Automatically distribute requests
6. **Real-time monitoring**: Complete log panel for debugging

## Related Documentation

- **GPUs Overview**: https://novita.ai/docs/guides/gpus-overview
- **GPU Instance**: https://novita.ai/docs/guides/gpu-instance-overview
- **Serverless Pricing**: https://novita.ai/docs/guides/serverless-gpus-pricing
- **Image Prewarm**: https://novita.ai/docs/guides/gpu-image-prewarm
