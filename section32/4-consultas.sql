SELECT * FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT
    c.nome as Cidade,
    e.nome as Estado,
    e.regiao as Região
FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT
    c.nome as Cidade,
    e.nome as Estado,
    e.regiao as Região
FROM estados e
INNER JOIN cidades c
ON e.id = c.estado_id;


/*JOIN*/
SELECT * FROM cidades c INNER JOIN prefeitos p on c.id = p.cidade_id;

SELECT * FROM cidades c LEFT JOIN prefeitos p on c.id = p.cidade_id;

SELECT * FROM cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;

-- SELECT * FROM cidades c FULL JOIN prefeitos p on c.id = p.cidade_id;

SELECT * FROM cidades c LEFT JOIN prefeitos p on c.id = p.cidade_id
UNION
SELECT * FROM cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;