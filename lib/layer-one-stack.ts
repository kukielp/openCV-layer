import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class LayerOneStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //Create the OpenCV layer
    const layer = new lambda.LayerVersion(this, 'layer-opencv-python-37', {
      code: lambda.Code.fromAsset('layer-code'),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_7],
      description: 'A layer that enebales OpenCV to run in lambda',
    });

  }
}