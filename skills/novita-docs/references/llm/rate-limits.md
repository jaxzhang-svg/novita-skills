---
url: "https://novita.ai/docs/guides/llm-rate-limits"
title: "Rate limits - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/llm-rate-limits#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

LLM

Rate limits

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [1\. Understanding Rate Limits](https://novita.ai/docs/guides/llm-rate-limits#1-understanding-rate-limits)
- [What are Rate Limits?](https://novita.ai/docs/guides/llm-rate-limits#what-are-rate-limits)
- [Default Rate Limits](https://novita.ai/docs/guides/llm-rate-limits#default-rate-limits)
- [2\. Handling Rate Limits](https://novita.ai/docs/guides/llm-rate-limits#2-handling-rate-limits)
- [How to Monitor Rate Limits?](https://novita.ai/docs/guides/llm-rate-limits#how-to-monitor-rate-limits)
- [Best Practices](https://novita.ai/docs/guides/llm-rate-limits#best-practices)
- [When You Hit Rate Limits](https://novita.ai/docs/guides/llm-rate-limits#when-you-hit-rate-limits)

Rate limits control how frequently users can make requests to our LLM API within specific time periods. Understanding and working within these limits is essential for optimal API usage.

## [​](https://novita.ai/docs/guides/llm-rate-limits\#1-understanding-rate-limits)  1\. Understanding Rate Limits

### [​](https://novita.ai/docs/guides/llm-rate-limits\#what-are-rate-limits)  What are Rate Limits?

Rate limits restrict the number of API requests that can be made within defined time periods. They help:

- Prevent API abuse and misuse;
- Ensure fair resource distribution among users;
- Maintain consistent API performance and reliability;
- Protect the stability of our services.

### [​](https://novita.ai/docs/guides/llm-rate-limits\#default-rate-limits)  Default Rate Limits

Each account has a default rate limit for model calls, measured in RPM (requests per model per minute) and TPM (tokens per model per minute). Rate limits vary by account tier, as outlined in the tables below.

| Tier | How to reach |
| --- | --- |
| T1 | Monthly top-ups did not exceed $50 in any of the last 3 calendar months. |
| T2 | Monthly top-ups were at least $50 but did not exceed $500 in any of the last 3 calendar months. |
| T3 | Monthly top-ups were at least $500 but did not exceed $3,000 in any of the last 3 calendar months. |
| T4 | Monthly top-ups were at least $3,000 but did not exceed $10,000 in any of the last 3 calendar months. |
| T5 | Monthly top-ups were at least $10,000 in at least one of the last 3 calendar months. |

The last 3 calendar months refers to the current month and the two months before it.

Default Rate Limit by Tier (RPM / TPM):

| Model |  | T1 | T2 | T3 | T4 | T5 |
| --- | --- | --- | --- | --- | --- | --- |
| zai-org/glm-4.7-flash | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-v3.2 | RPM | 30 | 100 | 300 | 500 | 3,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-coder-next | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-ocr-2 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| moonshotai/kimi-k2.5 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| minimax/minimax-m2.1 | RPM | 30 | 100 | 1,000 | 3,000 | 5,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| zai-org/glm-4.7 | RPM | 30 | 100 | 1,000 | 3,000 | 5,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| xiaomimimo/mimo-v2-flash | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| zai-org/autoglm-phone-9b-multilingual | RPM | 30 | 100 | 1,000 | 2,000 | 3,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| moonshotai/kimi-k2-thinking | RPM | 30 | 100 | 1,000 | 500 | 1,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| minimax/minimax-m2 | RPM | 30 | 100 | 1,000 | 3,000 | 5,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| paddlepaddle/paddleocr-vl | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-v3.2-exp | RPM | 30 | 100 | 1,000 | 2,000 | 3,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-vl-235b-a22b-thinking | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| zai-org/glm-4.6v | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| zai-org/glm-4.6 | RPM | 30 | 100 | 1,000 | 2,000 | 5,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| kwaipilot/kat-coder-pro | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-next-80b-a3b-instruct | RPM | 30 | 100 | 1,000 | 2,000 | 3,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-next-80b-a3b-thinking | RPM | 30 | 100 | 1,000 | 2,000 | 3,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-ocr | RPM | 30 | 30 | 100 | 3,000 | 1,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-v3.1-terminus | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-vl-235b-a22b-instruct | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-max | RPM | 30 | 100 | 1,000 | 500 | 1,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-v3.1 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| moonshotai/kimi-k2-0905 | RPM | 30 | 100 | 1,000 | 1,000 | 5,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-coder-480b-a35b-instruct | RPM | 30 | 100 | 1,000 | 2,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-coder-30b-a3b-instruct | RPM | 30 | 100 | 1,000 | 1,000 | 3,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| openai/gpt-oss-120b | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| moonshotai/kimi-k2-instruct | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-v3-0324 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| zai-org/glm-4.5 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-235b-a22b-thinking-2507 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| meta-llama/llama-3.1-8b-instruct | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| google/gemma-3-12b-it | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| zai-org/glm-4.5v | RPM | 30 | 100 | 1,000 | 2,000 | 3,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| openai/gpt-oss-20b | RPM | 30 | 100 | 1,000 | 2,000 | 5,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-235b-a22b-instruct-2507 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-r1-distill-qwen-14b | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| meta-llama/llama-3.3-70b-instruct | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen-2.5-72b-instruct | RPM | 30 | 50 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| mistralai/mistral-nemo | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| minimaxai/minimax-m1-80k | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-r1-0528 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-r1-distill-qwen-32b | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| meta-llama/llama-3-8b-instruct | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| microsoft/wizardlm-2-8x22b | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-r1-0528-qwen3-8b | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-r1-distill-llama-70b | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| meta-llama/llama-3-70b-instruct | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-235b-a22b-fp8 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| meta-llama/llama-4-maverick-17b-128e-instruct-fp8 | RPM | 30 | 100 | 200 | 300 | 500 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| meta-llama/llama-4-scout-17b-16e-instruct | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| nousresearch/hermes-2-pro-llama-3-8b | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen2.5-vl-72b-instruct | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| sao10k/l3-70b-euryale-v2.1 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| sao10k/l3-8b-lunaris | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| baichuan/baichuan-m2-32b | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| baidu/ernie-4.5-300b-a47b-paddle | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-prover-v2-671b | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-32b-fp8 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-30b-a3b-fp8 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| google/gemma-3-27b-it | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-v3-turbo | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| deepseek/deepseek-r1-turbo | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| Sao10K/L3-8B-Stheno-v3.2 | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| gryphe/mythomax-l2-13b | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| baidu/ernie-4.5-vl-28b-a3b-thinking | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-vl-8b-instruct | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| zai-org/glm-4.5-air | RPM | 30 | 100 | 1,000 | 500 | 1,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-vl-30b-a3b-instruct | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-vl-30b-a3b-thinking | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-omni-30b-a3b-thinking | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-omni-30b-a3b-instruct | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen-mt-plus | RPM | 30 | 100 | 1,000 | 2,000 | 5,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| baidu/ernie-4.5-vl-28b-a3b | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-8b-fp8 | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen3-4b-fp8 | RPM | 30 | 100 | 1,000 | 3,000 | 5,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| qwen/qwen2.5-7b-instruct | RPM | 30 | 100 | 1,000 | 3,000 | 5,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| meta-llama/llama-3.2-3b-instruct | RPM | 50 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |
| sao10k/l31-70b-euryale-v2.2 | RPM | 30 | 100 | 1,000 | 3,000 | 6,000 |
| TPM | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 | 50,000,000 |

## [​](https://novita.ai/docs/guides/llm-rate-limits\#2-handling-rate-limits)  2\. Handling Rate Limits

### [​](https://novita.ai/docs/guides/llm-rate-limits\#how-to-monitor-rate-limits)  How to Monitor Rate Limits?

When you exceed the rate limit, the API will return:

- HTTP Status Code: 429 (Too Many Requests);
- A rate limit exceeded message in the response body.

### [​](https://novita.ai/docs/guides/llm-rate-limits\#best-practices)  Best Practices

To avoid hitting rate limits:

1. Implement request throttling in your application;
2. Add exponential backoff for retries;
3. Monitor your API usage patterns.

### [​](https://novita.ai/docs/guides/llm-rate-limits\#when-you-hit-rate-limits)  When You Hit Rate Limits

If you receive a 429 error, you can:

1. **Retry Later**: Wait a short period before retrying your request;
2. **Optimize Requests**: Reduce request frequency;
3. **Rate Limits Increase**: For higher rate limits, you can:

   - [Contact us through Discord](https://discord.gg/YyPRAzwp7P)
   - or [Book a call with our sales team](https://meet.brevo.com/novita-ai/contact-sales)

* * *

**If you have any questions, [please reach out to us on Discord](https://discord.gg/YyPRAzwp7P).**

Was this page helpful?

YesNo

[Batch Inference](https://novita.ai/docs/guides/llm-batch-api) [LLM Monitoring](https://novita.ai/docs/guides/llm-monitor)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.