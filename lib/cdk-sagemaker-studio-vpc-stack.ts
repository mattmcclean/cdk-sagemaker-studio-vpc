import * as cdk from '@aws-cdk/core';
import ec2 = require('@aws-cdk/aws-ec2');
import iam = require('@aws-cdk/aws-iam');
import { CfnOutput } from '@aws-cdk/core';

export class CdkSagemakerStudioVpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = new ec2.Vpc(this, "StudioVpc", {
      maxAzs: 2,
      natGateways: 1,
    });

    const role = new iam.Role(this, 'SmStudioRole', {
      assumedBy: new iam.ServicePrincipal('sagemaker.amazonaws.com'),
      managedPolicies: [ iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSageMakerFullAccess') ],
    });

    new CfnOutput(this, 'RoleNameOutput', { value: role.roleName, description: 'Role name' });
    new CfnOutput(this, 'VPC', { value: vpc.vpcId, description: 'VPC ID' });
  }
}
