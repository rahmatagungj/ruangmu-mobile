# RUANGMU MOBILE

## Build APK

Run this on Windows System

```bash
expo export --dev --public-url http://127.0.0.1:8000
```

```bash
npx http-server -p 8000 dist
```

Run this on LINUX System

```bash
sudo su \
EXPO_ANDROID_KEYSTORE_PASSWORD="1010123" \
EXPO_ANDROID_KEY_PASSWORD="1010123" \
turtle build:android \
  --type apk \
  --keystore-path ./keystore.keystore \
  --keystore-alias "stkip-ruangmu" \
  --allow-non-https-public-url \
  --public-url http://127.0.0.1:8000/android-index.json
```

#### Tools

1. Verify Export

```bash
curl http://127.0.0.1:8000/android-index.json
```

2. Make Keystore

```bash
keytool -genkeypair -v -keystore keystore.keystore -alias stkip-ruangmu -keyalg RSA -keysize 2048 -validity 10000
```
