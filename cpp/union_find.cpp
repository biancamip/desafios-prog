#define MAX 100
int cjt[MAX]; // conjunto do elemento i
int n[MAX];   // quantidade de elementos no conjunto

// função que inicializa o conjunto disjunto
void constroi()
{
    for (int i = 0; i < MAX; i++)
    {
        cjt[i] = i; // inicialmente o elemento está no conjunto que só o contem
        n[i] = 1;   // inicialmente o conjunto somente tem um elemento
    }
}

// função que procura o conjunto em que está um elemento
int busca(int i)
{
    if (i != cjt[i])            // verifica se é o topo do conjunto
        cjt[i] = busca(cjt[i]); // se não for o topo procura o topo e comprime caminho
    return cjt[i];              // retorna o topo do conjunto
}

// função que une os conjuntos de dois elementos
void une(int i, int j)
{
    int si = busca(i), sj = busca(j); // procura o topo dos conjuntos de i e j
    if (si != sj)
    { // somente une se estiverem em conjuntos diferentes
        if (n[si] >= n[sj])
        {                   // coloca o de menor quantidade no de maior
            cjt[sj] = si;   // sj não é mais topo, agora o topo dele é si
            n[si] += n[sj]; // atualiza a quantidade no topo
        }
        else
        {
            cjt[si] = sj;   // si não é mais topo, agora o topo dele é sj
            n[sj] += n[si]; // atualiza a quantidade no topo
        }
    }
}