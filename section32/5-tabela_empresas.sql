CREATE TABLE IF NOT EXISTS empresas(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

-- A RELAÇÃO N:N PRECISA TER UMA TABELA AUXILIAR PARA AS RELAÇÕES:
CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL,
    PRIMARY KEY (empresa_id, cidade_id) -- Chave dupla
);

ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas (nome, cnpj)
VALUES ('Petrobras', 35621465000145);

-- DELETE FROM empresas WHERE nome = 'Apple';

INSERT INTO empresas (nome, cnpj)
VALUES
    ('Apple', 33620045000145),
    ('Bradesco', 034951026000145),
    ('Vale', 68492154000145);

SELECT id FROM cidades WHERE nome = 'Campinas';
SELECT id FROM empresas WHERE nome = 'Bradesco';

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
    VALUES((SELECT id FROM empresas WHERE nome = 'Bradesco'), (SELECT id FROM cidades WHERE nome = 'Campinas'), 1);

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
    VALUES
    (3, 5, 0),
    (4, 4, 0),
    (4, 5, 1);