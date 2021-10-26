let pronoun = ['the','our', 'him', 'her'];
let adj = ['great', 'big', 'small' ];
let noun = ['jogger','racoon', 'dog', 'chicken'];
let domain = ['.com','.ve', '.cl', '.co']

for (let pronombre of pronoun) {
    for ( let caract of adj){
        for (let sujeto of noun){
            for (let dominio of domain){
                console.log(pronombre + caract + sujeto + dominio)
            }
        }
    }
}