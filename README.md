An index of files that you might want to locally store and serve to the attendees of your workshop.
Edit config.js to enter your information.
Required files should be under the folder 'dependencies' with their folder names as 'name' under the dependency in config.js
Here's an example config:
```
{
  title: "Deepti's React Workshop",
  serverUrl:"192.168.1.2:9001",
  dependencies: [
    {
      name: "node",
      win64: "node-v8.11.4-x64.msi",
      win32: "node-v8.11.4-x86.msi",
      mac: "node-v8.11.4.pkg",
      linux32: "node-v8.11.4-linux-x86.tar.xz",
      linux64: "node-v8.11.4-linux-x64.tar.xz"
    },
  ]
}
```

```
This expects a folder structure of:
root/
    dependencies/
                node/
                    node-v8.11.4-x64.msi
                    node-v8.11.4-x86.msi
                    node-v8.11.4.pkg
                    node-v8.11.4-linux-x86.tar.xz
                    node-v8.11.4-linux-x64.tar.xz

```

All you'd need to is change the values in config.js and download files to the right place.
Then start the server with:
npm start