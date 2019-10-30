API:
  Para rodar a api, é preciso criar um arquivo na pasta raiz (garupa-back) com o nome de <b>.env</b> com o seguinte conteúdo.
  <pre>
    # .env, don't commit to repo
    SECRET=26626f23f33687e3e206cbce0c39bcd6
  </pre>
  Este processo deve ser feito para gerar o token jwt

  <br/>
  <br/>

  <h3> Banco de dados </h3>
  Foi utilizado o banco de dados PostgreSQL, para criar as tabelas e o usuário basta copiar o conteúdo do arquivo querys.txt e rodar no banco. Deve ser criado um banco de dados e um schema com o nome de garupa. Caso queira mudar, deve ser mudado as string de conexão no arquivo <b>connectionFacotry.js</b> que se encontra dentro de <b>garupa-back/src/dao/</b>
 
  <br/> <br/>

  Entrar dentro das pasta garupa-back e garupa-front e rodar o comando <b>npm install</b>