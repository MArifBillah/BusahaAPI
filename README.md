# BusahaAPI

# **sign up** -> POST
endpoint : http://localhost:3000/signup

request sample:\
{\
    "username" : "Billah",\
    "email" : "gmail@gmail.com",\
    "pass" : "123456"\
}

response sample:\
{\
    "status": "success",\
    "data": {\
        "id": "KujxeSbItfUZRcjN23KJ0YQWwX02",\
        "username": "Arif Billah",\
        "email": "emailcontoh11aja@mail.com",\
        "dob": "2001-09-09",\
        "gender": "P",\
        "status": "mahasiswa"\
    }\
}

# **log in** -> POST
endpoint : http://localhost:3000/signin

request sample:\
{\
    "email":"hellso@gmail.com",\
    "password":"123456"\
}
response sample:\
{\
    "status": "success",\
    "data": {\
        "uid": "KujxeSbItfUZRcjN23KJ0YQWwX02",\
        "email": "emailcontoh11aja@mail.com",\
        "emailVerified": true,\
        "displayName": "Arif Billah",\
        "isAnonymous": false,\
        "providerData": [\
            {\
                "providerId": "password",\
                "uid": "emailcontoh11aja@mail.com",\
                "displayName": "Arif Billah",\
                "email": "emailcontoh11aja@mail.com",\
                "phoneNumber": null,\
                "photoURL": null\
            }\
        ],\
        "stsTokenManager": {\
            "refreshToken": "AIwUaOmVQMmyFXgnVSZfBk-CTHepDATnbU4Od8ZmH3AyzmnGrHhtEdMGOjCHri1twgWaO8k3VQXk79yUs3h8PUbxW7_5kZScjsjt-Ik4bs-EesV1u4wxKa8GHzoaMI2zIM9wTP1pLYcYOkDcYJBENB4yR2cwdAMJwUPWdP10lwx4gr8a4_pbnsYeUGjn-AToa4umyDmR_dsos5JpDH-3c8naTm49ImhqEQ",\
            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmOGUxY2IxNTY0MTQ2M2M2ZGYwZjMzMzk0YjAzYzkyZmNjODg5YWMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQXJpZiBCaWxsYWgiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYnVzYWhhIiwiYXVkIjoiYnVzYWhhIiwiYXV0aF90aW1lIjoxNjUzNDY4NjQxLCJ1c2VyX2lkIjoiS3VqeGVTYkl0ZlVaUmNqTjIzS0owWVFXd1gwMiIsInN1YiI6Ikt1anhlU2JJdGZVWlJjak4yM0tKMFlRV3dYMDIiLCJpYXQiOjE2NTM0Njg2NDEsImV4cCI6MTY1MzQ3MjI0MSwiZW1haWwiOiJlbWFpbGNvbnRvaDExYWphQG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZW1haWxjb250b2gxMWFqYUBtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.rJ3p94LlglFuzM68VCmslzLJ7oBGYxvyjq2ZKtKArsRvAF7rVz1RVRz0fVBVKpe6_BQxKqGkEccRGO_lUmGJsa9YkTloJDSJ6ir4u9wAcGhbQe-HBdHq2ZrUT4iKxg497-BFszvcuO1gTROtxBGIByQdQl871fHZXzLPTaeJ7uzuQSLV6nHPfvyA9kdUdi-x8c5Dl9Hb6BUC--pdN7QezICHEcCTuPzeG1GEzinGaIG56UkoKMazgC1wZJLus7Z3zTlVzStxAlmo_3z33YSydktFVy6m7YqpLv62aJ_kdltKr_bBNikZmvZeA8cfTmp_qBZ553XLbD6GJBAkyx8B1Q",\
            "expirationTime": 1653472241731\
        },\
        "createdAt": "1653149975585",\
        "lastLoginAt": "1653468641565",\
        "apiKey": "AIzaSyDf5XUb2UPJvQu6nzPKDgR-GpUG49v-vVY",\
        "appName": "[DEFAULT]"\
    }\
}\
