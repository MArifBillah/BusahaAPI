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
endpoint : https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDf5XUb2UPJvQu6nzPKDgR-GpUG49v-vVY
request sample:\
{\
    "email":"hellso@gmail.com",\
    "password":"123456"\
}
response sample:\
{\
    "kind": "identitytoolkit#VerifyPasswordResponse",\
    "localId": "orCFGgSUkwZn9K1FNYRwpzrTK2T2",\
    "email": "emailcontoh10aja@mail.com",\
    "displayName": "Arif Billah",\
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6InRCME0yQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGUuY29tLyIsImF1ZCI6ImJ1c2FoYSIsImlhdCI6MTY1MzE1MDAyMiwiZXhwIjoxNjU0MzU5NjIyLCJ1c2VyX2lkIjoib3JDRkdnU1Vrd1puOUsxRk5ZUndwenJUSzJUMiIsImVtYWlsIjoiZW1haWxjb250b2gxMGFqYUBtYWlsLmNvbSIsInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCIsInZlcmlmaWVkIjp0cnVlLCJkaXNwbGF5X25hbWUiOiJBcmlmIEJpbGxhaCJ9.RmDKJCTD_obbX1T_W-kyJRc-IL4YYKdW-Ku9ES4wbA20kdZCYCwaDdGA8ClBU4XDHoqq5lDtyfZSoYt-menmTHby8d9fgEzNht3vtnm0I6ACLQ3cPWuiPAlBmzOWnX2Z_7J1KQsOF0QXyTMRH7K8JLvDoRYNmpFD41o4U3bTpywbOrexjQZLkE_Iy2sfeQY48RhsKVrtb7aINx1-YgxaRkxXPMUune0CuqYo9_MoTZg1y6U0VerQngJ3FlpiR6Mp3gy2RBeW0HYe3kTBydjY66_Z2nv69RCMPnlvzNHMOYhCdS5_eN-sCF2kOzFD8ue-N-zZhs9FuPMomsW-d4OIZA",\
    "registered": true\
}
