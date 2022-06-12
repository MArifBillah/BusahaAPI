## C22-PS006-Cloud-Computing / BUSAHA
## Table of Contents
- General Information
- Technologies
- Contact
- How To Deploy to GCP
- Documentation

## General Info
This is the API for our app BUSAHA which stands for "Buka dan Buat Usaha". This API is deployed using Google Cloud Platform's Cloud Run service and connected to the Cloud SQL database. This repository contains two branches:
- Main, this branch is for development and testing purposes and only run on localhost with the provided local database. credentials.json not provided.
- GCP, this branch is the one being deployed to the Cloud Run and listens to port 8080. cred.json not provided.

## Technologies
- Node.js version : v16.14.0
- Google Cloud Platform
- Firebase Auth

## Contact
For further information you can contact:
- arifbillahbill@gmail.com (Muhammad Arif Billah)


## How To Deploy
In order to use the endpoint, you have to deploy the API using Cloud Run in Google Cloud Platform (Keep in mind that you will still need your own credential.json for this). Here's how :
- Clone the project **“GCP” branch** from repo
- Create Cloud SQL database (Cloud SQL for MySQL)
- Set up the required environment variables (Check the database.js)
- Build the container image using the provided Dockerfile
- Deploy the container image to Cloud Run
- Click the generated endpoint link to test the connection


## Documentation

## Check Connection
**Endpoint :**\
<https://busaha-api-service-6fzh2i3qvq-et.a.run.app>


- Url : 
  - 
- Method
  - GET
- Request Body
  - -
- Response

|Working!|
| - |

## Register New User
**Endpoint :**\
<https://busaha-api-service-6fzh2i3qvq-et.a.run.app/signup>


- Url :
  - /signup
- Method
  - POST
- Request Body
  - displayName as string
  - email as string
  - password as string (min. 6 characters)
  - dob as DATE
  - gender as char (L / P)
  - status as string
- Response

|<p>{</p><p>`    `"error": **false**,</p><p>`    `"message": "User Created"</p><p>}</p>|
| :- |


## Log In
**Endpoint :**\
<https://busaha-api-service-6fzh2i3qvq-et.a.run.app/signin>


- Url :
  - /signin
- Method
  - POST
- Request Body
  - email as string
  - password as string (min. 6 characters)
- Response

|<p>{</p><p>`    `"error": **false**,</p><p>`    `"message": "Log in Success!",</p><p>`    `"loginResult": {</p><p>`        `"userID": "RrHpMJsy0qQhzArGRk97s7kRXP72",</p><p>`        `"username": "Muhammad Arif",</p><p>`        `"refreshToken": "AIwUaOl02O695XTdcCZg2INmbsBIKjsRMKvrqf-Fokdh319m-UIWtc1wRNOZuvHqz8VEALsfzWvIpEF5tdUWU4M4EI3jApMzgZIliQ\_SEngKRVaaWJXlPKovEpaQXIxSF2MeWc1ubuoRfnFEusrIMcJye0jKxoo9HelELooyNpxrjuHPGcrz00CfjoP90I7FDyd\_rMjOHL--9MWzGt8\_JIKhiYsEHLgFmQ",</p><p>`        `"accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmOGUxY2IxNTY0MTQ2M2M2ZGYwZjMzMzk0YjAzYzkyZmNjODg5YWMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTXVoYW1tYWQgQXJpZiIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9idXNhaGEiLCJhdWQiOiJidXNhaGEiLCJhdXRoX3RpbWUiOjE2NTM5MjQxNzYsInVzZXJfaWQiOiJSckhwTUpzeTBxUWh6QXJHUms5N3M3a1JYUDcyIiwic3ViIjoiUnJIcE1Kc3kwcVFoekFyR1JrOTdzN2tSWFA3MiIsImlhdCI6MTY1MzkyNDE3NiwiZXhwIjoxNjUzOTI3Nzc2LCJlbWFpbCI6ImFyaWZiaWxsYWgzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFyaWZiaWxsYWgzQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NgQfa5nc1pDsU3QNdY3aSEr1zrcJ60Fb0XCgyAH-3qxAH3YZLCcjHnjuy-Y2NhFsgw-ypdz\_8N-x9o69y6kKkUTehRUkwQoAHOEN6o5BSRuEcCg3qNOaP\_IE-4yuwXcA6TnGetW6oBx4QD\_XqEtpqKgYl6sYvQ0N4o\_RTZXE3\_jQHkov6caArp\_88C5VVmkULryJy32okH5LvRNlRWspVE9EjOIhs6tRmurGxslSHaBAOAE4jQYIPhSQIQaghaWruwvn20SJf-tBRrtAhezlD3efToO3Q2wfsNkKy1zj3uK4M9tsFf0lRADORf1Ov3UhQ5H2MG-2vmReH2M1QNds6w"</p><p>`    `}</p><p>}</p>|
| :- |


