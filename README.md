# EarthlyTeaTales

Tea notes app

To Run:
Make sure docker is already up before running

```
docker-compose up
```

To check the contents of the database

```
docker exec -it post-gres-db psql -U postgres earthlyteatalesdb
```

Defaults
Database Name: (/l)
earthlyteatalesdb

Schema: (/dn)
earthlyteatales
