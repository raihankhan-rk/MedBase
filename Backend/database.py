import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


class Database:
    @staticmethod
    def initializedatabase():
        _cred = credentials.Certificate("medbase-19fc9-firebase-adminsdk-iq15s-53cca95619.json")
        _default_app = firebase_admin.initialize_app(_cred)
        _db = firestore.client()

        return _db
