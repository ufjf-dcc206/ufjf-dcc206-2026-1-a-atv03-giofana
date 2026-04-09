const lista = ["um", "dois", "três"]; 

export function getLista() {
    const novaLista = []; // Cria uma nova lista com os mesmos elementos

    /*for(let i = 0; i < lista.length; i++) {
        novaLista.push(lista[i]);
    } */
   
    return novaLista;
    //return [...lista]; // Outra forma de criar uma nova lista com os mesmos elementos 
    // não precisa colocar o for dessa forma
}