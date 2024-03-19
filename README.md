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
Database Name: (/l and /c db-name)
earthlyteatalesdb

Schema: (/dn)
earthlyteatales

Command for tables for schema:
/dt earthlyteatales
