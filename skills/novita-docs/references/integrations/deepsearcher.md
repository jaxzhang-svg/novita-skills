---
url: "https://novita.ai/docs/guides/deepsearcher"
title: "DeepSearcher - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/deepsearcher#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

DeepSearcher

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to use DeepSearcher with Novita](https://novita.ai/docs/guides/deepsearcher#how-to-use-deepsearcher-with-novita)

[DeepSearcher](https://github.com/zilliztech/deep-searcher) is an open-source solution designed to transform private data search and reasoning by integrating cutting-edge large language models (LLMs) with vector databases such as Milvus. With support for LLMs and embedding models from Novita AI, this powerful configuration delivers unmatched accuracy and efficiency in private data search.This step-by-step guide will walk you through how to quickly and easily configure Novita AI with DeepSearcher.

## [​](https://novita.ai/docs/guides/deepsearcher\#how-to-use-deepsearcher-with-novita)  How to use DeepSearcher with Novita

Step 1: Follow the example in `examples/basic_example.py` .

![Step1followtheexample Jpe](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/step1Followtheexample.jpeg?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=3d84643c25bbf8bb41dbe2855fbbfb33)

Step 2: Add the following code below the line `config = Configuration()` :

Copy

```
config.set_provider_config("llm", "NOVITA", {"model": "deepseek/deepseek-r1-turbo"})
config.set_provider_config("embedding", "NovitaEmbedding", {"model": "baai/bge-m3"})
```

![Step2addcodebelowunderthelineconfig=configuration Jpe](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/step2Addcodebelowunderthelineconfig=Configuration.jpeg?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=edab7da1af56f9fb3ad5e7cbde9ee3b8)

Step 3: Run `examples/basic_example.py` to execute the integration.You’ll get the following results:

![Output1 Jpe](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/output1.jpeg?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=5191c2671219202b7d8e3ef29cc618f6)

![Output2 Jpe](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/output2.jpeg?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=a816b7b638dbed89a9acd9be735ef6dc)

![Output3 Jpe](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/output3.jpeg?fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=e2fdaa1f6d5606c4cd9bcedffc10ea22)

![Output4 Jpe](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/output4.jpeg?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=809aec10ff8c1729a2a4917755d93f8b)

![Output5 Jpe](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/output5.jpeg?fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=6f8dae35f4553103711f71bedb922ca4)

Was this page helpful?

YesNo

[Page Assist](https://novita.ai/docs/guides/pageassist) [Browser Use](https://novita.ai/docs/guides/browseruse)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Step1followtheexample Jpe](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/step1Followtheexample.jpeg?w=1100&fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=9a50d68359f69123ccfdd902832bb24d)

![Step2addcodebelowunderthelineconfig=configuration Jpe](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/step2Addcodebelowunderthelineconfig=Configuration.jpeg?w=1100&fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=69e472ac6ab9cacae1ea5c879371c7f3)

![Output1 Jpe](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/output1.jpeg?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=38723522b877b18a759ba00cff1135b1)

![Output2 Jpe](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/output2.jpeg?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=97cb7e0fe4e42b1d9004270794165c46)

![Output3 Jpe](https://mintcdn.com/novitaai/bnRhXPrVKQGiPndx/images/output3.jpeg?w=1100&fit=max&auto=format&n=bnRhXPrVKQGiPndx&q=85&s=6ed02b6b1f17ad73ceeb8207a79bf407)

![Output4 Jpe](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/output4.jpeg?w=1100&fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=0e669f4e5c477850133aa7a3850c74b2)

![Output5 Jpe](https://mintcdn.com/novitaai/OIO9nfACcX0vhcTI/images/output5.jpeg?w=1100&fit=max&auto=format&n=OIO9nfACcX0vhcTI&q=85&s=b92f60ed6af441bf0a6c62faa16792f3)