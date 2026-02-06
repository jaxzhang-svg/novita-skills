---
url: "https://novita.ai/docs/guides/sandbox-template-version-management"
title: "Version Management - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-template-version-management#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Template

Version Management

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [View All Versions of a Sandbox Template](https://novita.ai/docs/guides/sandbox-template-version-management#view-all-versions-of-a-sandbox-template)
- [Rollback to a Specific Version](https://novita.ai/docs/guides/sandbox-template-version-management#rollback-to-a-specific-version)

The following features require [installing the Beta SDK & CLI](https://novita.ai/docs/guides/sandbox-sdk-and-cli#install-beta-sdk). Please note that beta features are subject to change and may be less stable than production releases. If you encounter any issues while using these features, please [contact us](https://meetings-na2.hubspot.com/junyu).

For the same sandbox template, each time it is built, the system will add a new version number (buildID), and the sandbox template will use the latest built version by default. In some scenarios, if you find that a newly built version has errors and need to rollback to a previous version, you can use the Novita Sandbox CLI to manage the versions of the sandbox template.

## [​](https://novita.ai/docs/guides/sandbox-template-version-management\#view-all-versions-of-a-sandbox-template)  View All Versions of a Sandbox Template

Bash

Copy

```
# novita-sandbox-cli template version [templateID]
novita-sandbox-cli tpl version lovhlhmzeq6q0yh3lu9a
# Example output:
# Sandbox template versions
# Build ID Is Default Build  RAM MiB  VCPUs  Start  Cmd  Status    Created At             Finished At
# f15e442a-a825-4881-9bd8-ad70a96af372  true              1024     2      /root/.jupyter/start-up.sh  Uploaded  8/25/2025, 5:53:04 PM  8/25/2025, 5:55:43 PM
# f9e12c5a-8934-4b13-b574-2f7c211adba1  false             1024     2                                  Uploaded  8/25/2025, 4:52:30 PM  8/25/2025, 4:56:43 PM
```

## [​](https://novita.ai/docs/guides/sandbox-template-version-management\#rollback-to-a-specific-version)  Rollback to a Specific Version

Bash

Copy

```
# novita-sandbox-cli template version [templateID] -r [buildID]
novita-sandbox-cli tpl version lovhlhmzeq6q0yh3lu9a -r f9e12c5a-8934-4b13-b574-2f7c211adba1
```

Was this page helpful?

YesNo

[Customize sandbox CPU & RAM](https://novita.ai/docs/guides/sandbox-template-customize-cpu-ram) [Overview](https://novita.ai/docs/guides/sandbox-filesystem)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.