/**
 * Correção de erro no Expo Go (iOS)
 * 
 * Documentação: https://docs.expo.dev/versions/latest/config/babel/
 * 
 * [PROBLEMA]
 * Ao executar o projeto no Expo Go em dispositivos iOS, a aplicação travava
 * apresentando a seguinte mensagem de erro no terminal/tela:
 * 
 * "[runtime not ready]: SyntaxError: 34070:5:private properties are not supported"
 * 
 * [CAUSA]
 * Esse erro ocorre porque o motor de JavaScript do dispositivo iOS antigo ou do ambiente
 * de simulação do Expo Go não conseguiu interpretar propriedades privadas de classe nativamente.
 * Faltava a compilação adequada fornecida pelo ecossistema do Expo.
 * 
 * [SOLUÇÃO]
 * A falha foi corrigida gerando/atualizando o arquivo de configuração do Babel na raiz
 * do projeto com as definições padrão de compilação do Expo.
 * 
 * Passo 1: Criar o arquivo `babel.config.js` via terminal caso ele não exista:
 *          npx expo customize babel.config.js
 * 
 * Passo 2: Configurar o arquivo utilizando o preset `babel-preset-expo`:
 * 
 * module.exports = function (api) {
 *   api.cache(true);
 *   return {
 *     presets: ['babel-preset-expo'],
 *   };
 * };
 * 
 * Passo 3: Reiniciar o Metro Bundler limpando o cache acumulado:
 *          npx expo start --clear
 */


module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
  };
};