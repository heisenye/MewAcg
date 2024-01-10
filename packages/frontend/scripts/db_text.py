from pymongo import MongoClient

host = '62.234.18.221'
port = 27017
username = 'Heisenye'
password = 'fanyx040419'

client = MongoClient(host, port, username=username, password=password)
db = client['acg']

collections = db["comics"]

docs = collections.find()

db_text_set = set()

for document in docs:
    name = document["name"]
    description = document["description"]
    author = document["author"]
    tags = document["tags"]
    for char in name:
        db_text_set.add(char)
    for char in description:
        db_text_set.add(char)
    for char in author:
        db_text_set.add(char)
    for tag in tags:
        for char in tag:
            db_text_set.add(char)








# for document in collections.find():
#     name = document["name"]
#     print(name)
