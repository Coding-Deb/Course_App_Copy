const PRODUCTS = [
    {
        id: 100,
        name: 'C Programming',
        price: 350,
        image: require('../assets/C_Programme.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'C++ Programming',
        price: 600,
        image: require('../assets/C++_2.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'JAVA Programming',
        price: 500,
        image: require('../assets/JAVA_Programme.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 103,
        name: 'React JS',
        price: 500,
        image: require('../assets/REACT_JS.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 104,
        name: 'REACT NATIVE',
        price: 400,
        image: require('../assets/React-Natives.png'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    
];
// export function getProducts() {
//     return PRODUCTS;
// }
export function getProducts(){
    return PRODUCTS
}
// export function getProduct(id) {
//     return PRODUCTS.find((product) => (product.id == id)); 
// }

export function getProduct(id){
    return PRODUCTS.find((product)=>(product.id == id))
}