from Backend.services.user_authentication import *
from Backend.services.database import *
from Backend.services.upload import UploadFile


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


db = Database.initializedatabase()
collection = db.collection('Patient Details')
# signup("8961675822", "+918961675822", "sonsofkhan", "Raihan Khan", "19", db)
signin("+918961675822", "sonsofkhan")
# update(upload(), "8961675822")
