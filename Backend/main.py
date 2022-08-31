from database import *
from upload import UploadFile

db = Database.initializedatabase()
collection = db.collection('Patient Details')


def createUser(uid, name, age, phone, cid=None):
    if cid is None:
        cid = []
    res = collection.document(uid).set({  # insert document
        'name': name,
        'age': age,
        'phone': phone,
        'CID': cid,
    })


def upload():
    return UploadFile.uploadFile()


def update(metadata, uid):
    patientData = collection.document(uid).get().to_dict()
    cid = patientData["CID"]
    cid.append(metadata["IpfsHash"])
    collection.document(uid).update({  # insert document
        'CID': cid,
    })
    patientData = collection.document(uid).get().to_dict()
    print(patientData)


createUser(uid="9330266945",
           name="Risavdeb Patra",
           age=19,
           phone="9330266945"),

update(uid="9330266945",
       metadata=upload(), )
