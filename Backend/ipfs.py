import requests
from Backend.util.pinata import *


class Ipfs:
    @staticmethod
    def pinToIpfs(path):
        headers = {
            "pinata_api_key": API_KEY,
            "pinata_secret_api_key": API_SECRET,
        }

        with open(path, 'rb') as file:
            files = {"file": file.read()}
            resp = requests.post(ENDPOINT, headers=headers, files=files)

        if resp.status_code == 200:
            print(f"file upload successful")
            print(f"{DWEB_GATEWAY}{resp.json()['IpfsHash']}")
            return resp.json()
