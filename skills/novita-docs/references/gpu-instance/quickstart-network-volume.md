---
url: "https://novita.ai/docs/guides/gpu-instance-quickstart-manage-network-volume"
title: "Manage Network Volume - Documentation"
---

[Skip to main content](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-network-volume#content-area)

[Documentation home page![light logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/light.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=707bd547016bea7e2b3889bfb61ab32b)![dark logo](https://mintcdn.com/novitaai/AUzGFUdz_qhrXjaJ/logo/dark.svg?fit=max&auto=format&n=AUzGFUdz_qhrXjaJ&q=85&s=2824cc8e8f475a64b5284120039f77ce)](https://novita.ai/)

Search...

Ctrl K

Search...

Navigation

Quickstart

Manage Network Volume

[Guides](https://novita.ai/docs/guides/introduction) [API Reference](https://novita.ai/docs/api-reference/basic-authentication) [Changelog](https://novita.ai/docs/changelog/19-01-26)

On this page

- [Create Network Volume](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-network-volume#create-network-volume)
- [Edit Network Volume](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-network-volume#edit-network-volume)
- [Delete Network Volume](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-network-volume#delete-network-volume)

“Network Volume” can provide multi-instance shared storage space for GPU container instances, with the characteristics of large capacity and multi-instance sharing. Network volumes are billed on a per-second basis. Please note that if your account is in arrears and no instances are running, your Network Volume will be **released 3 days later**. Network Volume is provided in the pursuit of running tasks using its GPUs and is **not meant to be a long-term backup solution**. It is highly advisable to continually back up anything you want to save offsite locally or to a cloud provider.

## [​](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-network-volume\#create-network-volume)  Create Network Volume

1. Go to the [Console - Storage](https://novita.ai/gpu-instance/console/storage) page and click on ”+ New Network Volume”.
2. Select the “Data Center” where the Network Volume will reside. The “Data Center” is tightly bound to your instance and currently does not support cross-Data Center mounting of Network Volumes to instances.
3. Enter the “Volume Name” and capacity in GB for the Network Volume partition, and click “Save” after verifying that the details are correct.

## [​](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-network-volume\#edit-network-volume)  Edit Network Volume

You can edit your Network Volume through the console as follows:

1. Go to the [Console - Storage](https://novita.ai/gpu-instance/console/storage) page, locate the Network Volume you plan to expand, and click the ”…” button in the upper right corner.
2. Click the “Edit” button to modify the Network Volume configuration.

Please note that we currently only support the expansion of the Network Volume capacity, and the storage capacity cannot be less than the size before modification.

## [​](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-network-volume\#delete-network-volume)  Delete Network Volume

You can delete your Network Volume through the console as follows:

1. Go to the [Console - Storage](https://novita.ai/gpu-instance/console/storage) page, locate the Network Volume you plan to delete, and click the ”…” button in the upper right corner.
2. Click the “Delete” button to delete the Network Volume.

Please note that deletion of a Network Volume is irreversible. Once deleted, all data stored on it **will be permanently lost**, please proceed with caution.

Was this page helpful?

YesNo

[Manage Instances](https://novita.ai/docs/guides/gpu-instance-quickstart-manage-instances) [Connect to Instance](https://novita.ai/docs/guides/gpu-instance-quickstart-connect-to-instance)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.