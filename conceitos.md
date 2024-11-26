### **Aula de Lógica de Programação com JavaScript**  
Vamos aprender **lógica de programação** passo a passo com JavaScript, explicando os conceitos e como aplicá-los.

---

### **Conceitos Básicos**

#### 1. **Variáveis e Tipos de Dados**
As variáveis armazenam valores para que possamos reutilizá-los e manipulá-los.

**Significado e Uso:**  
- **`let`**: Declara variáveis que podem mudar de valor.  
- **`const`**: Declara variáveis cujo valor não muda.  
- **`var`**: Forma antiga, mas menos recomendada.

**Exemplo:**
```javascript
let nome = "Maria"; // Armazena um texto
let idade = 25;     // Armazena um número
let ativo = true;   // Armazena um valor booleano (verdadeiro ou falso)
```
**Uso:** Variáveis ajudam a guardar informações como nome, idade ou status de atividade.

---

#### 2. **Entrada e Saída de Dados**
- **Entrada:** Captura informações do usuário.  
- **Saída:** Exibe informações ao usuário.

**Exemplo:**  
- **Saída no console:**
  ```javascript
  console.log("Olá, Mundo!"); // Exibe o texto no console do navegador
  ```
- **Entrada usando `prompt`:**
  ```javascript
  let nome = prompt("Qual é o seu nome?"); // Captura o texto digitado pelo usuário
  console.log("Olá, " + nome + "!"); // Exibe no console
  ```
**Uso:** Entrada e saída permitem interagir com o usuário.

---

#### 3. **Operadores**
Os operadores realizam cálculos, comparações e combinações lógicas.

**Tipos de Operadores:**  
- **Aritméticos:** Para cálculos (`+`, `-`, `*`, `/`, `%`).
  ```javascript
  let soma = 5 + 3; // Resultado: 8
  ```
- **Comparação:** Para verificar condições (`==`, `!=`, `<`, `>`, `<=`, `>=`).
  ```javascript
  console.log(10 > 5); // true
  ```
- **Lógicos:** Para combinar condições (`&&` para "e", `||` para "ou", `!` para "não").
  ```javascript
  console.log(true && false); // false
  ```

**Uso:** Operadores ajudam a tomar decisões e executar cálculos.

---

#### 4. **Condicionais (`if/else`)**
Permitem que o programa tome decisões com base em condições.

**Significado:**  
- **`if`:** Executa um bloco se a condição for verdadeira.  
- **`else`:** Executa um bloco se a condição for falsa.

**Exemplo:**
```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```
**Uso:** Condicionais definem caminhos diferentes no programa, dependendo do valor de uma variável.

---

#### 5. **Laços de Repetição**
Os laços executam ações repetidas até que uma condição seja atendida.

- **`for`:** Quando sabemos quantas vezes queremos repetir algo.  
  **Exemplo:**
  ```javascript
  for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
  }
  ```
- **`while`:** Quando repetimos até uma condição ser falsa.  
  **Exemplo:**
  ```javascript
  let contador = 0;

  while (contador < 3) {
    console.log("Contador: " + contador);
    contador++;
  }
  ```

**Uso:** Laços economizam código ao repetir tarefas automaticamente.

---

#### 6. **Funções**
Blocos reutilizáveis que executam uma tarefa específica.

**Significado:**  
- **`function`:** Declara uma função.  
- **`return`:** Retorna um valor da função.

**Exemplo:**
```javascript
function saudacao(nome) {
  return "Olá, " + nome + "!";
}

console.log(saudacao("João")); // Chama a função com o argumento "João"
```
**Uso:** Funções organizam e reutilizam código em partes diferentes do programa.

---

### **Exercício Prático**
**Problema:**  
Crie um programa que:  
1. Pergunte o nome do usuário.  
2. Pergunte sua idade.  
3. Verifique se ele é maior de idade.  
4. Exiba a mensagem correspondente.  

**Passo a Passo Explicado:**  
1. **Declare variáveis para entrada:** Use `prompt` para capturar dados.  
2. **Use `if/else` para verificar a idade:** Execute diferentes ações com base no valor da variável.  
3. **Saída no console:** Use `console.log` para exibir o resultado.

**Código Completo:**
```javascript
let nome = prompt("Qual é o seu nome?"); // Captura o nome do usuário
let idade = Number(prompt("Qual é a sua idade?")); // Captura e converte a idade para número

if (idade >= 18) {
  console.log(nome + ", você é maior de idade e pode dirigir!");
} else {
  console.log(nome + ", você ainda é menor de idade e não pode dirigir.");
}
```

---

### **Conclusão**
- **Lógica de programação** é sobre resolver problemas passo a passo.
- **JavaScript** é uma ótima linguagem para praticar, pois é simples e poderosa.
- Pratique com exercícios simples e gradualmente explore conceitos mais avançados, como arrays e objetos. 

**Dica:** A prática e a curiosidade são as chaves para dominar a programação!