# Calculadora - React and Redux

Nesse projeto, fiz uma calculadora com as 4 operações básicas usando React e Redux. Ela tem um funcionamento simples
com apenas dois números de cada vez e uma operação, todos feitos com select.

O design usa as cores do CASD do ITA e é bem simples.
 
O funcionamento é baseado em um Slice do redux com três variáveis no estado: numero1, numero2, operação.
Com as funções de redução: setNumero1, setNumero2, setOperacao, calcularResultado. Calcular resultado aplica
a operação em 1 e 2 respectivamente. 

O front sao apenas selects com o useSelector e useDispatch do redux para poder alterar o estado no projeto.

