export function solution(arraySecreto) {
    return(typeof arraySecreto[0] === "string"? true: false)
  }

  solution(["Huevo", "Gallina", "Vaca"])
  solution([1, "Gallina", "Vaca"]) 