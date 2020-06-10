# Requirements:
- AWS CDK
```npm install -g aws-cdk```
- Node.js - [Download Link](https://nodejs.org/en/download/)
- An AWS account
- Local credentials ( unless using Cloud 9 )
- jq [Download Link](https://stedolan.github.io/jq/) ( not required but very useful )

# Overview

This is an example project showing:
- AWS CDK
- TypeScript
- Deploying a new layer in a CDK project and deploy a function that will use the layer.

To start off clone the repo and cd into the folder then run:

```console
npm install
```


# Deploy
When you are ready to deploy, run ```cdk bootstrap``` then ```cdk deploy```

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
