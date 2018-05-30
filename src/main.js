'use strict';
const SearchService = require('./searchService');
// const Provider = require('./strategy/provider');


module.exports.run = (event, context, callback) => {
  event.Records.forEach(function(record) {
    let payload = new Buffer(record.kinesis.data, 'base64') 
    
    //README: Implementando as funções em cada strategy será executado automaticamente, dado o parametro _service_ que vme no bus de event. 
    //README: Assim serve para qualquer serviço, mesmo que as mensagens sejam diferentes, a responsabilidade de tratar estará dentro do strategy.
    
    // const provider = new Provider(payload.service);
    // provider.strategy.process(payload);
    
    //README: Removendo as linhas abaixo para seu lugar apropriado.
 
    SearchService.index(
      index=payload.index,
      type=payload.type,
      body=payload
    );
  });
  context.succeed();
};
