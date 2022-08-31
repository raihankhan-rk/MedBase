from database import *

db = Database.initializedatabase()

collection = db.collection('programmer_details')
res = collection.document('8961675822').set({  # insert document
    'name': 'Raihan',
    'age': 19,
    'Country': 'India',
    'Programming_languages': ['Python', 'C#', 'C++']
})
print(res)
