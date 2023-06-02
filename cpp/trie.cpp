// #include <iostream>
// #include <vector>
// #include <algorithm>
// #define ALFABETO 27

// struct vertice
// {
//     int arcos[ALFABETO]; // conjunto de arcos por cada possível caractere
//     bool chave = false;  // indica se o vértice é uma chave

//     vertice()
//     {
//         std::fill(begin(arcos), end(arcos), -1); // inicializa os arcos apontando para nada
//     }
// };

// std::vector<vertice> trie(1); // inicializa o trie somente com a raiz

// void add(string const &s)
// {
//     int v = 0; // começa pela raiz
//     for (char ch : s)
//     {
//         int c = ch - 'a'; // obtém a posição associada ao caractere atual
//         if (trie[v].arcos[c] == -1)
//         {
//             // se não houver arco saindo com c do vértice atual, então adiciona um novo arco
//             trie[v].arcos[c] = trie.size();
//             trie.emplace_back();
//         }
//         v = trie[v].arcos[c]; // se movimenta pela transição do caractere
//     }
//     trie[v].chave = true; // o último vértice é o fim da string, logo é chave
// }