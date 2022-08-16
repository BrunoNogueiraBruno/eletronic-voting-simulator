# eletronic-voting-simulator

Um grupo de alunos foi incumbido de elaborar um sistema de votação para a escolha do representante da sala. É preciso garantir que todos os 6 alunos votem, cada uma única vez, em alguma das chapas apresentadas.

- 1 Decompor o problema:

    - Consultar os candidatos de cada chapa:

            I. Listar as chapas e seus respectivos números de candidatura.

    - Votar para representante da turma:

            I. Inserir os dígitos da chapa desejada -- ou Votar branco;
            II. Filtrar dígitos inválidos;
            III. Confirmar voto.


    - Conferir resultado da eleição:

            I. Ordenar candidatos pelo número de votos.


- 2 Reconhecer os padrões recorrentes:

        I. Listar os candidatos por chapa -- ou por número de votos;
        II. Adicionar votos ao candidato X;

- 3 Abstrair tarefas e seus dados de entrada e saída:

    I. Listar as chapas:
    
        OUTPUT: nome dos candidatos, nome da chapa e número de candidatura;
    
    II. Votar:

        INPUT: número de candidatura (válido);
        OUTPUT: confirmação do voto.

    III. Conferir resultado:

        INPUT: número de votos que cada chapa recebeu;
        OUTPUT: chapa com maior número de votos.

- 4 Explicitar o algoritmo que resolve o problema.