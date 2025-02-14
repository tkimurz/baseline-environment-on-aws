import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BLEAEc2AppStack } from '../lib/stack/blea-guest-ec2-app-sample-stack';
import { devParameter } from '../parameter';
const app = new cdk.App();

new BLEAEc2AppStack(app, 'Dev-BLEAEc2App', {
  env: {
    account: devParameter.env?.account || process.env.CDK_DEFAULT_ACCOUNT,
    region: devParameter.env?.region || process.env.CDK_DEFAULT_REGION || 'ap-northeast-1',
  },
  tags: {
    Repository: 'aws-samples/baseline-environment-on-aws',
    Environment: devParameter.envName,
  },

  monitoringNotifyEmail: devParameter.monitoringNotifyEmail,
  monitoringSlackWorkspaceId: devParameter.monitoringSlackWorkspaceId,
  monitoringSlackChannelId: devParameter.monitoringSlackChannelId,
  vpcCidr: devParameter.vpcCidr,
});
