// 클래스에서 정적 메소드 - static
// static - 특정구간에서 실행되지만 초기화는 한번만 되고
// 전연변수처럼 프로그램 종료시 까지 존재하여 값을 기억하고 있음.

class Product{
    static build(name, price){
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }
    static getTaxPrice(product){
        return(product.price*0.1) + product.price;
    }

    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product{
    depose(){
        this.deposed = true;

    }
}

const gum = Product.build('껌', 1000);
console.log(gum);


const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes)
console.log(taxPrice);
