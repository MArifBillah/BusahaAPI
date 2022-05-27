GOOGLE_PROJECT_ID=busaha
CLOUD_RUN_SERVICE=busaha-api-service
INSTANCE_CONNECTION_NAME=busaha:asia-southeast2:busaha
DB_USER=root
DB_PASS='A5@mGaq#49>#p-0&'
DB_NAME=busaha

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
	--project=$GOOGLE_PROJECT_ID

gcloud run deploy $CLOUD_RUN_SERVICE \
	--image gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
	--add-cloudsql-instances $INSTANCE_CONNECTION_NAME \
	--update-env-vars INSTANCE_CONNECTION_NAME=$INSTANCE_CONNECTION_NAME,DB_PASS=$DB_PASS,DB_USER=$DB_USER,DB_NAME=$DB_NAME \
	--platform managed \
	--region asia-southeast2 \
	--allow-unauthenticated \
	--project=$GOOGLE_PROJECT_ID
