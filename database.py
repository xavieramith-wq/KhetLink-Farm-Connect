from pymongo import MongoClient
from config import Config

client = MongoClient(Config.MONGO_URI)
db = client.get_database() # Gets the database provided in the URI or defaults

def init_db():
    print("Connected to MongoDB database:", db.name)
