---
url: "https://novita.ai/docs/guides/sandbox-filesystem-upload"
title: "Upload data to sandbox - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/sandbox-filesystem-upload#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Filesystem

Upload data to sandbox

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Upload single file](https://novita.ai/docs/guides/sandbox-filesystem-upload#upload-single-file)
- [Upload directory / multiple files](https://novita.ai/docs/guides/sandbox-filesystem-upload#upload-directory-%2F-multiple-files)

You can upload data to the sandbox using the `files.write()` method.

Before running the example code in this document, please ensure you have properly configured environment variables. For details, please refer to [Configure Environment Variables](https://novita.ai/docs/guides/sandbox-your-first-agent-sandbox#configure-environment-variables).

## [​](https://novita.ai/docs/guides/sandbox-filesystem-upload\#upload-single-file)  Upload single file

JavaScript & TypeScript

Python

Copy

```
import fs from 'fs'
import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

// Read file from local filesystem
const localFilePath = '../local-test-file'
const content = fs.readFileSync(localFilePath, 'utf8')

// Upload file to sandbox
const filePathInSandbox = '/tmp/test-file'
const result = await sandbox.files.write(filePathInSandbox, content)
console.log(result)

await sandbox.kill()
```

## [​](https://novita.ai/docs/guides/sandbox-filesystem-upload\#upload-directory-/-multiple-files)  Upload directory / multiple files

JavaScript & TypeScript

Python

Copy

```
import fs from 'fs'
import path from 'path'

import { Sandbox } from 'novita-sandbox/code-interpreter'

const sandbox = await Sandbox.create()

const readDirectoryFiles = (directoryPath) => {
  const files = fs.readdirSync(directoryPath);

  const filesArray = files
    .filter(file => {
      const fullPath = path.join(directoryPath, file);
      return fs.statSync(fullPath).isFile();
    })
    .map(file => {
      const filePath = path.join(directoryPath, file);

      return {
        path: filePath,
        data: fs.readFileSync(filePath, 'utf8')
      };
    });

  return filesArray;
};

const localDirectoryPath = '../local-test-dir'
const files = readDirectoryFiles(localDirectoryPath);
console.log(files);

files.forEach(file => {
  file.path = file.path.replace('../local-test-dir', '/tmp')
})

const result = await sandbox.files.write(files)
console.log(result)

await sandbox.kill()
```

Was this page helpful?

YesNo

[Watch sandbox directory for changes](https://novita.ai/docs/guides/sandbox-filesystem-watch) [Download data from sandbox](https://novita.ai/docs/guides/sandbox-filesystem-download)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.