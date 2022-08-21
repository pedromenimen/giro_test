# giro_test

O teste consiste em uma aplicação de 3 páginas, login, simulação de investimento e resultado do investimento. Para acessar basta instalar as depêndencias com o comando yarn no terminal, e para deixar a aplicação disponível localmente basta usar o comando yarn dev no terminal. A porta padrão geralmente é 5173.
A IDE utilizada foi o visual studio code, optei por utilizar o react e algumas bibliotecas pela familiaridade.
Alguns pontos importantes:
- A api disponibilizada estava fora do ar então tomei a liberdade de usar a [api do banco central do brasil](https://dadosabertos.bcb.gov.br/dataset/11-taxa-de-juros---selic/resource/b73edc07-bbac-430c-a2cb-b1639e605fa8)
- Caso essa api também venha a cair, o valor padrão da taxa selic será a mais recente(mockada na página result)