## Get User Details
**Endpoint :**\
<https://busaha-api-service-6fzh2i3qvq-et.a.run.app/user/:userid>

- Url : 
  - /user/:userid
- Method
  - GET
- Request Parameter
  - :userid as string


- Response

|<p>{</p><p>`    `"error": **false**,</p><p>`    `"message": "success",</p><p>`    `"user": [</p><p>`        `{</p><p>`            `"id": "RIBokWhumqPLqkVyI4RmbYCIXAZ2",</p><p>`            `"username": "Muhammad Arif Billah",</p><p>`            `"email": "arifbillah2@gmail.com",</p><p>`            `"dob": "2001-01-01T00:00:00.000Z",</p><p>`            `"gender": "L",</p><p>`            `"status": "Mahasiswa"</p><p>`        `}</p><p>`    `]</p><p>}</p><p></p>|
| :- |


## Count and Get All Questions
**Endpoint :**\
<https://busaha-api-service-6fzh2i3qvq-et.a.run.app/test>

- Url :
  - /test
- Method
  - GET
- Request Body
  - -
- Response

|<p>{</p><p>`    `"Error": **false**,</p><p>`    `"Message": "Success",</p><p>`    `"Count": [</p><p>`        `{</p><p>`            `"count(\*)": 16</p><p>`        `}</p><p>`    `],</p><p>`    `"Questions": [</p><p>`        `{</p><p>`            `"id": 1,</p><p>`            `"question": "Berapa modal usaha yang berani anda siapkan?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 2,</p><p>`            `"question": "Dalam persaingan usaha, seberapa sulit tingkat persaingan usaha yang anda harapkan?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 3,</p><p>`            `"question": "Berapa jumlah pegawai yang anda harapkan?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 4,</p><p>`            `"question": "Apakah target pasar anda adalah masyarakat ekonomi bawah?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 5,</p><p>`            `"question": "Apakah target pasar anda adalah masyarakat ekonomi menengah?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 6,</p><p>`            `"question": "Apakah target pasar anda adalah masyarakat ekonomi atas?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 7,</p><p>`            `"question": "Dimana lokasi anda?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 8,</p><p>`            `"question": "Apakah anda memiliki pemahaman yang baik untuk merawat hewan? Seberapa besar pemahaman anda untuk merawat hewan?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 9,</p><p>`            `"question": "Apakah anda memiliki lahan? jika iya berapa hektar luas lahan anda?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 10,</p><p>`            `"question": "Menurut anda seberapa baik kemampuan anda dalam memasak?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 11,</p><p>`            `"question": "Apakah anda mempunyai gudang?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 12,</p><p>`            `"question": "Berapa rupiah pengeluaran internet anda dalam 1 bulan?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 13,</p><p>`            `"question": "Apakah anda sering menggunakan sosial media?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 14,</p><p>`            `"question": "Dari pilihan berikut, mana yang lebih anda sukai?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 15,</p><p>`            `"question": "Dari pilihan berikut, mana yang lebih anda ingin miliki?"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 16,</p><p>`            `"question": "Anda lebih suka bekerja didalam ruangan atau luar ruangan?"</p><p>`        `}</p><p>`    `]</p><p>}</p><p></p>|
| :- |


