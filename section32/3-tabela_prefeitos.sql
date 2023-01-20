CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id INT UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cidade_id), /*Determina que o valor não deve repetir, ou seja, será uma relação 1:1*/
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);

INSERT INTO prefeitos (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 5),
    ('Raquel Lyra', 6),
    ('Zenaldo Coutinho', NULL);

INSERT INTO prefeitos (nome, cidade_id)
VALUES
    ('Rafael Greca', NULL);

SELECT * FROM prefeitos;