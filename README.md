#### Requirements

* Generate your [Google Oauth Credentials](https://console.cloud.google.com/apis/credentials)

### Installation

Copy the `.env.example` to `.env.local`

Create a MongoDB database and place the URL in the `DATABASE_URL` environment variable.

Add your Google Client ID and Client Secret to your `.env` file under:

```
GOOGLE_CLIENT_ID=<CLIENT_ID>

GOOGLE_CLIENT_SECRET=<CLIENT_SECRET>
```