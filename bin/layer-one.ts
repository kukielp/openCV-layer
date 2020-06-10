#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { LayerOneStack } from '../lib/layer-one-stack';

const app = new cdk.App();
new LayerOneStack(app, 'stack-layer-opencv');
