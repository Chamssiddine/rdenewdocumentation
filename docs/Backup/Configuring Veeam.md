---
sidebar_position: 3
---
import ReactPlayer from 'react-player'

# Configuring Veeam

Veeam is a powerful backup and disaster recovery software that allows you to protect and manage your data efficiently. Follow these steps to configure Veeam:

1. **Create a Bucket**: Start by creating a bucket where you can store your backup data. The bucket can be hosted on a cloud storage platform like AWS S3, Google Cloud Storage, or Azure Blob Storage.

2. **Add a Profile in Veeam**: Once the bucket is created, you need to add a profile in Veeam to establish a connection between Veeam and your cloud storage. This profile will contain the necessary credentials and configurations to access your bucket.

3. **Link the Profile to Your Bucket**: After adding the profile, link it to the bucket you created. This step ensures that Veeam can communicate with the cloud storage platform and perform backup operations seamlessly.

4. **Create a Snapshot**: With the bucket and profile configured, you can now create a snapshot. A snapshot captures the state of your data at a specific point in time and allows you to restore it if needed. By creating regular snapshots, you can ensure that your data is protected and easily recoverable.

For a detailed walkthrough of the configuration process, you can watch the following video:

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/veeam.m4v" width="100%" />
</div>

By following these steps and utilizing the power of Veeam, you can effectively manage and safeguard your data against potential threats and failures.

# Add Policies

Add policies for each namespace according to your usecase

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/veeampolicy.m4v" width="100%" />
</div>
