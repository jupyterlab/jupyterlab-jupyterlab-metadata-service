import { JupyterFrontEndPlugin, ILabShell } from '@jupyterlab/application';
import { ICommandPalette } from '@jupyterlab/apputils';

import { IMetadataApolloGraphQlConnection } from './metadata_iface/apollo_connection';
import { activateApolloGraphQlConnection } from './metadata_concrete/apollo_connection';

import { IMetadataCommentsService } from './metadata_iface/comments';
import { activateMetadataComments } from './metadata_concrete/comments';

import { IMetadataDatasetsService } from './metadata_iface/datasets';
import { activateMetadataDatasets } from './metadata_concrete/datasets';

import { activateMetadataUI } from './ui';

import '../style/index.css';

export { IMetadataCommentsService };
export { IMetadataDatasetsService };
export { IMetadataApolloGraphQlConnection };

/**
 * Initialization the extension that manages the connection to Apollo GraphQL.
 */
const graphqlExtension: JupyterFrontEndPlugin<
  IMetadataApolloGraphQlConnection
> = {
  id: 'jupyterlab-metadata-service-apollo-graphql',
  autoStart: true,
  requires: [],
  provides: IMetadataApolloGraphQlConnection,
  activate: activateApolloGraphQlConnection
};

/**
 * Initialization the extension for querying/posting metadata COMMENTS.
 */
const commentExtension: JupyterFrontEndPlugin<IMetadataCommentsService> = {
  id: 'jupyterlab-metadata-service-comments',
  autoStart: true,
  requires: [IMetadataApolloGraphQlConnection],
  provides: IMetadataCommentsService,
  activate: activateMetadataComments
};

/**
 * Initialization the extension for querying/posting metadata DATASETS.
 */
const datasetExtension: JupyterFrontEndPlugin<IMetadataDatasetsService> = {
  id: 'jupyterlab-metadata-service-datasets',
  autoStart: true,
  requires: [IMetadataApolloGraphQlConnection],
  provides: IMetadataDatasetsService,
  activate: activateMetadataDatasets
};

/**
 * Initialization the metadata UI extension.
 */
const uiExtension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-metadata-service-ui',
  autoStart: true,
  requires: [
    ICommandPalette,
    IMetadataCommentsService,
    IMetadataDatasetsService,
    ILabShell
  ],
  activate: activateMetadataUI
};

/**
 * Export the plugins as default.
 */
const plugins: JupyterFrontEndPlugin<any>[] = [
  graphqlExtension,
  commentExtension,
  datasetExtension,
  uiExtension
];

export default plugins;
