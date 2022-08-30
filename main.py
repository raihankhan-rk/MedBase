from database import *

db = Database.initializedatabase()

collection = db.collection('programmer_details')
res = collection.document('A01').set({  # insert document
    'name': 'Vishnu',
    'age': 19,
    'Country': 'India',
    'Programming_languages': ['Python', 'C#', 'C++']
})
print(res)
