const calcularIMC = require('./imc');
describe('Validador de IMC',()=>{
    test('Teste de abaixo do peso',()=>{
         const resultado  = calcularIMC(52.00, 1.75);
         expect(resultado).toEqual({
            imc:16.98,
            status:'Abaixo do peso normal'
         });
    });

    test('Teste de peso normal',()=>{
         const resultado  = calcularIMC(58.00, 1.60);
         expect(resultado).toEqual({
            imc:22.66,
            status:'Peso normal'
         });
    });

    test('Teste de excesso de peso',()=>{
          const resultado  = calcularIMC(78.00, 1.70);
         expect(resultado).toEqual({
            imc:26.99,
            status:'Excesso de Peso'
         });
    });

    test('Teste de obesidade',()=>{
         const resultado  = calcularIMC( 80.00, 1.55);
         expect(resultado).toEqual({
            imc:33.30,
            status:'Obesidade'
         });
    });
});
