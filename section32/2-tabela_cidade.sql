/*Cria a tabelinea*/
CREATE TABLE IF NOT EXISTS cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    area DECIMAL (10, 2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);

/*Cria a tebela só testar o drop depois..*/
CREATE TABLE IF NOT EXISTS teste (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

/*Deleta a tabela*/
DROP TABLE IF EXISTS teste;

/*Inserir as cidades...*/
INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 25);

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niterói', 133.9, 19);

/*Esse é pica, pega a chave estrangeira por um select S2*/
INSERT INTO cidades (nome, area, estado_id)
VALUES (
    'Caruaru',
    920.6,
    (SELECT id FROM estados WHERE sigla = 'PE')
);

INSERT INTO cidades (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte',
    248.2,
    (SELECT id FROM estados WHERE sigla = 'CE')
);

SELECT * FROM cidades;