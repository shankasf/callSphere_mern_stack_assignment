import weaviate
from weaviate.classes.init import Auth
import os

# 1. Load credentials from environment variables
WEAVIATE_URL = os.getenv("WEAVIATE_URL")
WEAVIATE_KEY = os.getenv("WEAVIATE_API_KEY")

# 2. Connect
client = weaviate.connect_to_weaviate_cloud(
    cluster_url=WEAVIATE_URL,
    auth_credentials=Auth.api_key(WEAVIATE_KEY),
)

print("Connected:", client.is_ready())

# 3. Access your collection
collection = client.collections.use("ToyProduct")

# 4. Ask a semantic question
question = "What are toys?"

response = collection.query.near_text(
    query=question,
    limit=5  # number of results to return
)

print("\nSearch Results:\n")
print(response.objects)

client.close()