## Get One Question and Answers Option
**Endpoint :**\
<https://busaha-api-service-6fzh2i3qvq-et.a.run.app/test/:questionId>

- Url :
  - /test/:questionId
- Method
  - GET
- Request Parameter
  - :questionId as int

- Response

|<p>{</p><p>`    `"error": **false**,</p><p>`    `"message": "Success",</p><p>`    `"question": [</p><p>`        `{</p><p>`            `"id": 1,</p><p>`            `"question": "Berapa modal usaha yang berani anda siapkan?"</p><p>`        `}</p><p>`    `],</p><p>`    `"answer": [</p><p>`        `{</p><p>`            `"answer\_id": 1,</p><p>`            `"question\_id": 1,</p><p>`            `"answer": "1 juta",</p><p>`            `"indeks": 1000000</p><p>`        `},</p><p>`        `{</p><p>`            `"answer\_id": 2,</p><p>`            `"question\_id": 1,</p><p>`            `"answer": "1 - 10 juta",</p><p>`            `"indeks": 10000000</p><p>`        `},</p><p>`        `{</p><p>`            `"answer\_id": 3,</p><p>`            `"question\_id": 1,</p><p>`            `"answer": "10 - 25 juta",</p><p>`            `"indeks": 25000000</p><p>`        `},</p><p>`        `{</p><p>`            `"answer\_id": 4,</p><p>`            `"question\_id": 1,</p><p>`            `"answer": "Diatas 25 juta",</p><p>`            `"indeks": 100000000</p><p>`        `}</p><p>`    `]</p><p>}</p><p></p>|
| :- |


## Store User's Result Into History
**Endpoint :**\
<https://busaha-api-service-6fzh2i3qvq-et.a.run.app/history>

- Url :
  - /history
- Method
  - POST
- Request Body
  - Id\_user as string
  - result as string
  - description as string
  - percentage as int 

- Response

|<p>{</p><p>`    `"error": **false**,</p><p>`    `"message": "success",</p><p>`    `"data": {</p><p>`        `"id\_user": "RIBokWhumqPLqkVyI4RmbYCIXAZ2",</p><p>`        `"result": "Pedagang",</p><p>`        `"description": "Pedagang adalah orang yang berdagang",</p><p>`        `"percentage": "70",</p><p>`        `"time": "2022-05-30 15:47:07"</p><p>`    `}</p><p>}</p>|
| :- |


## Get User’s Result History
**Endpoint :**\
<https://busaha-api-service-6fzh2i3qvq-et.a.run.app/history/:userId>


- Url
  - /history/:userId
- Method
  - GET
- Request Parameter
  - :userId as string

- Response

|<p>{</p><p>`    `"error": **false**,</p><p>`    `"message": "success",</p><p>`    `"data": [</p><p>`        `{</p><p>`            `"id": 1,</p><p>`            `"id\_user": "RIBokWhumqPLqkVyI4RmbYCIXAZ2",</p><p>`            `"result": "Pedagang",</p><p>`            `"description": "Pedagang adalah orang yang berdagang",</p><p>`            `"percentage": 70,</p><p>`            `"time": "2022-05-28T11:59:16.000Z"</p><p>`        `},</p><p>`        `{</p><p>`            `"id": 2,</p><p>`            `"id\_user": "RIBokWhumqPLqkVyI4RmbYCIXAZ2",</p><p>`            `"result": "Pedagang",</p><p>`            `"description": "Pedagang adalah orang yang berdagang",</p><p>`            `"percentage": 70,</p><p>`            `"time": "2022-05-30T15:47:07.000Z"</p><p>`        `}</p><p>`    `]</p><p>}</p><p></p>|
| :- |


## Delete User History
**Endpoint :**\
<https://busaha-api-service-6fzh2i3qvq-et.a.run.app/test/history/delete>


- Url :
  - /test/history/delete
- Method
  - DELETE
- Request Body
  - id as int

- Response

|<p>{</p><p>`    `"error": **false**,</p><p>`    `"message": "Data successfully Deleted",</p><p>`    `"data": {</p><p>`        `"id": "1"</p><p>`    `}</p><p>}</p>|
| :- |





