


Listo de esperantistoj laŭ naskiĝtagoj laŭ vikidatumoj

Parolas P1412
Esperanto lingvo Q143

Okupo P106
Esperantisto Q860918

nask
https://www.wikidata.org/wiki/Property:P569

<!-- Quitar los muertos!!! -->

## Query data
Todos los esperantistas nacidos el 10 de sept

```
SELECT ?item ?itemLabel ?nask
WHERE
{
  ?item wdt:P1412 wd:Q143.       
  ?item wdt:P569 ?nask.
  FILTER (   month(?nask) = 09 && day(?nask) = 10  ).
  SERVICE wikibase:label { bd:serviceParam wikibase:language "eo,en" }
}
LIMIT 500
```

https://query.wikidata.org/sparql?query=SELECT%20%3Fitem%20%3FitemLabel%20%3Fnask%0AWHERE%0A%7B%0A%20%20%3Fitem%20wdt%3AP1412%20wd%3AQ143.%20%20%20%20%20%20%20%0A%20%20%3Fitem%20wdt%3AP569%20%3Fnask.%0A%20%20FILTER%20(%20%20%20month(%3Fnask)%20%3D%2009%20%26%26%20day(%3Fnask)%20%3D%2010%20%20).%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22eo%2Cen%22%20%7D%0A%7D%0ALIMIT%20500

