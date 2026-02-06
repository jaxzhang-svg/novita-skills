---
url: "https://novita.ai/docs/guides/lollmswebui"
title: "LoLLMS WebUI - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/lollmswebui#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Integrations

LoLLMS WebUI

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [How to Leverage Novita AI with LoLLMS WebUI](https://novita.ai/docs/guides/lollmswebui#how-to-leverage-novita-ai-with-lollms-webui)
- [Obtain Your Novita AI API Key](https://novita.ai/docs/guides/lollmswebui#obtain-your-novita-ai-api-key)
- [Install LoLLMS WebUI](https://novita.ai/docs/guides/lollmswebui#install-lollms-webui)
- [Configure Novita AI in LoLLMS WebUI](https://novita.ai/docs/guides/lollmswebui#configure-novita-ai-in-lollms-webui)

LoLLMS WebUI, a centralized platform designed for effortless interaction with Large Language Models (LLMs) and multimodal AI systems, offers an intuitive interface to unlock the full potential of AI. The integration between Novita AI and LoLLMS WebUI will unleash transformative power,enabling you to simplify complex tasks, find answers, and explore new possibilities effortlessly.By combining Novita AI with LoLLMS, you’ll gain access to cutting-edge AI capabilities, making it your ultimate assistant for enhanced productivity. This guide provides a step-by-step walkthrough to help you maximize the benefits of this powerful integration.

## [​](https://novita.ai/docs/guides/lollmswebui\#how-to-leverage-novita-ai-with-lollms-webui)  How to Leverage Novita AI with LoLLMS WebUI

You can find the GitHub repository of LoLLMS WebUI here: [ParisNeo/lollms-webui](https://github.com/ParisNeo/lollms-webui).

### [​](https://novita.ai/docs/guides/lollmswebui\#obtain-your-novita-ai-api-key)  Obtain Your Novita AI API Key

1. [Log in](https://novita.ai/user/login) to your Novita AI account.
2. Navigate to [the Key Management page](https://novita.ai/settings/key-management).
3. Generate a new API Key and copy it.

### [​](https://novita.ai/docs/guides/lollmswebui\#install-lollms-webui)  Install LoLLMS WebUI

1. Automatic Installation:
   - Download the installation script from [the scripts folder](https://github.com/ParisNeo/lollms-webui/tree/main/scripts) and run it:

     - `lollms_installer.bat` for Windows.
     - `lollms_installer.sh` for Linux.
     - `lollms_installer_macos.sh` for Mac.
2. Manual Installation:
   - Ensure Python 3.11 is installed. Check your version with `python --version`.
   - If needed, download Python 3.11 from [Python.org](https://www.python.org/downloads/release/python-3118/).

Step 1: Clone the Repository

Copy

```
git clone --recursive https://github.com/ParisNeo/lollms-webui.git
cd lollms-webui
git submodule update --init --recursive
```

Step 2: Create and Activate a Virtual Environment

- Create a Virtual Environment:

Copy

```
python -m venv venv
```

- Activate the Virtual Environment:
  - On Windows:






    Copy











    ```
    .\venv\Scripts\activate
    ```

  - On Linux/Mac:






    Copy











    ```
    source venv/bin/activate
    ```

Step 3: Install Requirements

Copy

```
pip install -r requirements.txt
pip install -e ./lollms_core
```

Step 4: Create global\_paths\_cfg.yaml

Copy

```
mkdir -p $HOME/.lollms_personal_data

cat > global_paths_cfg.yaml << EOL
lollms_path: $(pwd)/lollms_core/lollms
lollms_personal_path: $HOME/.lollms_personal_data
EOL
```

### [​](https://novita.ai/docs/guides/lollmswebui\#configure-novita-ai-in-lollms-webui)  Configure Novita AI in LoLLMS WebUI

1. Install Novita AI Binding

- Set environment variables for Novita AI binding. For example:

  - On Windows:

Copy

```
set NOVITA_AI_API_KEY="your_api_key_here"
set NOVITA_AI_MODEL_NAME="your_model_name_here"
```

  - On Linux/Mac:

Copy

```
export NOVITA_AI_API_KEY="your_api_key_here"
export NOVITA_AI_MODEL_NAME="your_model_name_here"
```

- Run the script to finalize the setup:






Copy











```
python zoos/bindings_zoo/novita_ai/__init__.py
```


2. Run the Server

Copy

```
python app.py
```

3. Use Novita AI in LoLLMS WebUI

- Open your browser and navigate to [http://localhost:9600](http://localhost:9600/) (or the port shown in the terminal).
- Select Novita AI from the available bindings.
- Enter your Novita AI API key.
- Select your desired Novita AI model.

[**Here is an application: Vibe Coding Using Novita AI Bindings and Services on LoLLMS WebUI.**](https://www.youtube.com/watch?v=jyFaP4zTM9g)

Was this page helpful?

YesNo

[LlamaIndex](https://novita.ai/docs/guides/llamaindex) [CodeCompanion](https://novita.ai/docs/guides/codecompanion)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.