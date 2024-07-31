import * as Minio from "minio";
import config from "./config";

const corsConfig = [
  {
    AllowedOrigins: ["*"],
    AllowedMethods: ["GET", "PUT", "POST", "DELETE"],
    AllowedHeaders: ["*"],
    ExposeHeaders: [],
    MaxAgeSeconds: 3000,
  },
];

const minioClient = new Minio.Client({
  endPoint: config.minio.MINIO_HOST,
  port: +config.minio.MINIO_API_PORT,
  useSSL: false,
  accessKey: config.minio.MINIO_ROOT_USER!,
  secretKey: config.minio.MINIO_ROOT_PASSWORD!,
});

export const bucketName = config.minio.MINIO_BUCKET_NAME;

async function makeBucket() {
  const exists = await minioClient.bucketExists(bucketName);

  if (exists) {
    console.log("bucket exists: ", bucketName);
  } else {
    await minioClient.makeBucket(bucketName);
    console.log("bucket created: ", bucketName);
  }
}

makeBucket();

export default minioClient;
