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
    "email":"emailcontoh9aja@mail.com",\
    "password":"123456"\
}
response sample:\
{\
    "Error": false,\
    "Message": "Log in Success!",\
    "loginResult": {\
        "userID": "j6wJlUrJm1ZJsDlDGOIjJUrEGTa2",\
        "username": "Arif Billah",\
        "refreshToken": "AIwUaOmZBK3ErM6e6r-JN6fDPQ62887giYBFVM8jO_toiGjFoX3xFxC0alzpHwNkfStTtwWTrNzpVbS7F34U3hBUJoCz3FzgdKUU4BRJHKHfQbPV1GH4Et_Ps_N3lpY0dO9vs5xEMUKk2UxQNNDi_-kWwOlUBDB_74vz9H1S17hkavxuLD7mCJcDFDj7Q5I7NvZ-AgZ-o6dLcXOt7Fc6HyG_kL_0PN9qqA",\
        "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmOGUxY2IxNTY0MTQ2M2M2ZGYwZjMzMzk0YjAzYzkyZmNjODg5YWMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQXJpZiBCaWxsYWgiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYnVzYWhhIiwiYXVkIjoiYnVzYWhhIiwiYXV0aF90aW1lIjoxNjUzNDc2MjY1LCJ1c2VyX2lkIjoiajZ3SmxVckptMVpKc0RsREdPSWpKVXJFR1RhMiIsInN1YiI6Imo2d0psVXJKbTFaSnNEbERHT0lqSlVyRUdUYTIiLCJpYXQiOjE2NTM0NzYyNjUsImV4cCI6MTY1MzQ3OTg2NSwiZW1haWwiOiJlbWFpbGNvbnRvaDlhamFAbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJlbWFpbGNvbnRvaDlhamFAbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.vPZLiTeaw9RULnFaxjIu02l-a9HaaBouPfBFaBjbxibINHkXEIpCp5TEt0kwq9L3bUwgif9twR1kL94rSHwyfB6TBYc1Jn1jg0NxzJikWKC_wi-XQWHAtvRZN487qSltLwZFVxjgVlABTZCOTbrAlXFob64AmNVn8H7860_UXZl128DnDj6VCG0FwFNoIyXIWbE2khX0Wu335YKXfZlm9-JIvuYalAMTJkkjH0Lz5gVxdkIkJvrdBxTajMBeUGa9brD0AWuElBxWgjRRJXgMOwsAZ0vY0jk_BwgaXIXCMdq_SXJb-K48Xkok8U0TgpFRtT054e4kgrIypvrqAyrnMw"\
    }\
}
