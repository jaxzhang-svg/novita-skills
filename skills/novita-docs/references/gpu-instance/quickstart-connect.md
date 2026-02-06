---
url: "https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance"
title: "Connect to Instance - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Quickstart

Connect to Instance

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Connect via SSH with an SSH Key (Recommended)](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance#connect-via-ssh-with-an-ssh-key-recommended)
- [Linux/MacOS](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance#linux%2Fmacos)
- [Windows](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance#windows)
- [Common Issues](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance#common-issues)
- [Connect via SSH with a Password](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance#connect-via-ssh-with-a-password)

## [​](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance\#connect-via-ssh-with-an-ssh-key-recommended)  Connect via SSH with an SSH Key (Recommended)

### [​](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance\#linux/macos)  Linux/MacOS

1. On Ubuntu or Mac, use the following command to generate an RSA SSH public/private key pair:

Copy

```
ssh-keygen -t rsa
```

2. Force the agent to load the new private key and verify that it’s loaded:

Copy

```
ssh-add; ssh-add -l
```

3. Retrieve the content of your SSH public key:

Copy

```
cat ~/.ssh/id_rsa.pub
```

1. Paste the content into the “SSH Public Keys” section in the [Console - Settings](https://novita.ai/gpu-instance/console/settings).

Here is an example of an SSH public key:

Copy

```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDopiaR1Q6Na6dW1QTK7hMuHVi+gXqutY5pUvrWCgeyjcBtBLHejxDQjdNt+qWQRORK/fZzrmyA8/ghani0rZlGPN3bYw1RXFHitt+bD1jVgtJzOmjMQdpMVALnZASQMoQQcCqVJ8PG5Xc08TciACS7S/Ltz3VdZfIq1tih969GCzCe3sctSFBuTwqUDnyrQ6iqSBhPSfQS7nCC/CwzMi3rDg0JzW2NHzIBsbvy0gdXy1ZtC4kkCr7/lUWAgZLk52v3s2CTXCg6QXnhWx+Q/dHOJVAEEucY4o8bo4rF4Bj+ifgEHFtUEfoK9+yj3OLbWfpIxyzhHK+nNXz3UaOMSC8D ultra@novita.ai
```

### [​](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance\#windows)  Windows

Generating SSH keys on Windows requires additional command-line tools like Cmder, with operations similar to those on Linux.Since most machine learning and AI programming is performed on Linux, we strongly recommend installing a Linux subsystem on your Windows machine, such as WSL.

### [​](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance\#common-issues)  Common Issues

If you encounter a “Permission denied (publickey)” error, it might be due to:

- Attempting to run SSH/SCP from within an instance;
- Incorrect key setup or using the wrong/unmatched key;
- The SSH key format used is incorrect or unsupported;
- The private key wasn’t correctly loaded with `ssh-add`; you may need to use the `-i` parameter;
- New or updated keys not taking effect for already created resources;
- Incorrect SSH key permission settings.

Use the `ssh -vv` command for detailed information.

## [​](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance\#connect-via-ssh-with-a-password)  Connect via SSH with a Password

Go to [Console - Instances](https://novita.ai/gpu-instance/console/instances), select the instance you want to connect to, click “Connect”, and copy the “Basic SSH Terminal” command to your terminal. Log in using the password provided in the pop-up window.

Was this page helpful?

YesNo

[Manage Network Volume](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-network-volume) [GPU Instance Pricing](https://novita.ai/docs/guides/gpu-instance-pricing)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.