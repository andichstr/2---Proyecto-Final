export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "coderhouse-31819",
        "private_key_id": "6ba7335dc5a2f13558e9a0fc987f29aa6aac37a7",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDdQ9ZIxYEZR4Rj\n+j8adKtrrQu8VI/4IbIiifz5pqnv0kizV0ypc4WJeT1U2L4y1zQDkYF5Yotnjto3\nOmnCyafvTh0J2KnjTjP4q153CCdzZaCHZ916sK4OyJYq5lT+q7APJSgwmkB/M3nG\nx76pg2P6Mq6lQEOQrToD315T3BpU3USL1lRNX0erj+1HnuyirP0EwJRQ2rUeN4ez\ncapKgAs2MckRgNYj5fRK0jKCrXb9Zgg5+PLw+56kYe++n/cclChDlAGy9MYKZWG0\nathPJkt7hytM+XBay5auxmAyqr06AuBkmAkkWuiEahXvLf7rS0l1/JoO9PKfTnmm\nE5Zj2TSXAgMBAAECggEAOC+7wGr253ZztfecApnR1dvxePd4P6g+1ep4ZOTfjli1\nwWTPwM/m/wvceSk40yw2txlB6ZMOl1N9Mj0REjem/2u0kAWGzoPTSrgpmsxlSDZs\nVzYW1cr7yCFDkM1AlBMA+DeVRxJEgoiNyd57GgyVXLl2A9yXy6tRah5Uk7L2tMmq\nblg9F00ji9MxkiVsFJ10lEAhnfSMx2+vP7LEDgbgkU8d7atMzevt8XUiXewMGZUk\n4r7bk9D2Rxhrj5HnsdtdZGfP89YUbMpdH0kbOHUjv93xoLuGCxjvt2AcL0VFeBlw\nt3NqvcdvjfKgkLhsKOOFZ7CLwaauL1n99SLuxDKsoQKBgQD0PMZiUoPELFv9bRl9\n/4kg3YxmpvYS3ORMu4VMQvEnWoPjDQIalRcdIZiAA6ShbwEWSCwaq57uaDF/+7uM\n4oLDa6k1MHkYwCiteR8AjBeFjEUsiA+DE2GMHMGOohAUwZWDgzj4snBitkqAWxxz\noaTlLtdKS2jj5QwVFyolb2vHGQKBgQDn69VItwv00oEq7v7r+bivbLE2J1JVGG47\nYL3C5cNlzxH9kmXGRraJrA37bNCgD4dlMaSBmBUQl4V2YEQjSQDyJy5yX0GOirWl\nCfHgaeymqU07fW1/xl5WfrNjlm1cHrtPZC8wqzrE+e5CXh8RQF0ai4nM4l4QydLw\nncnodiS/LwKBgHI8HtoMGB9gVCJjrgG1zLC3jxzQSNYnxQxyxPUXdm3es0M2aV5/\nj1ELzqVJju4G2m5OkXpj/TErQMPIvT83DsxShdEf+/PspNoGhc6et726Dvy2IvM+\n1GhRZuLMwFLE/KaHcNU5uMEi3BPPCa6300VytDXGsaeuEQmoTQk3ZSS5AoGAT0o7\nox6hwdPuQUVwdjDsSV15wK/04A74MOjEN8vh3/7Jgc35aa5nXe4q4Zi0QuTMP3aX\nbY8XNJL5GB2VbhLZdfCbWpLikN8vdvtNbJIKTHh5ZStesl6ZhizPG+8j+GixVVVF\nJPiFoS5pnNsc+ALvUdH/DMMfsdGugoEPtKAftBUCgYAnOuwGWwkk1PZTnqshzVyv\nq0q+hpm/Rns+fhUF8vF1PEjPbEJ/sP2aRKq+6tEVKXm+MJHG4CVq2kFHTGYsbI6I\nxh8+ZoZuXa7+UHVjALOo6sxT+ozIUhMTu8/7adG1KWLAJ03qKTipZ9oFzRJlF7Xh\nGrHo2Zn0VB+gO2MP8nIO6Q==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-hwrr4@coderhouse-31819.iam.gserviceaccount.com",
        "client_id": "103505461188033111544",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hwrr4%40coderhouse-31819.iam.gserviceaccount.com"
      }
      ,
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    }
}