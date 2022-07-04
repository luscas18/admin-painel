module.exports = ({ env }) => ({
  //...
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      }
    }
  },
  'import-export-entries': {
    enabled: true,
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  //...
});