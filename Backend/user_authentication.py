from firebase_admin import auth
from Backend.util.users import *


def signup(_uid, _phone_number, _password, _display_name, _age, db):
    user = User(_uid, _phone_number, _password, _display_name, _age)

    new_user = auth.create_user(
        phone_number=user.getphonenumber(),
        uid=user.getuid(),
        password=user.getpassword(),
        display_name=user.getdisplayname(),
    )

    collection = db.collection('Patient Details')

    res = collection.document(user.getuid()).set({  # insert document
        'name': new_user.display_name,
        'age': user.getage(),
        'phone': new_user.phone_number,
        'CID': [],
    })


def signin(_phone_number, _password):
    try:
        auth.get_user_by_phone_number(_phone_number)
        print("User logged In!")
    except:
        print(f"No such user found with phone No. {_phone_number}")
