/*CREATE DATABASE cursowebmoderno;*/

CREATE TABLE estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL, /*A região obrigatóriamente precisa ter um dos valores ('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul')*/
    populacao DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);

INSERT INTO estados (nome, sigla, regiao, populacao)
VALUES ('Acre','AC', 'Norte', 0.83);

INSERT INTO estados (nome, sigla, regiao, populacao)
VALUES
    ('Alagoas','AL', 'Nordeste', 3.38),
    ('Amapá','AP', 'Norte', 0.8),
    ('Amazonas','AM', 'Norte', 4.06);

/*Mais estados*/
INSERT INTO estados
    (nome, sigla, regiao, populacao)
VALUES
    ('Bahia', 'BA', 'Nordeste', 15.34),
    ('Ceará', 'CE', 'Nordeste', 9.02),
    ('Distrito Federal', 'DF', 'Centro-Oeste', 3.04),
    ('Espírito Santo', 'ES', 'Sudeste', 4.02),
    ('Goiás', 'GO', 'Centro-Oeste', 6.78),
    ('Maranhao', 'MA', 'Nordeste', 7.00),
    ('Mato Grosso', 'MT', 'Centro-Oeste', 3.34),
    ('Mato Grosso do Sul', 'MS', 'Centro-Oeste', 2.71),
    ('Minas Gerais', 'MG', 'Sudeste', 21.12),
    ('Pará', 'PA', 'Norte', 8.36),
    ('Paraíba', 'PB', 'Nordeste', 4.03),
    ('Parana', 'PR', 'Sul', 11.22),
    ('Pernambuco', 'PE', 'Nordeste', 9.47),
    ('Piauí', 'PI', 'Nordeste', 3.22),
    ('Rio de Janeiro', 'RJ', 'Sudeste', 16.72),
    ('Rio Grande do Norte', 'RN', 'Nordeste', 3.51),
    ('Rio Grande do Sul', 'RS', 'Sul', 11.32),
    ('Rondônia', 'RO', 'Norte', 1.81),
    ('Roraima', 'RR', 'Norte', 0.52),
    ('Santa Catarina', 'SC', 'Sul', 7.01),
    ('São Paulo', 'SP', 'Sudeste', 45.10),
    ('Sergipe', 'SE', 'Nordeste', 2.29),
    ('Tocantins', 'TO', 'Norte', 1.55);

/*Seleciona todas as colunas da tabela estados*/
SELECT * FROM estados;

/*Seleciona as colunas nome e sigla da tabela estados onde a região é igual a Sul*/
SELECT nome, sigla FROM estados WHERE regiao='Sul';

/*Seleciona as colunas nome e sigla da tabela estados onde a população é maior que 10 e retorna ordenando pela população do menor para o maior*/
SELECT nome, sigla
FROM estados
WHERE populacao >= 10
ORDER BY populacao;

/*Seleciona as colunas sigla e populacao da tabela estados onde a população é maior que 10 e retorna ordenando pela população do maior para o menos*/
SELECT sigla, populacao
FROM estados
WHERE populacao >= 10
ORDER BY populacao DESC;

/*Atualiza o nome onde a sigla é MA ******** UPDATE DEVE TER WHERE, se não altera toda a tabela *********/
UPDATE estados
SET nome = "Maranhão"
WHERE sigla = "MA";

UPDATE estados
SET populacao = 11.32,
    nome = "Paraná"
WHERE sigla = "PR";

SELECT nome, populacao from estados;

/*Calcula a população total e retorna como Total*/
SELECT
    sum(populacao) as Total
FROM estados;

/*Seleciona as regiões, soma a população de cada região e exibe a população por região em ordem decrescente*/
SELECT
    regiao as Região,
    sum(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY Total DESC;

/*Calcula a média população por estado e retorna como Média*/
SELECT
    avg(populacao) as Média
FROM estados;