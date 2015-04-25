# MEAN Base project
1. MongoDB
2. ExpressJS
3. AngularJS
4. NodeJS

# URLs de prueba
http://localhost:8080/

http://localhost:8080/#/post/list

http://localhost:8080/#/post/new

http://localhost:8080/#/post/edit/54c143e4a60815e00b8f2635

# API REST

GET
http://localhost:8080/api/post/54c143e4a60815e00b8f2635

GET (All items)
http://localhost:8080/api/post/

PUT + variables en body
http://localhost:8080/api/post/54c143e4a60815e00b8f2635

POST + variable en body
http://localhost:8080/api/post/

DELETE
http://localhost:8080/api/post/54c143e4a60815e00b8f2635

##App standar flux
#NodeJS
server (init webserver, database, routes)
config/router (router manager set req and res, check request, init a dynamic controller root|api|auth|standard)
controller/anyController (init the controller selected by router, call a method, and prints out html or json response)

#AngularJS
app (app main config, select dynamic controller, method and register a valid route state)
activeRecord (requests manager executes REST requests GET, PUT, POST, DElETE)
controllers/anyController (init the controller selected by app, init a scope method, instance a factory class)
factory/anyFactory (model extends activeRecord and call activeRecord methods)

## NodeJS API REST
GET

Filters
http://localhost:8080/api/post?sort=-date_updated
http://localhost:8080/api/post?limit=10
http://localhost:8080/api/post?skip=5

Filter Strings RegExp (AND, IN, OR, MATCH)
http://localhost:8080/api/post?search[and][title]=text*
http://localhost:8080/api/post?search[and][title]=*text*
http://localhost:8080/api/post?search[and][title]=*text

Filter Strings
http://localhost:8080/api/post?search[and][title]=text
http://localhost:8080/api/post?search[in][title]=art,blue
http://localhost:8080/api/post?search[or][textSmall]=art,blue&search[or][title]=text

Filter Dates
http://localhost:8080/api/post?search[greater][dateUpdated]=2015-01-29
http://localhost:8080/api/post?search[lower][dateUpdated]=2015-01-27
http://localhost:8080/api/post?search[greater][dateUpdated]=2015-01-24&search[lower][dateUpdated]=2015-01-29

Filter References
http://localhost:8080/api/post/54c6f120882d7b500f4f7200?ref[comment][fields]=title,dateCreated
http://localhost:8080/api/post/54c6f120882d7b500f4f7200?ref[comment][search][match][title]=comentario 1
http://localhost:8080/api/post/54c6f120882d7b500f4f7200?ref[comment][search][match][title]=comentario&ref[comment][sort]=-title
http://localhost:8080/api/post/54c6f120882d7b500f4f7200?ref[comment][search][match][title]=comentario&ref[comment][limit]=10
http://localhost:8080/api/post?ref[comment][sort]=-date_updated
http://localhost:8080/api/post?ref[comment][limit]=10
http://localhost:8080/api/post?ref[comment][skip]=5

Filter SubReferences
http://localhost:8080/api/post/54c6f120882d7b500f4f7200?ref[comment.human]=yes
http://localhost:8080/api/post/54c6f120882d7b500f4f7200?ref[comment.human][search][match][name]=claud

PUT
http://localhost:8080/api/post/54c6f120882d7b500f4f7200

params:
title = 'Titulo 1',
ref_commet = 54c6ea5701cc841c0ea29cbf


## AngularJS
http://localhost:8080/#/post/list

http://localhost:8080/#/auth/login
