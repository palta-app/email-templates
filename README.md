# Email Templaes

here you can find email templaes `html code` with their `code.json`

`code.html` has the email template code

while `code.json` is the json you need to upload to AWS SES (Simple Email Service)

---

for images use `static.palta.app` bucket in Palta S3

Icons were taken from https://fontawesome.com/

---

other references:

```
primary color (green): #05DC7E
secondary color (blue): #3E2CE2
```

---

# Upload tempaltes

para subir los templates debes hacerlo desde aws-cli:
```
aws ses create-template --cli-input-json file://<folder>/code.json
```
reemplaza <folder> con el template que quieras subir