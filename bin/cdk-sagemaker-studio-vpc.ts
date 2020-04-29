#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSagemakerStudioVpcStack } from '../lib/cdk-sagemaker-studio-vpc-stack';

const app = new cdk.App();
new CdkSagemakerStudioVpcStack(app, 'CdkSagemakerStudioVpcStack');
