import json
import boto3
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('VisitorMetrics')

def lambda_handler(event, context):
    try:
        body = json.loads(event['body'])
        page = body.get('page', 'unknown')
        timestamp = datetime.utcnow().isoformat()

        table.put_item(
            Item={
                'timestamp': timestamp,
                'page': page
            }
        )

        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Visit recorded'})
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
